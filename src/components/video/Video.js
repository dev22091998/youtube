import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import './_video.scss'

const Video = () => {
  return (
      <>
        <div className='video'>
          <div className='video__top'>
            <img src="https://i.ytimg.com/vi/DyvDXY1aAzA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjpnqIpRrltzJ0EcbXRi8N2HtCWQ" alt="" />  
            <span>05:43</span>
          </div>  
          <div className='video__title'>
            Create app in 5 minutes #made by Chintu
          </div>  
          <div className='video__details'>
            <span>
              <AiFillEye /> 5m Views •
            </span>  
            <span>5 days ago</span>
          </div>  
          <div className='video__channel'>
            <img src="https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s68-c-k-c0x00ffffff-no-rj" alt="" />
          </div>  
        </div>      
      </>
  )
}

export default Video