import { ThemeProvider } from "@emotion/react";
import HomePage from "./pages/homePage";
import theme from "./styles/theme";
import { useEffect } from "react";
import ContactPage from "./pages/contactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Takcooling";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="contact_us" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
