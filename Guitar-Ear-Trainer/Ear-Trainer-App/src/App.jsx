import {guitarNotes, notes} from "./data/notes"
import { Sigil } from "./components/sigil"

function App() {

  return (
    <div className="grid grid-cols-17 gap-0.5">
   { guitarNotes.map((note) =>
      (
          <Sigil key={note}  id={note} note={note}/>
      )
    )}
    </div>
  )
    

}

export default App
