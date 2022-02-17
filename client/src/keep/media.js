import React, { useState } from 'react';
//The useRef is a hook that allows to directly create a reference
// to the DOM element in the functional component. 
import { useRef } from "react";

const Media = () => {
  const [status, setStatus] = useState('pause')
  const videoRef = useRef(null);

  
//Play and Pause button
  const play = (e) => { 
    if(status  === 'pause'){
        videoRef.current.play();
        e.target.textContent = '❚ ❚'
        setStatus("play")
    } else {
        videoRef.current.pause();
        setStatus("pause")
        e.target.textContent = '►'
    }
  }

  const stop = () => {
    if(status==="play"){
      videoRef.current.play();
    } else {}
  }

  const rewind = () => {
    if(status==="play"){
      videoRef.current.currentTime -= 5;
    }else{} 
  }

  const fastForward= () => {
    if(status==="play"){    
      videoRef.current.currentTime += 5;
    }else{} 
  }



    return (
      <div className="video-player">
        <h1>Voice Training with Matt</h1>
        <video src="/pitch.mp4" id="video" ref={videoRef}></video>
  
        <div className="player-controls">
          <button className="rewind-button" onClick={rewind}>⏮</button>
          <button className="play-button" onClick={play}>►</button>
          <button className="stop-button" onClick={stop}>◼</button>
          <button className="fast-button" onClick={fastForward}>⏭ </button>
        </div>
      </div>
    )
}

export default Media;