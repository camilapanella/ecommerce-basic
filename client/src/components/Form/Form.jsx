import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { postProduct, getBrands } from "../../actions/actions";
import { Toaster, toast } from "react-hot-toast";
import Container from "@mui/material/Container";
import { Grid, TextField, Select, MenuItem, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function validate(input) {
  let errors = {};
  if (!input.name) errors.name = "Name is required!";
  if (!input.description)
    errors.description = "A summary of the product is required!";
  if (input.price < 0 || input.price > 1000000)
    errors.price = "The price must be a number between 0 and a million!";
  return errors;
}

export default function Form(props) {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands);
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    description: "",
    image_url: "",
    brandId: "",
    price: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProduct(input));
    toast.success("Product successfully created");
    setInput({
      name: "",
      description: "",
      image_url: "",
      brandId: "",
      price: "",
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  function handleSelect(e) {
    setInput({
      ...input,
      brandId: e.target.value,
    });
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
      products.find(
        (prod) => prod.name.toLowerCase() === e.target.value.toLowerCase()
      )
    ) {
      setErrors({
        ...input,
        [e.target.name]: "This product already exists",
      });
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      brandId: "",
    });
  }

  return (
    <Container fixed>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Typography variant="h3">¡Create a new product!</Typography>
          <hr />
          <TextField
            type="text"
            color='secondary'
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
            color='secondary'
            value={input.description}
            name="description"
            placeholder="Description of your product..."
            onChange={(e) => handleChange(e)}
          />
          <hr />
          {errors.description && <Typography>{errors.description}</Typography>}
          <hr />
          <TextField
            type="number"
            color='secondary'
            value={input.price}
            name="price"
            placeholder="Price..."
            onChange={(e) => handleChange(e)}
          />
          <hr />
          {errors.price && <Typography>{errors.price}</Typography>}
          <hr />
          <TextField
            type="text"
            color='secondary'
            value={input.image_url}
            name="image_url"
            placeholder="Image url"
            onChange={(e) => handleChange(e)}
          />
          <hr />
          <Link to="/brand">
            <Typography variant="button" color='secondary'>Add new brand</Typography>
          </Link>
          <hr />
          <InputLabel id="demo-simple-select-label">Select brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            color='secondary'
            value={input.brandId}
            sx={{
              width: 220,
              height: 50,
            }}
            label="Brand"
            onChange={(e) => handleSelect(e)}
          >
            {brands.length ? (
              brands.map((brand) => (
                <MenuItem key={brand.name} value={brand.id}>
                  {brand.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>There are no brands yet</MenuItem>
            )}
          </Select>
          {errors.brandId && <Typography>{errors.brandId}</Typography>}
          <hr />
          <div>
            {input.brandId ? (
              <Button color='secondary' onClick={() => handleDelete()}>Reset brand</Button>
            ) : null}
          </div>
          <hr />
          {!Object.keys(errors).length ? (
            <Button
              disabled={!input.name || !input.description || !input.brandId}
              type="submit"
              color='secondary'
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
