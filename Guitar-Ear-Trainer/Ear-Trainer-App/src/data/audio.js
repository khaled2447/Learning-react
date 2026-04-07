import { guitarNotes } from "./notes"

const audioCache = {}
export let audioReady = false

const loadAudio = () => {
    const allNotes = [...guitarNotes, 'E2']
    const promises = allNotes.map(note => {
        return new Promise(resolve => {
            const filename = note.replace('#', 's')
            const audio = new Audio(`/sounds/${filename}.mp3`)
            audio.addEventListener('canplaythrough', resolve, { once: true })
            audio.addEventListener('error', resolve, { once: true })
            audioCache[note] = audio
        })
    })

Promise.all(promises).then(() => {
    setTimeout(() => { audioReady = true }, 1500)
})}

loadAudio()

export const playNote = (note) => {
    audioCache[note].currentTime = 0
    audioCache[note].play()
}