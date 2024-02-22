import { ThemeProvider } from "@emotion/react"
import HomePage from "./pages/homePage"
import theme from "./styles/theme"
import { useEffect } from "react"

function App() {

  useEffect( () => {
    document.title = "Takcooling"
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  )
}

export default App
