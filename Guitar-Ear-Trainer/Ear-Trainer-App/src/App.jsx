import {guitarNotes, notes} from "./data/notes"
import { Sigil } from "./components/sigil"

function App() {

  return (
    <div className="grid grid-cols-21 gap-1">
   { guitarNotes.map((note) =>
      (
          <Sigil key={note}  id={note} note={note}/>
      )
    )}
    </div>
  )
    

}

export default App
