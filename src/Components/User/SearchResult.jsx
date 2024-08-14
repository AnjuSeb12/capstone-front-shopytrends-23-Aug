import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SearchResult= () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  const query = new URLSearchParams(location.search).get('query');
  console.log(query)

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/filter/search?query=${query}`);
        
       
        
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching search results', error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <Container>
      <h2>Search Results for "{query}"</h2>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResult;
