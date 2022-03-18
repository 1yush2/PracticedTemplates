import React from "react";

import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
  InputAdornment,
  Avatar,
  Container,
  Box,
  Grid,
  Paper,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const normArray = [1, 2, 3, 4, 5, 6];

export default function ProfileForm() {
  return (
    <>
      <AppBar
        position="static"
        elevation={2}
        color="secondary"
        sx={{ height: "60px" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ marginRight: "auto" }} color={"text.primary"}>
            Icon Bar
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "20px",
                height: "30px",
              },
            }}
          />
          <Avatar sx={{ mx: 2 }}>Aa</Avatar>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ backgroundColor: "#e9eaee", height: "100vh" }}
      >
        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Paper>
            <Grid container>
              <Grid
                item
                md={2}
                sx={{
                  borderRight: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography
                  color="text.secondary"
                  align="center"
                  variant="h6"
                  mt="10px"
                >
                  Your Profile
                </Typography>
                <Box
                  component="ProfileImage"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{
                      height: "auto",
                      width: "100px",
                      mt: 3,
                    }}
                  />
                </Box>
                <Box sx={{ marginTop: 2 }}>
                  <Typography align="center" variant="subtitle2">
                    Danielles Rogers
                  </Typography>
                  <Typography
                    align="center"
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    Enthusiast
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Typography align="center" variant="h6" marginX={1}>
                    86 <br />
                    <Typography align="center" variant="caption">
                      Post
                    </Typography>
                  </Typography>
                  <Typography align="center" variant="h6" marginX={1}>
                    2k <br />
                    <Typography align="center" variant="caption">
                      Reaches
                    </Typography>
                  </Typography>
                  <Typography align="center" variant="h6" marginX={1}>
                    1,1k <br />
                    <Typography align="center" variant="caption">
                      Audience
                    </Typography>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Button size="small" variant="contained">
                    Upload New Avatar
                  </Button>
                  <Button size="small" variant="outlined" sx={{ my: 2 }}>
                    Delete
                  </Button>
                </Box>

                <Box sx={{ py: 2 }}>
                  <Typography align="center" variant="subtitle2">
                    Your slogan
                  </Typography>
                  <Typography align="center" variant="body2" Wrap>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                md={5}
                sx={{
                  borderRight: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography
                  color="text.secondary"
                  align="center"
                  variant="h6"
                  mt="10px"
                  pb="16px"
                >
                  Edit Your Settings
                </Typography>
                <Divider />
                <Box sx={{ py: 1, px: 6 }}>
                  <TextField
                    margin="normal"
                    required
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    size="small"
                    fullWidth
                  />
                  <TextField
                    margin="normal"
                    id="Title"
                    label="Enter your title here"
                    name="title"
                    autoFocus
                    size="small"
                    fullWidth
                  />
                  <TextField
                    margin="normal"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    size="small"
                    fullWidth
                  />
                </Box>
                <Divider />
                <Grid container spacing={2} sx={{ p: 2 }}>
                  <Grid item md={6}>
                    <TextField label="Country" size="small" />
                  </Grid>
                  <Grid item md={6}>
                    <TextField label="State/Province" size="small" />
                  </Grid>
                  <Grid item md={6}>
                    <TextField label="Postal Code" size="small" />
                  </Grid>
                  <Grid item md={6}>
                    <TextField label="Phone Number" size="small" />
                  </Grid>
                </Grid>
                <Divider />
                <Box sx={{ textAlign: "center", p: 4 }}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="success" />}
                    label="I agree to the terms and conditions provided below"
                  />
                  <Button variant="contained">Update Information</Button>
                </Box>
              </Grid>

              <Grid item md={5}>
                <Typography
                  color="text.secondary"
                  align="center"
                  variant="h6"
                  mt="10px"
                  pb="16px"
                >
                  Your External Links
                </Typography>
                <Divider />
                <Grid Container justify="center" sx={{ p: 4 }}>
                  {normArray.map((no) => {
                    return (
                      <Grid item mt="5px" key={no}>
                        <TextField label="Your URL" fullWidth size="small" />
                      </Grid>
                    );
                  })}
                </Grid>
                <Divider />
                <Box sx={{ textAlign: "center", p: 6 }}>
                  <Button variant="contained">Save & Update</Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
