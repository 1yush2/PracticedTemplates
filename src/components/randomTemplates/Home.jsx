import { CssBaseline } from "@mui/material";
import React from "react";
import GraphicLanding from "./dribbleGraphicPage/GraphicLanding";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GraphicLanding />
    </ThemeProvider>
  );
}
