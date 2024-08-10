import axios from 'axios';
import React, { useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import AddCart from './AddCart';








const DisplayProducts = () => {
    const dispatch = useDispatch()

    const items = useSelector((state) => state.data.products);
    console.log(items)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/product/getproducts');
                dispatch(getProducts(response.data.products));

            } catch (error) {
                console.log("Error fetching products:",error)

            }
        };

        fetchProducts();
    }, [dispatch]);





    return (

        <Container>

            <Row>
                {items && items.map((item, index) => (
                    <Col md={4} className='mt-3 mb-3 padding' key={index}>
                        <Card className='height' >
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    {item.price}
                                </Card.Text>
                                <Card.Text>
                                    Stock: {item.stock > 0 ? item.stock : "Out of Stock"}
                                </Card.Text>

                               
                                    <AddCart product={item} disabled={item.stock <=0}/>
                             
                                
                            </Card.Body>
                        </Card>
                    </Col>


                ))}



            </Row>
        </Container>
    )
}

export default DisplayProducts