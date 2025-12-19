import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";

function App() {
  const darkMode = useAppSelector((state) => state.ui.darkMode);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "dark" ? "#121212" : "#eaeaea",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Box
          sx={{
            minHeight: "100vh",
            background: darkMode
              ? "radial-gradient(circle,#1e3aba,#111B27)"
              : "radial-gradient(circle,#baecf9,#f0f9ff)",
            py: 4,
          }}
        >
          <Container maxWidth="xl" sx={{ mt: 14 }}>
            <Outlet />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
