import React from 'react'

function Die(props) {
  return (
    <div className="h-14 w-14 text-center rounded border shadow-md cursor-pointer bg-white">
      <p className='font-bold text-2xl flex justify-center items-center'>{props.value}</p>
    </div>
  );
}

export default Die;
