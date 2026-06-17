import { useState } from 'react'

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      {flipped ? (
        <p>{card.answer}</p>
      ) : (
        <>
          <p>{card.question}</p>
          <p style={{ fontSize: '18px', color: '#888' }}>{card.phonetic}</p>
        </>
      )}
    </div>
  )
}

export default Flashcard