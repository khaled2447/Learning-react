import { scales } from "../data/notes"
import { notes } from "../data/notes"
import { generatePattern } from "../data/gameLogic"
import { playPattern } from "../data/gameLogic"
import { useState, useEffect } from "react"


export const ToolBar = ({ selectScale, selectRoot, setSelectedNotes, scaleNotes, selectedNotes, setWon }) => {

    const [played, setPlayed] = useState([])
    const [pattern, setPattern] = useState([])
    const SelectedClean = Array.from({ length: selectedNotes.length }, (_, i) =>
        selectedNotes[i][1] === '#' ? selectedNotes[i].slice(0, 3) : selectedNotes[i].slice(0, 2)
    )
    useEffect(() => {
        if (JSON.stringify(SelectedClean) === JSON.stringify(pattern) && pattern.length !== 0) {
            setWon(true)
        }
    }, [SelectedClean, pattern])


    return (

        <><div className="w-full bg-slate-900 flex items-center gap-4 px-6 py-3">
            <button className="bg-slate-800 text-emerald-100 rounded px-3 py-1 mr-10" onClick={() => generatePattern(scaleNotes, setPlayed, setPattern, setSelectedNotes, setWon)}>New pattern</button>
            <button className="bg-slate-800 text-emerald-100 rounded px-3 py-1 mr-10" onClick={() => playPattern(pattern, setPlayed)}>Listen again</button>
            <select className="bg-slate-800 text-emerald-100 rounded px-3 py-1"
                onChange={(e) => {
                    selectRoot(e.target.value)
                    setPattern([])
                }}>
                {notes.map((note) => (
                    <option key={note} value={note}>{note}</option>
                ))}
            </select>
            <select className="bg-slate-800 text-emerald-100 rounded px-3 py-1 mr-11"
                onChange={(e) => {
                    selectScale(e.target.value)
                    setPattern([])
                }}>
                {Object.keys(scales).map(scale => (
                    <option key={scale} value={scale}>{scales[scale].name}</option>
                ))}
            </select>
            <button className="bg-slate-800 text-emerald-100 rounded px-3 py-1" onClick={() => setSelectedNotes([])}>Reset</button>
        </div><div className="w-full relative flex justify-center gap-4 px-6 py-3">
                <div className="bg-slate-800 text-emerald-100 rounded px-8 py-3 flex items-center gap-3">
                    <span className="relative flex h-4 w-4">
                        {played[0] && (<span className={`absolute inline-flex h-full w-full ${SelectedClean[0] == pattern[0] && pattern.length != 0 ? 'animate-ping' : 'animate-ripple'} rounded-full ${SelectedClean[0] == pattern[0] ? 'bg-amber-500' : 'bg-sky-500'} opacity-75`}></span>)}
                        <span className={`relative inline-flex h-4 w-4 rounded-full ${SelectedClean[0] == pattern[0] && pattern.length != 0 ? 'bg-amber-500' : 'bg-sky-700'}`}></span>
                    </span>
                    <span className="relative flex h-4 w-4">
                        {played[1] && (<span className={`absolute inline-flex h-full w-full ${SelectedClean[1] == pattern[1] && pattern.length != 0 ? 'animate-ping' : 'animate-ripple'} rounded-full ${SelectedClean[1] == pattern[1] ? 'bg-amber-500' : 'bg-sky-500'} opacity-75`}></span>)}
                        <span className={`relative inline-flex h-4 w-4 rounded-full ${SelectedClean[1] == pattern[1] && pattern.length != 0 ? 'bg-amber-500' : 'bg-sky-700'}`}></span>
                    </span>
                    <span className="relative flex h-4 w-4">
                        {played[2] && (<span className={`absolute inline-flex h-full w-full ${SelectedClean[2] == pattern[2] && pattern.length != 0 ? 'animate-ping' : 'animate-ripple'} rounded-full ${SelectedClean[2] == pattern[2] ? 'bg-amber-500' : 'bg-sky-500'} opacity-75`}></span>)}
                        <span className={`relative inline-flex h-4 w-4 rounded-full ${SelectedClean[2] == pattern[2] && pattern.length != 0 ? 'bg-amber-500' : 'bg-sky-700'}`}></span>
                    </span>
                    <span className="relative flex h-4 w-4">
                        {played[3] && (<span className={`absolute inline-flex h-full w-full ${SelectedClean[3] == pattern[3] && pattern.length != 0 ? 'animate-ping' : 'animate-ripple'} rounded-full ${SelectedClean[3] == pattern[3] ? 'bg-amber-500' : 'bg-sky-500'} opacity-75`}></span>)}
                        <span className={`relative inline-flex h-4 w-4 rounded-full ${SelectedClean[3] == pattern[3] && pattern.length != 0 ? 'bg-amber-500' : 'bg-sky-700'}`}></span>
                    </span>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-2 px-6">
                <div className={`bg-slate-800 text-amber-400 rounded px-8 py-3 ${JSON.stringify(SelectedClean) === JSON.stringify(pattern) && pattern.length !== 0 ? 'visible' : 'invisible'}`}>
                    Success!
                </div>
                <button className={`bg-slate-800 text-emerald-100 rounded px-3 py-1 text-xs ${JSON.stringify(SelectedClean) === JSON.stringify(pattern) && pattern.length !== 0 ? 'visible' : 'invisible'}`} onClick={() => generatePattern(scaleNotes, setPlayed, setPattern, setSelectedNotes, setWon)}>
                    Click to play new pattern
                </button>
            </div>
        </>

    )
}