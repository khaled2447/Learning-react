import { scales, notes } from "./notes"

export const generateScaleNotes = (scale, root) => {
    var generatedScaleNotes = []

    for(var i = 0; i < notes.length; i++){
        if(notes[i]==root){
            for (let j = 0; j < 12; j++) {
                if(scales[scale.toLowerCase()].interval.includes(j)){
                    generatedScaleNotes.push(notes[(i+j)%notes.length])
                }
            }
        }
    }
    return generatedScaleNotes
}