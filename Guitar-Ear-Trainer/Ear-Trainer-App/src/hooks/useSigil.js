import { playNote } from "../data/audio";

export const useSigil = () => {

    const handleClick = (note, inScale, setSelectedNotes, selectedNotes, id) => {
        if (!inScale) return;

        if (selectedNotes.includes(id)) {
            if (selectedNotes[selectedNotes.length - 1] === id) {
                setSelectedNotes(selectedNotes.slice(0, -1))
            }
            return;
        }

        if (selectedNotes.length > 4) return;

        setSelectedNotes([...selectedNotes, id])
        playNote(note)
    }

    return { handleClick }
}