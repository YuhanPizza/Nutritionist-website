import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface ArticleType {
  _id: string;
  name: string;
  image: string;
  description: string;
  tag: string;
}

function ArticleList() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5020/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  const goToArticle = (id: string) => {
    navigate(`/article/${id}`);
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        {articles.map((article) => (
          <Col sm={12} md={6} lg={3} style={{ marginBottom: "20px" }}>
            <Card
              bg="rgba(0, 0, 0)"
              style={{ margin: "10px", position: "relative" }}
              onClick={() => goToArticle(article._id)}
            >
              <Card.Img
                variant="top"
                src={article.image}
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                <Card.Title style={{ color: "white" }}>{article.name}</Card.Title>
                <Card.Text
                  style={{
                    color: "white",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {article.description}
                </Card.Text>
                <Card.Footer style={{ color: "white" }}>
                  <small>{article.tag}</small>
                </Card.Footer>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ArticleList;