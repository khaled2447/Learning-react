import { sigils } from "../data/sigils"

export const Sigil = ({note}) => {
    const SigilComponent = sigils.A 

    return(
        <div>
            <SigilComponent width="64" height="64" className="relative"
            />
                         <span className="absolute inset-0 flex items-center justify-center text-teal-600 font-bold text-sm">
        AAAGAGAGAGAGAJIYULWEFFGUEWGFWGFFYUEBULIGFO8WFGVYUF</span>

        </div>
    )
}