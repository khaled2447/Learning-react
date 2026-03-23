import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card"
import { useEffect } from "react"
import { useState } from "react"
import { WinMessage } from "./components/WInMessage"

const cardValues = ["西", "北", "東", "南", "赤", "青", "緑", "白", "西", "北", "東", "南", "赤", "青", "緑", "白"]

function App() {

  const [cards, setcards] = useState(() => [])
  const [flippedCards, setFlippedCards] = useState(() => [])
  const [matchedCards, setMatchedCards] = useState(() => [])

  const [score, setScore] = useState(() => 0)
  const [moves, setMoves] = useState(() => 0)

  const [isLocked, setLock] = useState(() => false)

    const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initializeGame = () => {
    const huffledcards = shuffleArray(cardValues)

    const finalcards = huffledcards.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))
    setcards(finalcards);
    setScore(0)
    setMoves(0)
    setFlippedCards([])
    setMatchedCards([])
  }

  useEffect(
    () => {
      initializeGame()
    }, []
  )

  const handleOnclick = (card) => {
    if(card.isFlipped || card.isMatched || isLocked){
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
      setLock(true)
      const firstCard = cards[flippedCards[0]]
      if(firstCard.value === card.value){
        setTimeout(() => {
          const NewmatchedCards = [...matchedCards, card.id, firstCard.id]
          setMatchedCards(NewmatchedCards)
          const ToggleMatchedCards = newcards.map((c) => {
            if (NewmatchedCards.includes(c.id)){
              return {...c, isMatched: true}
            }
          return c;
          })
          setcards(ToggleMatchedCards)
          setFlippedCards([]);
          setLock(false)
        }, 500)
          setMoves(prev => prev+1)
        setScore(prev => prev+1)
      } else {
      setTimeout(() => {
        const flipCardsBack = cards.map((c) => {
        if(flippedCards.includes(c.id) || c.id === card.id){
          return {...c, isFlipped: false}
        }
        return c;
      })
      setcards(flipCardsBack);
      setFlippedCards([]);
      setLock(false)
      }, 500);
      setMoves(prev => prev+1)
    }
  }
}

  const IsGameComplete = matchedCards.length === cardValues.length

  return <div className="app">
    <GameHeader score={score} moves={moves} onReset={initializeGame}/>
    <div>
      {IsGameComplete && <WinMessage moves={moves}/>}
    </div>
    <div className="cards-grid">
      {cards.map((card) => (        
        <Card card={card} onClick={handleOnclick}/>
      ))}
    </div>
  </div>
}

export default App
