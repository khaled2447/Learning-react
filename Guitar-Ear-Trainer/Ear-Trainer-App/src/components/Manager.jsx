import { useState, useEffect } from "react"
import { ToolBar } from "./ToolBar"
import { FretBoard } from "./fretBoard"
import { generateScaleNotes } from "../data/gameLogic"

export const GameManager = () => {

    const [scale, selectScale] = useState("Major")
    const [root, selectRoot] = useState("C")
    const [scaleNotes, setScaleNotes] = useState([])


    useEffect(() => {
        setScaleNotes(generateScaleNotes(scale, root))
    }, [scale, root])

    return (
        <>
            <ToolBar selectRoot={selectRoot} selectScale={selectScale} />
            <FretBoard scaleNotes={scaleNotes} />
        </>
    )
}