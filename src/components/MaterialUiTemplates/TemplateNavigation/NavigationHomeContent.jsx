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
        // backgroundColor: (theme) => theme.palette.secondary.main,
        height: { md: "100vh" },
        backgroundImage: `url("https://images.unsplash.com/photo-1652904272897-17a86e191902?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170")`,
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h4" align="center" pt={4} fontWeight={800}>
        My Material Clones
      </Typography>

      <Container maxWidth={"md"} sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">

          {cardData.map((carde) => (
            <Grid key={carde.name} item md={6} xs={12}>
              <Card elevation={8}>
                <CardContent>
                  <Typography variant="subtitle2" align="center">
                    {carde.name}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Link
                    target="_blank"
                    to={carde.link}
                    style={{
                      fontSize: "smaller",
                      textDecoration: "none",
                      margin: "auto",
                    }}
                  >
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
