import React from 'react'
import RightBar from '../../components/rightBar/RightBar'
import VideoMain from '../../components/videoMain/VideoMain'
import { Wrapper } from './video.styles'

const Video = () => {
  return (
    <Wrapper>
      <VideoMain/>
      <RightBar/>
    </Wrapper>
  )
}

export default Video