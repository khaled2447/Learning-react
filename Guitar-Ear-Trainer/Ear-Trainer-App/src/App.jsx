import { useState } from 'react'
import { GameManager } from "./components/Manager"
import { Splash } from "./components/Splash"
import { unlockAudio } from "./data/audio"
import useOrientation from "./hooks/useOrientation"

export default function App() {
  const [started, setStarted] = useState(false)
  const { portrait, key } = useOrientation()

  if (!started) return <Splash onStart={() => { unlockAudio(); setStarted(true) }} />

  if (portrait) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-screen bg-slate-900">
        <div className="text-emerald-100 text-2xl">
          Please rotate your phone
        </div>
      </div>
    )
  }

  return (
    <div key={key}>
      <GameManager />
    </div>
  )
}