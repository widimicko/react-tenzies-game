import React from 'react'

function Die(props) {

  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white'
  }

  return (
    <div className="h-14 w-14 text-center rounded border shadow-md cursor-pointer" style={styles} onClick={props.holdDice}>
      <p className='font-bold text-2xl flex justify-center items-center'>{props.value}</p>
    </div>
  );
}

export default Die;
