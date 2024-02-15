import { ThemeProvider } from "@emotion/react"
import HomePage from "./pages/homePage"
import theme from "./styles/theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  )
}

export default App
