import { guitarNotes } from "./notes"

const audioCache = {}
guitarNotes.forEach(note => {
  const filename = note.replace('#', 's')
  audioCache[note] = new Audio(`/sounds/${filename}.mp3`)
})
audioCache['E2'] = new Audio('/sounds/E2.mp3')

export const playNote = (note) => {
  audioCache[note].currentTime = 0
  audioCache[note].play()
}