import React from "react";
import { CssBaseline } from "@mui/material";
import { theme } from "./Forms/theme";
import { ThemeProvider } from "@mui/material/styles";

// import GraphicLanding from "./dribbleGraphicPage/GraphicLanding";
import ProfileForm from "./Forms/ProfileForm"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <GraphicLanding /> */}
      <ProfileForm />
    </ThemeProvider>
  );
}
