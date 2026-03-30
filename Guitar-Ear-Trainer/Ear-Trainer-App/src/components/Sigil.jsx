import { sigils } from "../data/sigils"

export const Sigil = ({sigil, onClick, note}) => {
    if(note[1]==="#"){
        var letter = note[0] + note[1]
    }else{
        var letter = note[0]
    }
    const SigilComponent = sigils[letter]

    return(
        <div className="relative w-12 h-12" onClick={() => onClick(sigil)}>
            <SigilComponent width="100%" height="100%"/>    
            <span className=" absolute flex inset-0 items-end justify-center text-shadow-emerald-500 font-bold font-serif" 
            style={{ paddingBottom: '12%', fontSize: '50%' }}>{note}</span> 
    </div>
    )
}