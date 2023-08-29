import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MAX_IMAGE_WIDTH = "300px";

interface RecipeType {
  _id: string;
  name: string;
  image: string;
  description: string;
  tag: string;
}

function RecipeList() {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all recipes from the backend
    axios
      .get("http://localhost:5020/recipes") // Change the URL to match your endpoint
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  const goToRecipe = (id: string) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <CardGroup style={{ marginTop: "50px" }}>
      {recipes.map((recipe) => (
        <Card
          bg="rgba(0, 0, 0)"
          style={{ margin: "20px 10px", position: "relative" }}
          onClick={() => goToRecipe(recipe._id)}
        >
          <Card.Img
            variant="top"
            src={recipe.image}
            style={{
              height: "200px",
              objectFit: "cover",
            }}
          />

          <Card.ImgOverlay>
            <Card.ImgOverlay />
            <Card.Title style={{ color: "white" }}>{recipe.name}</Card.Title>
            <Card.Text
              style={{
                color: "white",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {recipe.description}
            </Card.Text>
            <Card.Footer style={{ color: "white" }}>
              <small>{recipe.tag}</small>
            </Card.Footer>
          </Card.ImgOverlay>
        </Card>
      ))}
    </CardGroup>
  );
}

export default RecipeList;
