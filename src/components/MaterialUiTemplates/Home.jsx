import React from "react";
import { theme } from "./theme";
import NavigationMenu from "./TemplateNavigation/NavigationMenu";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationMenu />
    </ThemeProvider>
  );
}
