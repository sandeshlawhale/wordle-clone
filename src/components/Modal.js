import React from 'react'

export default function Modal({solution, turn, isCorrect}) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className="solution">{solution}</p>
                <p>You Found the solution in {turn} guesses :)</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Nevermind!</h1>
                <p className="solution">{solution}</p>
                <p>Better Luck Next Time :)</p>
            </div>
        )}
    </div>
  )
}
