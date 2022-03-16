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
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function BaseFormUi() {
  return (
    <>
      <AppBar elevation={2} color="secondary">
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
              },
            }}
          />
          <Avatar sx={{ mx: 2 }}>Aa</Avatar>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
