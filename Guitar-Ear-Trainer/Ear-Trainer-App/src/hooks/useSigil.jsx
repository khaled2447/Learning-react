import { useState } from "react";

export const useSigil = () => {
    const [isPressed, SetPressed] = useState(() => false)
    const [isVisible, setVisible] = useState(true)

    const handleClick = () => {
        SetPressed(!isPressed)
        setVisible(true)
    }

    return {isPressed, handleClick, isVisible, setVisible}
}