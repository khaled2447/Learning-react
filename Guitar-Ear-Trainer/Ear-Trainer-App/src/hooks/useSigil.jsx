import { useState } from "react";
import { playNote } from "../data/audio";

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