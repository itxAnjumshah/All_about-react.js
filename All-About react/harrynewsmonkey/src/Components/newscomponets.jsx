import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function NewsComponents({ category }) {
  // State to keep track of news articles and the current page
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5; // Number of articles to show per page

  // Function to fetch news data from an API
  useEffect(() => {
    const apiUrl = `https://newsapi.org/v2/everything?q=${category}&from=2024-06-30&to=2024-06-30&sortBy=popularity&apiKey=b1dab607979f40baaec7ed8960d200b0`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(result.articles); // Save the news articles in state
      });
  }, [category]);

  // Calculate the range of articles to show on the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle);

  // Function to go to the next page
  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to go to the previous page
  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <Container>
      <Row>
        <h2 className="text-center w-100">Monkey News App</h2>
        {currentArticles.map((article, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              {article.urlToImage && (
                <Card.Img variant="top" src={article.urlToImage} />
              )}
              <Card.Body>
                <Card.Title>{article.title.slice(0, 25)}...</Card.Title>
                <Card.Text>{article.description.slice(0, 55)}...</Card.Text>
                <Card>Author: {article.author}</Card>
                <Card>
                  Time: {new Date(article.publishedAt).toLocaleString()}
                </Card>
                <br />
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Read more</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-between mt-3">
        {/* Button to go to the previous page */}
        <Button onClick={handlePrevious} disabled={currentPage === 1}>
          &larr; Previous
        </Button>
        {/* Button to go to the next page */}
        <Button
          onClick={handleNext}
          disabled={indexOfLastArticle >= data.length}
        >
          Next &rarr;
        </Button>
      </div>
    </Container>
  );
}
