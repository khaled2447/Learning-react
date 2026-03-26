export const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

export const guitarNotes = ["E2", "F2" , "F#2", "G2", "G#2", "A2", "A#2", "B2", 
    "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", 
    "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", 
    "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
    "C6", "C#6", "D6", "D#6", "E6"]


export const scales = {
    major: {
        name: "Major",
        interval: [0, 2, 4, 5, 7, 9, 11]
    },
    minor: {
        name: "Minor",
        interval: [0, 2, 3, 5, 7, 8, 10]
    },
    melodicMinor: {
        name: "Melodic Minor",
        interval: [0, 2, 3, 5, 7, 9, 11]
    },
    harmonicMinor: {
        name: "Harmonic Minor",
        interval: [0, 2, 3, 5, 7, 8, 11]
    },
    dorian: {
        name: "Dorian",
        interval: [0, 2, 3, 5, 7, 9, 10]
    },
    phrygian: {
        name: "Phrygian",
        interval: [0, 1, 3, 5, 7, 8, 10]
    },
    lydian: {
        name: "Lydian",
        interval: [0, 2, 4, 6, 7, 9, 11]
    },
    mixolydian: {
        name: "Mixolydian",
        interval: [0, 2, 4, 5, 7, 9, 10]
    },
    locrian: {
        name: "Locrian",
        interval: [0, 1, 3, 5, 6, 8, 10]
    },
    minorPentatonic: {
        name: "Minor Pentatonic",
        interval: [0, 3, 5, 7, 10]
    },
    majorPentatonic: {
        name: "Major Pentatonic",
        interval: [0, 2, 4, 7, 9]
    },
    majorBlues: {
        name: "Major Blues",
        interval: [0, 2, 3, 4, 7, 9]
    },
    minorBlues: {
        name: "Minor Blues",
        interval: [0, 3, 5, 6, 7, 10]
    },
    augmented: {
        name: "Augmented",
        interval: [0, 3, 4, 7, 8, 11]
    },
    diminished: {
        name: "Diminshed",
        interval: [0, 2, 3, 5, 6, 8, 9, 11]
    }
}