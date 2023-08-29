import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MAX_IMAGE_WIDTH = "300px";

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
    // Fetch all articles from the backend
    axios
      .get("http://localhost:5020/articles") // Change the URL to match your endpoint
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
    <CardGroup style={{ marginTop: "50px" }}>
      {articles.map((article) => (
        <Card
          bg="rgba(0, 0, 0)"
          style={{ margin: "20px 10px", position: "relative" }}
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

          <Card.ImgOverlay>
            <Card.ImgOverlay />
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
      ))}
    </CardGroup>
  );
}

export default ArticleList;
