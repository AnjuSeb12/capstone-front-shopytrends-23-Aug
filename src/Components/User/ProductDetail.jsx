import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

// import { useSelector } from 'react-redux';

import AddCart from './AddCart';
// import { addProduct } from '../../redux/productSlice';






// Detail

const ProductDetail = () => {
    
    const { id } = useParams();
   
    const [currentItem, setCurrentItem] = useState(null);
    const navigate=useNavigate();
  
   
    
    
    const [loading, setLoading] = useState(false);
    
 
    // testing 
    useEffect(() => {
        if (!currentItem) {
           
            const fetchProduct = async () => {
                setLoading(true);
                try {
                    const response = await axios.get(`http://localhost:4000/api/v1/product/products/${id}`);
                    setCurrentItem(response.data);
                } catch (error) {
                    console.error("Error fetching product:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchProduct();
        }
    }, [id, setCurrentItem]);
    
    console.log("Current Item:", currentItem);
    if (loading) {
        return <Container>Loading...</Container>;
    }
    const handlePayNow = (currentItem) => {
        
        navigate('/order-form', { state: {product: currentItem } });
    };

    

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

                    
                    <div className="d-flex align-items-center mb-3">

                    <AddCart product={currentItem} disabled={currentItem.stock <= 0}/>

                    <Button variant="success"   className="ms-3"  onClick={() => handlePayNow(currentItem)}>
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
