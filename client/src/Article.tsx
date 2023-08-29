import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

interface ArticleType {
  _id: string;
  name: string;
  image: string;
  description: string;
  tag: string;
}

function Article() {
  const [article, setArticle] = useState<ArticleType | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get(`http://localhost:5020/article/${id}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <Container style={{ marginTop: "20px" }}>
      {article ? (
        <Card>
          <Card.Img
            variant="top"
            src={article.image}
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{article.name}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>{article.tag}</small>
          </Card.Footer>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default Article;
