import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
       
          <Routes>
            <Route path='/'>
              <Route index element={<VideoList/>}/>
              <Route path='signin' element={<SignIn/>}/>
              <Route path='video'>
                <Route path=':id' element={<Video/>}/>

              </Route>
            </Route>
            
          </Routes>
       
          
          {/* <VideoList/> */}
           {/* <Video/> */}
        {/* <SignIn/> */}
      </Container>
    </Wrapper>
    </ThemeProvider> 
    
  )
}

export default Home