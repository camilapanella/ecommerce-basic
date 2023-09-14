import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBrands, postBrand } from "../../actions/actions";
import { Toaster, toast } from "react-hot-toast";
import Container from "@mui/material/Container";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function validate(input) {
  let errors = {};
  if (!input.name) errors.name = "Name is required!";
  if (!input.logo_url) errors.logo_url = "Logo is required!";
  return errors;
}

export default function BrandForm(props) {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    logo_url: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postBrand(input));
    toast.success("Brand successfully created");
    setInput({
      name: "",
      logo_url: "",
    });
    setTimeout(() => {
      navigate("/create");
    }, 1000);
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (
      brands.find(
        (brand) => brand.name.toLowerCase() === e.target.value.toLowerCase()
      )
    ) {
      setErrors({
        ...input,
        [e.target.name]: "This brand already exists",
      });
    }
  }

  return (
    <Container fixed>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Typography variant="h3">¡Create a new brand!</Typography>
          <hr />
          <TextField
            type="text"
            color="secondary"
            value={input.name}
            name="name"
            placeholder="Add name..."
            onChange={(e) => handleChange(e)}
          />
          <hr />
          {errors.name && <Typography>{errors.name}</Typography>}
          <hr />
          <TextField
            type="text"
            color="secondary"
            value={input.logo_url}
            name="logo_url"
            placeholder="Logo url"
            onChange={(e) => handleChange(e)}
          />
          <hr />
          <hr />
          {!Object.keys(errors).length ? (
            <Button
              disabled={!input.name || !input.logo_url}
              type="submit"
              color="secondary"
            >
              Submit
            </Button>
          ) : null}
          <Toaster position="top-center" reverseOrder={false} />
        </Grid>
      </form>
    </Container>
  );
}
