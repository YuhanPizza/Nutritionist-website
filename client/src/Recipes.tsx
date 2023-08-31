import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
    axios
      .get("http://localhost:5020/recipes")
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
    <Container style={{ marginTop: "50px" }}>
      <Row>
        {recipes.map((recipe) => (
          <Col sm={12} md={6} lg={3} style={{ marginBottom: "20px" }}>
            <Card
              bg="rgba(0, 0, 0)"
              style={{ margin: "10px", position: "relative" }}
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
              <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
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
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RecipeList;