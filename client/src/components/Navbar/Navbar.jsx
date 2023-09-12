import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { Typography, Container, Toolbar, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster, toast } from "react-hot-toast";

export default function NavBar() {
  const err = useSelector((state) => state.error);

  if (Object.keys(err).length) {
    toast.error("Product not found");
  }

  return (
    <AppBar position="static" sx={{ bgcolor: "#dd33fa" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <IconButton size="large" edge="start" aria-label="logo">
              <StorefrontTwoToneIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            E-commerce
          </Typography>
          <Stack direction="row" spacing={2}>
            <SearchBar />
            <Toaster position="top-center" reverseOrder={false} />
            <Link to="/create">
              <Typography variant="button" sx={{ color: "white" }}>
                Add product
              </Typography>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
