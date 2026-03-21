import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card"

const cardValues = ["西", "北", "東", "南", "赤", "青", "緑", "白", "西", "北", "東", "南", "赤", "青", "緑", "白"]

function App() {
  return <div className="app">
    <GameHeader score={2} moves={3} />

    <div className="cards-grid">
      {cardValues.map((card) => (        
        <Card card={card} />
      ))}
    </div>

  </div>
}

export default App
