import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import LeftBar from '../../components/leftBar/LeftBar'
import Navbar from '../../components/navbar/Navbar'
import VideoList from '../../components/videoList/VideoList'
import { darkTheme, lightTheme } from '../../utils/theme'
import SignIn from '../signIn/SignIn'
import Video from '../video/Video'
import { Container, Wrapper } from './home.styles'


const Home = () => {
  const [lightMode, setLightMode] = useState(false)
  return (
    <ThemeProvider theme= {lightMode? lightTheme :darkTheme}>
      <Wrapper> 
      <Navbar/>
      <Container>
        <LeftBar lightMode= {lightMode} setLightMode={setLightMode}/>
          
          {/* <VideoList/> */}
          {/* <Video/> */}
        <SignIn/>
      </Container>
    </Wrapper>
    </ThemeProvider> 
    
  )
}

export default Home