import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
    axios.get('http://localhost:5000/recipes') // Change the URL to match your endpoint
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data:', error);
      });
  }, []);

  const goToRecipe = (id: string)=>{
    navigate(`/recipe/${id}`);
  }

  return (
    <Container fluid style={{marginTop: '50px'}}>
      <Row>
        {recipes.map((recipe) => (
          <Col key={recipe._id} md={4} onClick={()=> goToRecipe(recipe._id)}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={recipe.image} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text style={{ 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis' 
                }}>
                  {recipe.description}
                </Card.Text>
                <Card.Footer><small>{recipe.tag}</small></Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RecipeList;