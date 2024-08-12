import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, updateCart,setCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'; 


const CartAdding = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/cart/viewbyidcart', { withCredentials: true });
        dispatch(setCart(response.data.cartviewbyid));
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [dispatch]);
 

  const handleRemoveFromCart = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/cart/cartdelete/${cartItemId}`,
        { withCredentials: true }
        
      );
      dispatch(removeFromCart(cartItemId));
  } catch (error) {
      console.error("Error removing product from cart:", error);
  }
  };

  const handleUpdateQuantity = async (cartItemId, newQuantity) => {
    try {
        const response = await axios.put(`http://localhost:4000/api/v1/cart/updatecart/${cartItemId}`, {
            quantity: newQuantity,
        },
        { withCredentials: true });

        dispatch(updateCart(response.data.cartItem));
    } catch (error) {
        console.error("Error updating cart item quantity:", error);
    }
};

const handleClearCart = async () => {
  try {
      // Assuming the API endpoint for clearing the cart exists
      await axios.delete(`http://localhost:4000/api/v1/cart/clear`,
        { withCredentials: true }

      );
      dispatch(clearCart());
  } catch (error) {
      console.error("Error clearing cart:", error);
  }
};
  return (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li key={item._id} className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src={item.product.image} alt={item.product.title} className="w-24 h-30 object-cover rounded-lg mr-4" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{item.product.title}</h3>
                  <span className="text-lg font-semibold">${item.totalPrice.toFixed(2)}</span>
                </div>
                <p className="mb-2">{item.product.description}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                    className="bg-blue-500 text-white py-1 px-2 rounded"
                    disabled={item.quantity >= item.product.stock}
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded"
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus />
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded"
                  >
                    <FaTrash />
                  </button>
                </div>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
    <button
      onClick={handleClearCart}
      className="bg-gray-500 text-white py-2 px-4 rounded mt-4"
    >
      Clear Cart
    </button>
  </div>
 
);


   
  
};

export default CartAdding;
