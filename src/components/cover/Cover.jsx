import React from 'react'
import "../cover/Cover.css"
import coverVideo from '../../media/coverVideo.mp4'

const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='video' src={coverVideo} autoPlay loop muted />
      <h1>Guido Magi</h1>
      <h2>Desarrollador de Software</h2>
      <h3>Laravel | JavaScript | Java | WordPress | CSS | HTML | SQL | MySQL | Git</h3>

    </div>
  )
}

export default Cover