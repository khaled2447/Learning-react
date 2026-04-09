import { guitarNotes } from "./notes"

const audioCache = {}
export let audioReady = false

const loadAudio = () => {
    const allNotes = [...guitarNotes, 'E2']
    const promises = allNotes.map(note => {
        return new Promise(resolve => {
            const filename = note.replace('#', 's')
            const audio = new Audio(`/sounds/${filename}.mp3`)
            audio.addEventListener('canplay', resolve, { once: true })
            audio.addEventListener('error', resolve, { once: true })
            audio.load()
            audioCache[note] = audio
        })
    })

Promise.all(promises).then(() => {
    setTimeout(() => { audioReady = true }, 1500)
})
}

loadAudio()

export const playNote = (note) => {
    audioCache[note].currentTime = 0
    audioCache[note].play()
}

export const unlockAudio = () => {
    const context = new (window.AudioContext || window.webkitAudioContext)()
    const buffer = context.createBuffer(1, 1, 22050)
    const source = context.createBufferSource()
    source.buffer = buffer
    source.connect(context.destination)
    source.start(0)
    context.resume()
}