import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Cards({ title, desc, image, id }) {
  const navigate = useNavigate();
  return (
    <Card style={{boxShadow:"3px 3px 3px 3px lightgreen"}} sx={{ maxWidth: 345 }}>
      <CardMedia  sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc.slice(0, 150)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{backgroundColor:"lightblue",color:'black',marginLeft:"130px",boxShadow:"1px 1px 1px 1px black"}} onClick={() => navigate(`/products/${id}`)} size="large">
          add
        </Button>
      </CardActions>
    </Card>
  );
}