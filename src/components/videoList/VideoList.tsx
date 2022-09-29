import React from 'react'
import VideoCard from '../videoCard/VideoCard'
import { Content, Wrapper } from './video.styles'

const VideoList = () => {
  return (
    <Wrapper>
      <Content>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </Content>
    </Wrapper>
  )
}

export default VideoList