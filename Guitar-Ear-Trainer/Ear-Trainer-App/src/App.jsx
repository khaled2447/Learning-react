import {notes, scales, guitarNotes} from "./data/notes"

function App() {

  return (
    <div className= "bg-white dark:bg-gray-800 px-6 py-8 ring shadow-xl ring-gray-900/5 h-screen">
      <div className="grid grid-cols-12 gap-4">
        {guitarNotes.map((note) => {return <span className="text-amber-400" key={note}>{note}</span>})}
      </div>
    </div>
  )
}

export default App
