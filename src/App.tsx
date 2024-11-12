import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Generator } from "@src/pages";
import { initGA, theme } from "@src/utils";

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Generator />
    </ThemeProvider>
  );
}

export default App;
