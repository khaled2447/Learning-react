import {guitarNotes, notes} from "./data/notes"
import { Sigil } from "./components/sigil"

function App() {

  return (

    notes.map((note) => {
      return(
        <Sigil key={note}  id={note} note={note}/>
      )
    }))
}

export default App
