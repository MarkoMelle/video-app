import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";
import { Box, Typography, Button } from "@mui/material";

const Error = () => {
  return (
    <Layout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
        px={4}
        textAlign="center"
      >
        <Typography variant="h4" component="h1" mb={2} fontWeight={500}>
          Something went wrong
        </Typography>
        <Typography variant="body1" mb={4}>
          We’re sorry, but there was an error processing your request. Please try again later.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Go to Home
        </Button>
      </Box>
    </Layout>
  );
};

export default Error;