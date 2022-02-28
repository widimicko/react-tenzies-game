import React, { useState } from 'react'
import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const dices = []
    for (let i = 0; i < 10; i++) {
      dices.push({
        id: i,
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
            dice.map((dice) => {
              return <Die key={dice.id} value={dice.value} />
            })
          }
        </div>
        <button onClick={rollDice} className="h-9 w-20 text-lg bg-[#5035FF] rounded-lg text-white mt-5 active:shadow-2xl active:bg-[#170975]">Roll</button>
      </main>
    </div>
  );
}

export default App;
