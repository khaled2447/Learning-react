import { useState } from 'react'
import { unlockAudio } from '../data/audio'

export const Splash = ({ onStart }) => {
    return (
        <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-50"
            onClick={() => { unlockAudio(); onStart() }}>
            <h1 className="text-emerald-100 text-4xl font-serif mb-4">Guitar Trainer</h1>
            <p className="text-emerald-400 text-sm animate-pulse">Tap to begin</p>
        </div>
    )
}