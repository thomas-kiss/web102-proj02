import { useState } from 'react'
import cards from './data/cards'
import Flashcard from './components/Flashcard'
import './App.css'


function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  function nextCard() {
    let next
    do {
      next = Math.floor(Math.random() * cards.length)
    } while (next === currentIndex)
    setCurrentIndex(next)
  }

  return (
    <div className="App">
      <h1>Korean Colors</h1>
      <p>Learn how to say colors in Korean</p>
      <p>Total cards: {cards.length}</p>

      <Flashcard key={currentIndex} card={cards[currentIndex]} />
      
      <button onClick={nextCard}>Next</button>
    </div>
  )
}

export default App