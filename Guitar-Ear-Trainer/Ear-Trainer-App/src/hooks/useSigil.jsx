import { useState } from "react";

  const playNote = (note) => {
    const filename = note.replace('#', 's')
    const audio = new Audio(`/sounds/${filename}.mp3`)
    audio.play()
  }

export const useSigil = () => {
    const [isPressed, SetPressed] = useState(() => false)
    const [isVisible, setVisible] = useState(true)

    const handleClick = (note) => {
        if(!isPressed){
            playNote(note)
        }
        SetPressed(!isPressed)
        setVisible(true)
    }

    return {isPressed, handleClick, isVisible, setVisible}
}