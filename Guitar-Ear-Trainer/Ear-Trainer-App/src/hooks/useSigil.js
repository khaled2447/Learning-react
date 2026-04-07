import { toast } from "react-toastify";
import { playNote } from "../data/audio";

export const useSigil = () => {

    const handleClick = (note, inScale, setSelectedNotes, selectedNotes, id, won) => {
        if(won){
            return
        }
        if (!inScale){ 
            toast.clearWaitingQueue();
            toast.dismiss()
            toast("this note is not in scale...")
            return
        };

        if (selectedNotes.includes(note + id)) {
            if (selectedNotes[selectedNotes.length - 1] === note + id) {
                setSelectedNotes(selectedNotes.slice(0, -1))
            }else{
                toast.clearWaitingQueue();
                toast.dismiss()
                toast("Deselect notes in order or click reset button")
            }
            return;
        }

        if (selectedNotes.length > 3) return;

        setSelectedNotes([...selectedNotes, note + id])
        playNote(note)
    }

    return { handleClick }
}