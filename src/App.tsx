import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home";
import {darkTheme, lightTheme} from './utils/theme'

function App() {
  const [lightMode, setLightMode] = useState(false)
  return (
    <div className="App">
      <ThemeProvider theme= {lightMode? lightTheme :darkTheme} >
         <Home lightMode = {lightMode} setLightMode={setLightMode}/>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
