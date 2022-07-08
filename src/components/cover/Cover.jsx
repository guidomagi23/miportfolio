import React from 'react'
import "../cover/Cover.css"
import coverVideo from '../../media/coverVideo.mp4'

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted/>
        <h1>Guido Magi</h1>
        <p>Desarrollador de Software</p>
        
    </div>
  )
}

export default Cover