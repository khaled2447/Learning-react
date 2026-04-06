import { useState, useEffect } from "react"
import { ToolBar } from "./ToolBar"
import { FretBoard } from "./fretBoard"
import { generateScaleNotes } from "../data/gameLogic"
import { ToastContainer, toast, Zoom } from 'react-toastify'


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
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Zoom}
                limit={1}
                toastStyle={{ background: '#1E293B', color: '#D1FAE5' }}
            />
            <ToolBar selectRoot={selectRoot} selectScale={selectScale} setSelectedNotes={setSelectedNotes} scaleNotes={scaleNotes} />
            <FretBoard scaleNotes={scaleNotes} setSelectedNotes={setSelectedNotes} selectedNotes={selectedNotes} />
        </>
    )
}

