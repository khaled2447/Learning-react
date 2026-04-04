import { scales } from "../data/notes"

export const ToolBar = () => {
    return (
        <div className="w-full bg-emerald-950 flex items-center gap-4 px-6 py-3">
            <select className="bg-emerald-900 text-emerald-100 rounded px-3 py-1">
                {Object.keys(scales).map(scale => (
                    <option key={scale} value={scale}>{scales[scale].name}</option>
                ))}
            </select>
            <button className="bg-emerald-900 text-emerald-100 rounded px-3 py-1">Reset</button>
            <button className="bg-emerald-900 text-emerald-100 rounded px-3 py-1">Give Up</button>
        </div>
    )
}