import { guitarNotes, notes, rootNotes } from "../data/notes"
import { svgs } from "../data/svgs"
import { Sigil } from "../components/sigil"
import { SigilRoot } from "../components/SigilRoot"

const sigilSize = Math.max(window.innerWidth / 30)


const Lyrenut = svgs['nut']
const Despair = svgs['badness']

const markerFrets = [3, 5, 7, 9, 12, 15]



export const FretBoard = ({scaleNotes, setSelectedNotes, selectedNotes}) => {
    return (
     <div className="w-screen flex justify-center">

      <div className="  flex items-center  relative">

        {/* strings */}
        <div className="absolute flex flex-col -z-10"
          style={{
            left: sigilSize * 1.3,  // nut width
            right: sigilSize * 2.0, // bridge width
            top: sigilSize * 1.1,   // half sigil to center on first row
            gap: sigilSize * 1.023,  // sigil size + row gap
            height: sigilSize * 6.3
          }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-full bg-teal-600"
              style={{
                height: i < 3 ? `${sigilSize * 0.015}px` : `${sigilSize * 0.015 * (i - 1)}px`,
                boxShadow: `0 0 ${sigilSize * 0.1}px ${sigilSize * 0.02}px rgba(94, 234, 212, 0.7)`
              }} />
          ))}
        </div>


        {/* open notes */}
        <div className="flex flex-col" style={{ rowGap: sigilSize * 0.05 }} >
          {rootNotes.map((note) => (
            <SigilRoot key={note} id={note} note={note} sigilSize={sigilSize}  scaleNotes={scaleNotes} setSelectedNotes={setSelectedNotes} selectedNotes={selectedNotes}/>
          ))}
        </div>

        {/* nut */}
        <Lyrenut width={sigilSize * 0.7} height={sigilSize * 7} style={{ flexShrink: 0 }} />

        <div className="relative">
          {/* stars above */}
          {markerFrets.map(fret => (
            <div key={`top-${fret}`} className="absolute text-shadow-amber-400 select-none"
              style={{
                left: `calc((${fret - 1} / 15.7) * 100% + ${sigilSize * 0.42}px)`,
                top: -sigilSize * 0.4,
                fontSize: sigilSize * 0.2
              }}>✦</div>
          ))}


          {/* fretted notes */}
          <div className="grid grid-cols-16" style={{ columnGap: sigilSize * 0.4, rowGap: sigilSize * 0.05 }}>
            {guitarNotes.map((note, i) => (
              <Sigil key={i} id={i} note={note} sigilSize={sigilSize} scaleNotes={scaleNotes} setSelectedNotes={setSelectedNotes} selectedNotes={selectedNotes}/>
            ))}
          </div>

          {/* stars below */}
          {markerFrets.map(fret => (
            <div key={`bot-${fret}`} className="absolute text-shadow-amber-400 select-none"
              style={{
                left: `calc((${fret - 1} / 15.7) * 100% + ${sigilSize * 0.42}px)`,
                bottom: -sigilSize * 0.4,
                fontSize: sigilSize * 0.2
              }}>✦</div>
          ))}
        </div>

        {/* bridge */}
        <div className="">
          <Despair width={sigilSize * 2.3} height={sigilSize * 7.5} />
        </div>

      </div>
    </div>
    )
}