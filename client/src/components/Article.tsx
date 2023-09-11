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
        <>
          <h1 style={{ marginBottom: "20px", textAlign: "center" }}>{article.name}</h1>
          <Card>
            <Card.Img
              variant="top"
              src={article.image}
            />
            <Card.Body style={{ textAlign: "left" }}>
              <Card.Text dangerouslySetInnerHTML={{ __html: article.description.replace(/\n/g, '<br />') }} />
            </Card.Body>
            <Card.Footer>
              <small>{article.tag}</small>
            </Card.Footer>
          </Card>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default Article;
