import { scales } from "../data/notes"
import { notes } from "../data/notes"

export const ToolBar = ({selectScale, selectRoot, setSelectedNotes})=> {
    return (

        <div className="w-full bg-slate-900 flex items-center gap-4 px-6 py-3">
            <button className="bg-slate-800 text-emerald-100 rounded px-3 py-1">Play pattern</button>
            <select className="bg-slate-800 text-emerald-100 rounded px-3 py-1" 
             onChange={(e) => selectRoot(e.target.value)}>
                {notes.map((note) => (
                    <option key={note} value={note}>{note}</option>
                ))}
            </select>
            <select className="bg-slate-800 text-emerald-100 rounded px-3 py-1"
            onChange={(e) => selectScale(e.target.value)}>
                {Object.keys(scales).map(scale => (
                    <option key={scale} value={scale}>{scales[scale].name}</option>
                ))}
            </select>
            <button className="bg-slate-800 text-emerald-100 rounded px-3 py-1"  onClick={() => setSelectedNotes([])}>Reset</button>
            <button className="bg-slate-800 text-emerald-100 rounded px-3 py-1">Give Up</button>
        </div>
    )
}