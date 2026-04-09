import { useState } from 'react'
import { GameManager } from "./components/Manager"
import { Splash } from "./components/Splash"
import { unlockAudio } from "./data/audio"
import useOrientation from "./hooks/useOrientation"

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

export default function App() {
  const [started, setStarted] = useState(!isIOS)
  const { portrait, key } = useOrientation()

  if (portrait) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-screen bg-slate-900">
        <div className="text-emerald-100 text-2xl">
          Please rotate your phone
        </div>
      </div>
    )
  }

  if (!started) return <Splash onStart={() => { unlockAudio(); setStarted(true) }} />

  return (
    <div key={key}>
      <GameManager />
    </div>
  )
}