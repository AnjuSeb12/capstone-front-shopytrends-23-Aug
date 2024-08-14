import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';





const AddCart = ({ product, quantity = 1, disabled }) => {
    const dispatch = useDispatch();
    

    const handleAddToCart = async (productId) => {
        try {
        
            const response = await axios.post(
                `http://localhost:4000/api/v1/cart/addcart/${productId}`, 
                
                {
                 
                    quantity: quantity,
                   
                },
                {
                    withCredentials: true, 
                    headers: {
                        "Content-Type": "application/json",
                      },
                }
            );
             
            
            

            dispatch(addToCart(response.data.cart));
          

        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };



    return (
        <Link to="/user/cart">
            <button
                onClick={() => handleAddToCart(product._id)}
                className={`bg-blue-500 text-white py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={disabled}
            >
                Add to Cart
            </button>

        </Link>

    )
}

export default AddCart