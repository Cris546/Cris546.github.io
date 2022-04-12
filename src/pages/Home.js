import React from 'react'

import '../styles/Home.css'

import pic from "../assests/cris.jpg"

function Home() {
  return (
    <div className='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src={pic} alt='cat' />
        </div>
      </div>
      <div className='right'>
        <div className='right-wrapper'>
          <h2 className='right-intro'>The name's</h2>
          <h1 className='right-name'>Cristobal Cortez</h1>
          <div className='right-title'>
            <div className='right-title-wrapper'>
              <div className='right-title-item'>Backend Developer</div>
              <div className='right-title-item'>Database Designer</div>
              <div className='right-title-item'>Frontend Developer</div>
              <div className='right-title-item'>Guitar Player</div>
              <div className='right-title-item'>Full Stack Engineer</div>

            </div>
          </div>
          <div className='right-desc'>
            Words Words Words Words Words Words Words Words Words Words Words Words
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home