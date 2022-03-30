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
      <div className='right'>right</div>
    </div>
  )
}

export default Home