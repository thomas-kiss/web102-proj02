import { useState } from 'react'
import cards from './data/cards'
import Flashcard from './components/Flashcard'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  function nextCard() {
    if (currentIndex < cards.length - 1) setCurrentIndex(currentIndex + 1)
  }

  function prevCard() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  return (
    <div className="app">
      <h1>Korean Colors</h1>
      <p className="subtitle">Learn how to say colors in Korean</p>
      <p className="card-count">Card {currentIndex + 1} / {cards.length}</p>

      <Flashcard
        key={currentIndex}
        card={cards[currentIndex]}
      />

      <div className="nav-row">
        <button
          className="nav-btn"
          onClick={prevCard}
          disabled={currentIndex === 0}
        >
          ← Back
        </button>
        <button
          className="nav-btn"
          onClick={nextCard}
          disabled={currentIndex === cards.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default App
