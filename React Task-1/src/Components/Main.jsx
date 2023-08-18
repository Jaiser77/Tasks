import React from 'react'

export default function Main() {
  return (
    <div className='main'>
        <div className="col col1">
          <h2>Your Games</h2>
          <p>In here, You can Select whatever Games you want to play.<br/> If you want to select more, just click the button</p>
          <button type="button">More</button>
        </div>
        <div className='col'>
            <div className='card card1'></div>
            <div className='card card2'></div>
            <div className='card card3'></div>
            <div className='card card4'></div>
            <div className='card card5'></div>
            <div className='card card6'></div>
        </div>

    </div>
      
      
  )
}
