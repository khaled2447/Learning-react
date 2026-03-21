import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card"
import { useEffect } from "react"
import { useState } from "react"

const cardValues = ["西", "北", "東", "南", "赤", "青", "緑", "白", "西", "北", "東", "南", "赤", "青", "緑", "白"]

function App() {

  const [cards, setcards] = useState(() => [])
  const [flippedCards, setFlippedCards] = useState(() => [])

  const initializeGame = () => {
    //shuffle TODO

    const finalcards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))
    setcards(finalcards);
  }

  useEffect(
    () => {
      initializeGame()
    }, []
  )

  const handleOnclick = (card) => {
    if(card.isFlipped || card.isMatched){
      return;
    }
    const newcards = cards.map((c) => {
      if(c.id === card.id){
        return {...c, isFlipped: true}
      }
      return c;
    })
  setcards(newcards);

    const newFlippedCards = [...flippedCards, card.id]
    setFlippedCards(newFlippedCards)

    if(flippedCards.length === 1){
      const firstCard = cards[flippedCards[0]]
      if(firstCard.value === card.value){
    } else {

      setTimeout(() => {
        const flipCardsBack = newcards.map((c) => {
        if(flippedCards.includes(c.id) || c.id === card.id){
          return {...c, isFlipped: false}
        }
        return c;
      })
      setcards(flipCardsBack);
      setFlippedCards([]);
      }, 1000);
    }
  }
}


  return <div className="app">
    <GameHeader score={2} moves={3} />

    <div className="cards-grid">
      {cards.map((card) => (        
        <Card card={card} onClick={handleOnclick}/>
      ))}
    </div>

  </div>
}

export default App
