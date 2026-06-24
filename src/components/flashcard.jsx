import { useState } from 'react'

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState(null) // 'correct' | 'incorrect' | null

  function handleSubmit() {
    if (!guess.trim()) return
    const isCorrect = guess.trim().toLowerCase() === card.answer.toLowerCase()
    setFeedback(isCorrect ? 'correct' : 'incorrect')
    if (isCorrect) setFlipped(true)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="flashcard-wrapper">
      <div
        className={`card-scene${feedback ? ` feedback-${feedback}` : ''}`}
        onClick={() => setFlipped(f => !f)}
      >
        <div className={`card-inner${flipped ? ' flipped' : ''}`}>
          <div className="card-face card-front">
            <p className="card-text">{card.question}</p>
            <p className="phonetic">{card.phonetic}</p>
          </div>
          <div className="card-face card-back">
            <p className="card-text">{card.answer}</p>
          </div>
        </div>
      </div>

      {feedback === 'correct' && (
        <p className="feedback-msg correct-msg">✓ Correct!</p>
      )}
      {feedback === 'incorrect' && (
        <p className="feedback-msg incorrect-msg">✗ Not quite — try again!</p>
      )}

      <div className="guess-row">
        <input
          className="guess-input"
          type="text"
          placeholder="Type your answer in English..."
          value={guess}
          onChange={e => setGuess(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Flashcard
