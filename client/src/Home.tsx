import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './styles/Home.css';

interface RecipeType {
  _id: string;
  name: string;
  image: string;
  description: string;
  tag: string;
}

interface ArticleType {
  _id: string;
  name: string;
  image: string;
  description: string;
  tag: string;
}

function Home() {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5020/recipes')
      .then(response => {
        setRecipes(response.data.slice(0, 3));
      })
      .catch(error => console.error(error));

    axios.get('http://localhost:5020/articles')
      .then(response => {
        setArticles(response.data.slice(0, 3));
      })
      .catch(error => console.error(error));
  }, []);

  const goToOuterCard = (path: string) => {
    navigate(path);
  };

  const goToRecipe = (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    navigate(`/recipe/${id}`);
  };

  const goToArticle = (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    navigate(`/article/${id}`);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="text-center title">Hi I'm Candace, Welcome to my Website</h2>

          <Card className="clickable-card mb-4" onClick={() => goToOuterCard("/recipes")}>
            <Card.Body>
              <Card.Title className="text-center">Featured Recipes</Card.Title>
              <Container style={{ marginTop: '20px' }}>
                <Row className="justify-content-center">
                  {recipes.map((recipe) => (
                    <Col sm={12} md={4} lg={4} className="d-flex justify-content-center mb-3">
                      <Card
                        bg="rgba(0, 0, 0)"
                        style={{ width:'250px', height:'200px' }}
                        onClick={(event) => goToRecipe(event, recipe._id)}
                      >
                        <Card.Img
                          variant="top"
                          src={recipe.image}
                          style={{
                            height: '200px',
                            objectFit: 'cover',
                          }}
                        />
                        <Card.ImgOverlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                          <Card.Title style={{ color: 'white' }}>{recipe.name}</Card.Title>
                          <Card.Text
                            style={{
                              color: 'white',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {recipe.description}
                          </Card.Text>
                          <Card.Footer style={{ color: 'white' }}>
                            <small>{recipe.tag}</small>
                          </Card.Footer>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Card.Body>
          </Card>

          <Card className="clickable-card mb-4" onClick={() => goToOuterCard("/nutrition")}>
            <Card.Body>
              <Card.Title className="text-center">Featured Articles</Card.Title>
              <Container style={{ marginTop: '20px' }}>
                <Row className="justify-content-center">
                  {articles.map((article) => (
                    <Col sm={12} md={4} lg={4} className="d-flex justify-content-center mb-3">
                      <Card
                        bg="rgba(0, 0, 0)"
                        style={{ width:'250px', height:'200px' }}
                        onClick={(event) => goToArticle(event, article._id)}
                      >
                        <Card.Img
                          variant="top"
                          src={article.image}
                          style={{
                            height: '200px',
                            objectFit: 'cover',
                          }}
                        />
                        <Card.ImgOverlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                          <Card.Title style={{ color: 'white' }}>{article.name}</Card.Title>
                          <Card.Text
                            style={{
                              color: 'white',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {article.description}
                          </Card.Text>
                          <Card.Footer style={{ color: 'white' }}>
                            <small>{article.tag}</small>
                          </Card.Footer>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Card.Body>
          </Card>

          <Link to="/about" className="text-decoration-none">
            <div className="card mb-4 clickable-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img src="https://via.placeholder.com/150" alt="Placeholder" className="img-fluid mb-3" />
                  </div>
                  <div className="col-md-8">
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        </Col>
      </Row>
    </Container>
  );
}

export default Home;