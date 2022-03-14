import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <Typography variant="h2" align="center" sx={{ my: 10 }}>
        This Page does not exist Go Back
      </Typography>
      <Typography variant="h5" align="center">
        <Link to={"/"}>Go Back</Link>
      </Typography>
    </>
  );
}
