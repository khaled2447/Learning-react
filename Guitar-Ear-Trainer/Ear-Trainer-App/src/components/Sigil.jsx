import { useState } from "react"
import { sigils } from "../data/sigils"
import { useSigil } from "../hooks/useSigil"
export const Sigil = ({sigil, onClick, note}) => {
    if(note[1]==="#"){
        var letter = note[0] + note[1]
    }else{
        var letter = note[0]
    }
    const SigilComponent = sigils[letter]

    const {isPressed, handleClick, isVisible, setVisible} = useSigil()



    if (isPressed){
        return(
            <div className="relative w-16 h-16 select-none" onClick={() => handleClick(note)} >
                <div className="absolute flex inset-0 items-center justify-center z-20" >
                    <SigilComponent width="89%" height="89%"/>    
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="rounded-full bg-black opacity-15" style={{ width: '89%', height: '89%' }} />
                </div>
                    {isVisible && (<span class="absolute inline-flex h-full w-full animate-ping rounded-full 
                    bg-emerald-300 opacity-75 items-center justify-center z-10"
                    onAnimationEnd={()=>{setVisible(false)}}
                     style={{ width: '84%', height: '84%', top: '8%', left: '8%' }}></span>)}
                <span className=" absolute flex inset-0 items-end justify-center text-shadow-emerald-500 font-bold font-serif z-20" 
                style={{ paddingBottom: '15%', fontSize: '45%'}}>{note}</span> 
            </div>
        )
    }else{
        return(
            <div className="relative w-16 h-16 select-none" onClick={() => handleClick(note)}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <SigilComponent width="100%" height="100%" />
                </div>  
                <span className=" absolute flex inset-0 items-end justify-center text-shadow-emerald-500 font-bold font-serif" 
                style={{ paddingBottom: '12%', fontSize: '50%' }}>{note}</span> 
            </div>
        )
    }
}