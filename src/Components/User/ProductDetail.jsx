import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {  useSelector } from 'react-redux';

import AddCart from './AddCart';







const ProductDetail = () => {
    
    const { id } = useParams();
  
    const items = useSelector((state) => state.data.products);
  
    const currentItem = items.find((i) => i._id == id);
    console.log(".....",id)
 
  

    

    return (
        <Container className="product-details my-5">
            { currentItem &&
            <Row>
            
            
                <Col md={6} className="d-flex justify-content-center">
                    <img src={currentItem.image} alt={currentItem.title} className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h1>{currentItem.title}</h1>
                    <p>{currentItem.description}</p>
                    <h3 className="text-success">${currentItem.price}</h3>

                    {/* <Button variant="primary"  >
                   
                    </Button> */}
                    <div className="d-flex align-items-center mb-3">
                    <AddCart product={currentItem} disabled={currentItem.stock <= 0}/>
                    <Button variant="success"   className="ms-3" onClick={() => {""}}>
                        Pay Now
                    </Button>

                    </div>
                   
                </Col>


                

            </Row>
}
        </Container>
    );
};

export default ProductDetail
