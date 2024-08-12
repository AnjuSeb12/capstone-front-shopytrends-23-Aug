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
             console.log(response)
            // const cartItems = response.data.cart.cartItems.map(item => ({
            //     product: {
            //         _id: item.product,
            //         price: item.price,
            //         // Add any other required fields from the product here
            //     },
            //     quantity: item.quantity,
            //     totalPrice: item.totalPrice,
            // }));
    
            // cartItems.forEach(item => {
            //     dispatch(addToCart(item));
            // });
            console.log(response)
            console.log(response.data.cart)

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