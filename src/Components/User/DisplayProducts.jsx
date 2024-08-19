import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import AddCart from './AddCart';



const DisplayProducts = () => {
    
    const [getProducts,setGetProducts]= useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/product/getproducts');
                setGetProducts(response.data.products);

            } catch (error) {
                console.log("Error fetching products:", error)

            }
        };

        fetchProducts();
    }, [setGetProducts]);





    return (

        // <Container >

        //     <Row>
        //         {getProducts && getProducts.map((item, index) => (
        //             <Col md={3} className='mt-3 mb-3 padding' key={index}>
        //                 <Card className='height' style={{ border: '2px solid #ff9800', borderRadius: '10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        //                     <Link to={`/product/${item._id}`}>
        //                         <Card.Img variant="top" src={item.image} />
        //                     </Link>

        //                     <Card.Body>
        //                         <Card.Title>{item.title}</Card.Title>
        //                         <Card.Text>
        //                             {item.description}
        //                         </Card.Text>
        //                         <Card.Text>
        //                             ${item.price}
        //                         </Card.Text>
        //                         <Card.Text>
        //                             Stock: {item.stock > 0 ? item.stock : "Out of Stock"}
        //                         </Card.Text>


        //                         {/* <AddCart product={item} disabled={item.stock <=0}/> */}
        //                         <Row>
        //                             <Col>
        //                                 <AddCart product={item} disabled={item.stock <= 0} 
        //                                        />
        //                             </Col>
        //                             <Col>
        //                                 <Button
        //                                     variant="success"
        //                                     onClick={() => {/* Pay Now logic here */ }}
        //                                     disabled={item.stock <= 0}
        //                                     style={{
        //                                         width: '100%',
        //                                         padding: '10px',
        //                                         borderRadius: '5px',
        //                                         color: '#fff',
        //                                         backgroundColor: '#ffc107',
        //                                         borderColor: '#ffc107'
        //                                     }}
        //                                 >
        //                                     Pay Now
        //                                 </Button>
        //                             </Col>
        //                         </Row>


        //                     </Card.Body>
        //                 </Card>
        //             </Col>


        //         ))}



        //     </Row>
        // </Container>
        // <Container className="py-4">
        //     <Row className="justify-content-center">
        //         {getProducts && getProducts.map((item, index) => (
        //             <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}>
        //                 <Card className="h-100 border-orange-500 rounded-lg shadow-md">
        //                     <Link to={`/product/${item._id}`}>
        //                         <Card.Img variant="top" src={item.image} className="object-cover h-48 w-full rounded-t-lg" />
        //                     </Link>
        //                     <Card.Body className="p-4">
        //                         <Card.Title className="text-lg font-semibold mb-2">{item.title}</Card.Title>
        //                         <Card.Text className="text-sm text-gray-600 mb-2">
        //                             {item.description}
        //                         </Card.Text>
        //                         <Card.Text className="text-lg font-bold mb-2">
        //                             ${item.price}
        //                         </Card.Text>
        //                         <Card.Text className="text-sm font-semibold mb-3">
        //                             Stock: {item.stock > 0 ? item.stock : "Out of Stock"}
        //                         </Card.Text>

        //                         <Row className="justify-content-between">
        //                             <Col xs={6}>
        //                                 <AddCart product={item} disabled={item.stock <= 0} />
        //                             </Col>
        //                             <Col xs={6}>
        //                                 <Button
        //                                     variant="warning"
        //                                     onClick={() => {/* Pay Now logic here */ }}
        //                                     disabled={item.stock <= 0}
        //                                     className="w-full py-2 text-white"
        //                                 >
        //                                     Pay Now
        //                                 </Button>
        //                             </Col>
        //                         </Row>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         ))}
        //     </Row>
        // </Container>
    //     <Container className="py-4">
    //     <Row className="justify-content-center">
    //         {getProducts && getProducts.map((item, index) => (
    //             <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}>
    //                 <Card className="h-100 border-orange-500 rounded-lg shadow-md">
    //                     <Link to={`/product/${item._id}`}>
    //                         <Card.Img 
    //                             variant="top" 
    //                             src={item.image} 
    //                             className="object-cover h-64 w-full rounded-t-lg"
    //                             alt={item.title} 
    //                         />
    //                     </Link>
    //                     <Card.Body className="p-4 flex flex-col">
    //                         <Card.Title className="text-lg font-semibold mb-2">{item.title}</Card.Title>
    //                         <Card.Text className="text-sm text-gray-600 mb-2">
    //                             {item.description}
    //                         </Card.Text>
    //                         <Card.Text className="text-lg font-bold mb-2">
    //                             ${item.price}
    //                         </Card.Text>
    //                         <Card.Text className="text-sm font-semibold mb-3">
    //                             Stock: {item.stock > 0 ? item.stock : "Out of Stock"}
    //                         </Card.Text>

    //                         <Row className="mt-auto justify-content-between">
    //                             <Col xs={6}>
    //                                 <AddCart product={item} disabled={item.stock <= 0} />
    //                             </Col>
    //                             <Col xs={6}>
    //                                 <Button
    //                                     variant="warning"
    //                                     onClick={() => {/* Pay Now logic here */ }}
    //                                     disabled={item.stock <= 0}
    //                                     className="w-full py-2 text-white"
    //                                 >
    //                                     Pay Now
    //                                 </Button>
    //                             </Col>
    //                         </Row>
    //                     </Card.Body>
    //                 </Card>
    //             </Col>
    //         ))}
    //     </Row>
    // </Container>
    <Container className="py-4">
            <Row className="justify-content-center">
                {getProducts && getProducts.map((item, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}>
                        <Card className="h-100 border-orange-500 rounded-lg shadow-md">
                            <Link to={`/product/${item._id}`}>
                                <Card.Img 
                                    variant="top" 
                                    src={item.image} 
                                    className="object-contain h-64 w-full rounded-t-lg"
                                    alt={item.title} 
                                />
                            </Link>
                            <Card.Body className="p-4 flex flex-col">
                                <Card.Title className="text-lg font-semibold mb-2">{item.title}</Card.Title>
                                <Card.Text className="text-sm text-gray-600 mb-2">
                                    {item.description}
                                </Card.Text>
                                <Card.Text className="text-lg font-bold mb-2">
                                    ${item.price}
                                </Card.Text>
                                <Card.Text className="text-sm font-semibold mb-3">
                                    Stock: {item.stock > 0 ? item.stock : "Out of Stock"}
                                </Card.Text>

                                <Row className="mt-auto justify-content-between">
                                    <Col xs={6}>
                                        <AddCart product={item} disabled={item.stock <= 0} />
                                    </Col>
                                    <Col xs={6}>
                                        <Button
                                            variant="warning"
                                            onClick={() => {/* Pay Now logic here */ }}
                                            disabled={item.stock <= 0}
                                            className="w-full py-2 text-white"
                                        >
                                            Pay Now
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default DisplayProducts