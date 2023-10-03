import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../styles/Recipe.css";

interface RecipeType {
  _id: string;
  name: string;
  images: [];
  descriptions: [];
  tag: string;
}

function Recipe() {
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const { id } = useParams<{ id: string }>();
  // TODO: delete mockResponse after updating DB models to support arrays

  const images = [
    "https://assets.elgourmet.com/wp-content/uploads/2023/03/s-ndw_AfsS859PRoHcJpKwd6r4Me0FUBDtCg-1024x683.png.webp",
    "https://assets.elgourmet.com/wp-content/uploads/2023/03/s-ndw_AfsS859PRoHcJpKwd6r4Me0FUBDtCg-1024x683.png.webp",
    "https://assets.elgourmet.com/wp-content/uploads/2023/03/s-ndw_AfsS859PRoHcJpKwd6r4Me0FUBDtCg-1024x683.png.webp",
  ];
  const paragraphs = [
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget purus dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fermentum lectus eu mauris auctor interdum ac eu nunc. Curabitur dignissim ante ligula, quis laoreet felis lobortis id. Sed scelerisque, metus sit amet elementum sollicitudin, enim purus molestie nisl, a interdum neque lectus sit amet sem. Maecenas est arcu, malesuada vel sapien ut, interdum mattis ante. Etiam posuere eros eget lorem pellentesque blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas aliquam enim eu nisi rhoncus semper. Aliquam augue dui, posuere maximus elit et, viverra sodales neque. ",
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget purus dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fermentum lectus eu mauris auctor interdum ac eu nunc. Curabitur dignissim ante ligula, quis laoreet felis lobortis id. Sed scelerisque, metus sit amet elementum sollicitudin, enim purus molestie nisl, a interdum neque lectus sit amet sem. Maecenas est arcu, malesuada vel sapien ut, interdum mattis ante. Etiam posuere eros eget lorem pellentesque blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas aliquam enim eu nisi rhoncus semper. Aliquam augue dui, posuere maximus elit et, viverra sodales neque. ",
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget purus dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fermentum lectus eu mauris auctor interdum ac eu nunc. Curabitur dignissim ante ligula, quis laoreet felis lobortis id. Sed scelerisque, metus sit amet elementum sollicitudin, enim purus molestie nisl, a interdum neque lectus sit amet sem. Maecenas est arcu, malesuada vel sapien ut, interdum mattis ante. Etiam posuere eros eget lorem pellentesque blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas aliquam enim eu nisi rhoncus semper. Aliquam augue dui, posuere maximus elit et, viverra sodales neque. ",
  ];

  const mockResponse = {
    images,
    paragraphs,
    title: "MockTitle",
  };

  useEffect(() => {
    axios
      .get(`https://FlavourOfHealth-api.onrender.com/recipe/${id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <Container className="recipe-container">
      <h2>{mockResponse.title}</h2>
      {mockResponse.images.map((img, index) =>
        (index + 1) % 2 == 0 ? (
          <div className="pair" key={index}>
            <img src={img} alt={`Image ${index + 1}`} />
            <p>{mockResponse.paragraphs[index]}</p>
          </div>
        ) : (
          <div className="pair" key={index}>
            <p>{mockResponse.paragraphs[index]}</p>
            <img src={img} alt={`Image ${index + 1}`} />
          </div>
        )
      )}
    </Container>
  );
}

export default Recipe;
