import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Card,
  Grid,
  CardActions,
  IconButton,
  CardContent,
  CardMedia,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import SearchIcon from "@mui/icons-material/Search";

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
      <Box sx={{ background: "#1D1D1D" }}>
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

        <Container component="main">
          <Grid container maxWidth="md" mt={5}>
            <Grid item md={6}>
              <Typography variant="h4" color={"white"} mt={5}>
                1200+
              </Typography>
              <Typography variant="body1" color={"white"} py={2}>
                Novels
              </Typography>
              <Typography
                color={(theme) => theme.palette.primary.second}
                variant="subtitle2"
              >
                Our archives hold graphic <br /> novels from creation day.
              </Typography>

              <Typography variant="h4" color={"white"} mt={3}>
                40+
              </Typography>
              <Typography variant="body1" color={"white"} py={2}>
                Categories
              </Typography>
              <Typography
                color={(theme) => theme.palette.primary.second}
                variant="subtitle2"
              >
                Diverse Catergories even your
                <br /> grandad would enjoy.
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "flex-end",
              }}
              mt={10}
            >
              <Card
                sx={{
                  width: "250px",
                  height: "280px",
                  marginRight: "20px",
                  background: (theme) => theme.palette.secondary.second,
                }}
              >
                <CardActions>
                  <IconButton color="primary" sx={{ marginRight: "auto" }}>
                    <ArrowCircleLeftIcon />
                  </IconButton>
                  <IconButton color="primary">
                    <BookmarkIcon />
                  </IconButton>
                  <IconButton color="primary">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
                <CardMedia
                  component="img"
                  height="75%"
                  sx={{ width: "70%", marginLeft: "15%" }}
                  image="https://m.media-amazon.com/images/I/61dWbejnNwL._AC_UX385_.jpg"
                  alt="shirt"
                />
              </Card>
              <Card
                sx={{
                  width: "250px",
                  height: "380px",
                  background: (theme) => theme.palette.secondary.second,
                }}
              >
                <CardActions>
                  <IconButton color="primary">
                    <DragHandleIcon />
                  </IconButton>
                </CardActions>
                <CardContent>
                  <Typography
                    color={(theme) => theme.palette.primary.second}
                    variant="subtitle2"
                  >
                    Hi Taylor!
                  </Typography>
                  <Typography
                    color={"white"}
                    variant="h6"
                    align="center"
                    mt={2}
                  >
                    Find your favourite Graphic Novels
                  </Typography>
                  <TextField
                    variant="standard"
                    label="Search for graphic novels"
                    InputLabelProps={{
                      sx: {color: 'inherit'}
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{color: 'inherit'}}>
                          <SearchIcon />
                        </InputAdornment>
                      ),
                      sx: {
                        color: 'inherit',

                        '&::before, &::after': {
                          borderColor: (theme) => theme.palette.primary.contrastText + ' !important' 
                        }
                      }
                    }}
                    sx={{
                      mt: 2, 
                      color: 'primary.contrastText'
                    }}
                  />
                  <Typography
                    color={"white"}
                    variant="body2"
                    align="flex-start"
                    mt={2}
                  >
                    Favourite Genres
                  </Typography>
                  <Container
                    sx={{ display: "flex", }}
                  >
                    <Paper sx={{ width: "70px", height: "90px" , mx: 2 }}>
                      <Typography>Hi</Typography>
                    </Paper>
                    <Paper sx={{ width: "70px", height: "90px" }}>
                      <Typography>Hi</Typography>
                    </Paper>
                  </Container>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
