import { useState, createContext } from 'react'
import './App.css'
import styled from 'styled-components'
import Home from './components/home/Home'


const Container = styled.div<{ theme: string }>`
  width: 100vw;
  min-height: 100vh;
  font-family:sans-serif;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--light)" : "var(--dark)"};
  color: ${(props) =>
    props.theme === "light" ? "var(--dark)" : "var(--light)"};
`;

interface contextType {
  theme: string;
  setTheme: (theme: string) => void;
}
const defaultValue:contextType={
  theme:"light",
  setTheme:()=>{}
}
export const AppContext=createContext(defaultValue)
function App() {
  const [theme, setTheme] = useState("light")

  return (
    <AppContext.Provider value={{theme,setTheme}}>

    <Container theme={theme}>
      <Home/>
    </Container>
    </AppContext.Provider>
  )
}

export default App
