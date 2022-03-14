import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const navData = ["Product", "Pricing", "Contact", "Features"];

export default function GraphicLanding() {
  return (
    <>
      <AppBar sx={{ background: "#1D1D1D" }} elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            color={(theme) => theme.palette.primary.second}
            variant="h6"
          >
            GRAPHICA
          </Typography>
          <Box sx={{ display: "flex" }}>
            {navData.map((data) => (
              <Typography
                color={(theme) => theme.palette.primary.second}
                key={data}
                mx={2}
              >
                {data}
              </Typography>
            ))}
          </Box>
          <Button variant="contained">Sign In</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ background: "#1D1D1D", height: { md: "100vh" } }}>
        <Container component="main" maxWidth="md">
          <Typography color={"white"} align="center" pt={8} variant="h2">
            Graphic novels,at your fingertips.
          </Typography>
          <Typography
            color={(theme) => theme.palette.primary.second}
            align="center"
            pt={4}
          >
            Our cloud-based graphic novel database will enable you to find the
            most exotic
          </Typography>
          <Typography
            color={(theme) => theme.palette.primary.second}
            align="center"
          >
            graphic novels at an affordable package. Relive your nostalgias!
            Stay inspired!
          </Typography>
          <Container align="center" sx={{ mt: 4 }}>
            <Button variant="contained" sx={{ mx: 2 }}>
              Get Started
            </Button>
            <Button
              variant="text"
              sx={{ color: "white", textTransform: "none" }}
              startIcon={<PlayCircleOutlineIcon />}
            >
              See how it works
            </Button>
          </Container>
        </Container>
      </Box>
    </>
  );
}
