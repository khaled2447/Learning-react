import { useState, useEffect } from "react"
import { ToolBar } from "./ToolBar"
import { FretBoard } from "./FretBoard"
import { generateScaleNotes } from "../data/gameLogic"
import { ToastContainer, toast, Zoom } from 'react-toastify'
import { audioReady } from "../data/audio"
import useSigilSize from "../hooks/sigilSize";



export const GameManager = () => {
    const sigilSize = useSigilSize();


    const [loaded, setLoaded] = useState(false)
    const [scale, selectScale] = useState("Major")
    const [root, selectRoot] = useState("C")
    const [scaleNotes, setScaleNotes] = useState([])
    const [selectedNotes, setSelectedNotes] = useState([])
    const [won, setWon] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (audioReady) {
                setLoaded(true)
                clearInterval(interval)
            }
        }, 100)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setScaleNotes(generateScaleNotes(scale, root))
        setSelectedNotes([])
        setWon(false)
    }, [scale, root])

if (!loaded) return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-slate-900">
        <svg className="size-10 animate-spin text-emerald-100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <div className="text-emerald-100 text-2xl">Getting audio ready...</div>
    </div>
)

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
            <ToolBar selectRoot={selectRoot} selectScale={selectScale} setSelectedNotes={setSelectedNotes} scaleNotes={scaleNotes} selectedNotes={selectedNotes} setWon={setWon} sigilSize={sigilSize} />
            <FretBoard scaleNotes={scaleNotes} setSelectedNotes={setSelectedNotes} selectedNotes={selectedNotes} won={won} />
        </>
    )
}