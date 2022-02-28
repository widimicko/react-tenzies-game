import React, { useState } from 'react'

import { nanoid } from 'nanoid'

import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice())

  console.log(dice)

  function allNewDice() {
    const dices = []
    for (let i = 0; i < 10; i++) {
      dices.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      })
    }
    return dices
  }

  function rollDice() {
    setDice(allNewDice())
  }

  return (
    <div className="h-screen w-screen bg-[#0B2434] p-5">
      <main className="bg-[#F5F5F5] h-[400px] max-w-[800px] rounded-lg p-5 flex flex-col justify-around items-center">
        <div className='grid grid-cols-5 gap-4'>
          {
            dice.map((die) => {
              return <Die key={die.id} value={die.value} isHeld={die.isHeld} />
            })
          }
        </div>
        <button onClick={rollDice} className="h-9 w-20 text-lg bg-[#5035FF] rounded-lg text-white mt-5 active:shadow-2xl active:bg-[#170975]">Roll</button>
      </main>
    </div>
  );
}

export default App;
