import { sigils } from "../data/sigils"
import { useSigil } from "../hooks/useSigil"

export const Sigil = ({ id, note, sigilSize, scaleNotes, setSelectedNotes, selectedNotes, won }) => {
    if (note[1] === "#") {
        var letter = note[0] + note[1]
    } else {
        var letter = note[0]
    }
    const SigilComponent = sigils[letter]

    const { handleClick } = useSigil()

    var inScale = scaleNotes.includes(letter)
    const position = selectedNotes.indexOf(note+id) + 1
    const isPressed = position > 0

    if (isPressed) {
        return (
            <div className="relative select-none" style={{ width: sigilSize, height: sigilSize }} onClick={() => handleClick(note, inScale, setSelectedNotes, selectedNotes, id, won)} >
                <div className="absolute flex inset-0 items-center justify-center z-20">
                    <SigilComponent width="89%" height="89%" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="rounded-full bg-black opacity-15" style={{ width: '89%', height: '89%' }} />
                </div>
                <span className="absolute inline-flex animate-ripple rounded-full bg-emerald-300 opacity-75 z-10"
                    style={{ width: '84%', height: '84%', top: '8%', left: '8%' }}></span>
                <span className="absolute flex inset-0 items-end justify-center text-shadow-emerald-500 font-bold font-serif z-20"
                    style={{ paddingBottom: '15%', fontSize: sigilSize * 0.13 }}>{note}</span>
                {!inScale && (<div className="absolute rounded-full bg-black opacity-60 z-30"
                    style={{ width: '90%', height: '90%', top: '5%', left: '5%' }} />)}
                {position > 0 && (
                    <span className="relative flex" style={{ width: sigilSize * 0.4, height: sigilSize * 0.4 }}>
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-700 opacity-90"></span>
                        <span className="relative inline-flex h-full w-full rounded-full bg-sky-700 opacity-90 z-40"></span>
                        <span className="absolute flex inset-0 items-center justify-center text-white font-bold font-serif z-50"
                            style={{ fontSize: sigilSize * 0.25, marginBottom: sigilSize * 0.05 }}>{position}</span>
                    </span>
                )}
            </div>
        )
    } else {
        return (
            <div className="relative select-none" style={{ width: sigilSize, height: sigilSize }} onClick={() => handleClick(note, inScale, setSelectedNotes, selectedNotes, id, won)}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <SigilComponent width="100%" height="100%" />
                </div>
                <span className="absolute flex inset-0 items-end justify-center text-shadow-emerald-500 font-bold font-serif"
                    style={{ paddingBottom: '12%', fontSize: sigilSize * 0.16 }}>{note}</span>
                {!inScale && (<div className="absolute rounded-full bg-black opacity-60"
                    style={{ width: '102%', height: '102%', top: '-1%', left: '-1%' }} />)}
            </div>
        )
    }
}