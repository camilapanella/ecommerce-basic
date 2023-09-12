import { React } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../actions/actions";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Product({ id, name, image_url, price }) {
  const dispatch = useDispatch();

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }
  return (
    <Card
      sx={{
        maxWidth: 280,
        padding: "0.1em",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#d6ffa6",
        height: "100%",
      }}
    >
      <Button size="small" onClick={(e) => handleDelete(e)}>
        Delete
      </Button>
      <CardMedia
        component="img"
        height="250"
        sx={{ objectFit: "contain" }}
        image={image_url}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {name}
        </Typography>
        <Typography>${price}</Typography>
      </CardContent>
      <Button size="small">
        <Link to={`/product/${id}`}>View</Link>
      </Button>
    </Card>
  );
}
