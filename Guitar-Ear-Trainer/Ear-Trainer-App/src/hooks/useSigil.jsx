import { useState } from "react";
import { playNote } from "../data/audio";

export const useSigil = () => {
    const [isPressed, SetPressed] = useState(() => false)

    const handleClick = (note, inScale) => {
        if(!inScale){
            return;
        }
        if(!isPressed){
            playNote(note)
        }
        SetPressed(!isPressed)
    }

    return {isPressed, handleClick}
}