import React, { useEffect, useState } from 'react'

import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  function allNewDice() {
    const dices = []
    for (let i = 0; i < 10; i++) {
      dices.push(generateNewDie())
    }
    return dices
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} :
        die 
    }))
  }

  useEffect(() => {
    const allDieHeld = dice.every(die => die.isHeld)
    const firstDieValue = dice[0].value
    const allDieSameValue = dice.every(die => die.value === firstDieValue)

    if (allDieHeld && allDieSameValue) {
      setTenzies(true)
    }
  }, [dice])

  function handleButtonClick() {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ?
          die :
          generateNewDie()
  
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice( ))
    }
    
  }

  return (
    <div className="h-screen w-screen bg-[#0B2434] p-5">
      <main className="bg-[#F5F5F5] h-[400px] max-w-[800px] rounded-lg p-5 flex flex-col justify-around items-center">
        {tenzies && <Confetti />}
        <div className="text-center">
          <h1 className='font-bold text-2xl'>Tenzies</h1>
          <p>Roll until dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className='grid grid-cols-5 gap-4'>
          {
            dice.map((die) => {
              return <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
            })
          }
        </div>
        <button onClick={handleButtonClick} className="h-9 w-28 text-lg bg-[#5035FF] rounded-lg text-white mt-5 active:shadow-2xl active:bg-[#170975]">
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </main>
    </div>
  );
}

export default App;
