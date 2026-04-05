import { useState, useEffect } from "react"
import { ToolBar } from "./ToolBar"
import { FretBoard } from "./fretBoard"
import { generateScaleNotes } from "../data/gameLogic"

export const GameManager = () => {

    const [scale, selectScale] = useState("Major")
    const [root, selectRoot] = useState("C")
    const [scaleNotes, setScaleNotes] = useState([])
    const [selectedNotes, setSelectedNotes] = useState([])


    useEffect(() => {
        setScaleNotes(generateScaleNotes(scale, root))
        setSelectedNotes([])
    }, [scale, root])

    return (
        <>
            <ToolBar selectRoot={selectRoot} selectScale={selectScale} setSelectedNotes={setSelectedNotes}/>
            <FretBoard scaleNotes={scaleNotes} setSelectedNotes={setSelectedNotes} selectedNotes={selectedNotes}/>
        </>
    )
}