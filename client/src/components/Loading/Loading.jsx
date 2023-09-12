import React from "react";
import { Typography } from "@mui/material";

export default function Loading() {
  return (
    <div>
      <Typography variant="h1" sx={{ flexGrow: 1, color: "white" }}>
        Loading...
      </Typography>
    </div>
  );
}
