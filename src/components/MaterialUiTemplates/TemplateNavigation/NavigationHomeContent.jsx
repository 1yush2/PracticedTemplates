import React from "react";
import {
  Card,
  Box,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { cardData } from "./NavigationData";
import { Link } from "react-router-dom";

export default function NavigationHomeContent() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        height: { md: "100vh" },
      }}
    >
      <Typography variant="h4" align="center" pt={4}>
        Webpages Links
      </Typography>

      <Container maxWidth={"xl"} sx={{ py: 8 }}>

        <Grid container spacing={4} justifyContent="center">

          {cardData.map((carde) => (
            <Grid key={carde.name} item md={6} xs={12}>
              <Card elevation={8}>
                <CardContent>
                  <Typography variant="subtitle2">{carde.name}</Typography>
                </CardContent>
                <CardActions>
                  <Link to={carde.link} style={{ fontSize: "smaller" }}>
                    Learn More
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
          
        </Grid>
        
      </Container>
    </Box>
  );
}
