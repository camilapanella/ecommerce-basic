import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById, clearDetail } from "../../actions/actions";
import Loading from "../Loading/Loading";
import {
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductById(id));
    return () => dispatch(clearDetail());
  }, [dispatch, id]);

  if (details.length) {
    return (
      <Container maxWidth="md">
        <Grid container alignItems="center" justify="center" direction="column">
          <Link to="/">
            <Button>Back</Button>
          </Link>
          <Card sx={{ maxWidth: 800, bgcolor: "#d6ffa6" }}>
            <CardContent>
              <Typography variant="h2">{details[0].name}</Typography>
              <hr />
              <CardMedia
                component={"img"}
                sx={{ maxWidth: 700 }}
                image={details[0].image_url}
                title={details[0].name}
              />
              <Typography variant="h5">
                Description: {details[0].description}
              </Typography>
              <hr />
              <Typography variant="h6">Price: ${details[0].price}</Typography>
              <Typography variant="h6">
                Brand: {details[0].brand.name}
              </Typography>
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={details[0].brand.logo_url}
                alt=""
              />
            </CardContent>
          </Card>
        </Grid>
      </Container>
    );
  } else {
    return <Loading />;
  }
}
