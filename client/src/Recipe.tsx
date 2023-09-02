import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

interface RecipeType {
  _id: string;
  name: string;
  image: string;
  description: string;
  tag: string;
}

function Recipe() {
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get(`http://localhost:5020/recipe/${id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <Container style={{ marginTop: "20px" }}>
      {recipe ? (
        <Card>
          <Card.Img
            variant="top"
            src={recipe.image}
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Text dangerouslySetInnerHTML={{ __html: recipe.description.replace(/\n/g, '<br />') }} />
          </Card.Body>
          <Card.Footer>
            <small>{recipe.tag}</small>
          </Card.Footer>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default Recipe;
