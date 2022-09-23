import React from 'react'
import LeftBar from '../../components/leftBar/LeftBar'
import Navbar from '../../components/navbar/Navbar'
import VideoList from '../../components/videoList/VideoList'
import { Container, Wrapper } from './home.styles'

type props = {
  lightMode : boolean,
  setLightMode: any
}

const Home: React.FC<props> = ({lightMode, setLightMode}) => {
  return (
    <Wrapper> 
      <Navbar/>
      <Container>
        <LeftBar lightMode= {lightMode} setLightMode={setLightMode}/>
        <VideoList/>
      </Container>
    </Wrapper>
  )
}

export default Home