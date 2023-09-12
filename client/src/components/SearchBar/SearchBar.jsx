import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName, getProducts } from "../../actions/actions";
import { Toaster, toast } from "react-hot-toast";
import Button from "@mui/material/Button";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) toast.error("Please enter a name");
    dispatch(getProductsByName(name.toLowerCase()));
    setName("");
  }

  function handleReset() {
    dispatch(getProducts());
  }

  return (
    <form>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          <SearchSharpIcon />
        </Button>
        <Toaster position="top-center" reverseOrder={false} />
        <Button onClick={(e) => handleReset(e)}>
          <CachedSharpIcon />
        </Button>
      </Search>
    </form>
  );
}
