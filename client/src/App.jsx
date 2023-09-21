import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/Login";
import Admin from "./Components/AdminHome";
import User from "./Components/UserHome";
import Employee from "./Components/EmployHome";

const basicTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#a5a3d6",
    },
    secondary:{
      main: "#544de8",
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LogIn />} /> */}
          <Route path="/" element={<Admin />} />
          {/* <Route path="/" element={<Employee />} /> */}
          {/* <Route path="/" element={<User />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
