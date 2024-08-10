import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, updateCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';

const CartAdding = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
 

  const handleRemoveFromCart = async (productId,cartItemId) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/cart/delete/${productId}/${cartItemId}`);
      dispatch(removeFromCart(cartItemId));
  } catch (error) {
      console.error("Error removing product from cart:", error);
  }
  };

  const handleUpdateQuantity = async (cartItemId, productId, newQuantity) => {
    try {
        const response = await axios.put(`http://localhost:4000/api/v1/cart/update/${productId}/${cartItemId}`, {
            quantity: newQuantity,
        });

        dispatch(updateCart(response.data.cart));
    } catch (error) {
        console.error("Error updating cart item quantity:", error);
    }
};

const handleClearCart = async () => {
  try {
      // Assuming the API endpoint for clearing the cart exists
      await axios.delete(`http://localhost:4000/api/v1/cart/clear`);
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
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{item.product.title}</h3>
              <span className="text-lg font-semibold">${item.totalPrice.toFixed(2)}</span>
            </div>
            <p className="mb-2">{item.product.description}</p>
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => handleUpdateQuantity(item._id, item.product._id, item.quantity + 1)}
                className="bg-blue-500 text-white py-1 px-2 rounded"
                disabled={item.quantity >= item.product.stock}
              >
                Increase
              </button>
              <button
                onClick={() => handleUpdateQuantity(item._id, item.product._id, item.quantity - 1)}
                className="bg-yellow-500 text-white py-1 px-2 rounded"
                disabled={item.quantity <= 1}
              >
                Decrease
              </button>
              <button
                onClick={() => handleRemoveFromCart(item.product._id, item._id)}
                className="bg-red-500 text-white py-1 px-2 rounded"
              >
                Remove
              </button>
            </div>
            <p>Quantity: {item.quantity}</p>
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


    // <div>
    //   <h2 className="text-xl font-bold">Cart</h2>
    //   {cartItems.length === 0 ? (
    //     <p>Your cart is empty</p>
    //   ) : (
    //     <ul>
    //       {cartItems.map((item) => (
    //         <li key={item.product._id} className="flex justify-between items-center py-2">
    //           <span>{item.product.title} - ${item.product.price} x {item.quantity} = ${item.totalPrice.toFixed(2)}</span>
    //           <button
    //             onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}
    //             className="bg-blue-500 text-white py-1 px-2 rounded"
    //           >
    //             Increase Quantity
    //           </button>
    //           <button
    //             onClick={() => handleRemoveFromCart(item.product._id)}
    //             className="bg-red-500 text-white py-1 px-2 rounded"
    //           >
    //             Remove
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    //   <Link to="/user/cart">
    //   <button onClick={handleClearCart} className="bg-gray-500 text-white py-2 px-4 rounded mt-4">
    //     Clear Cart
    //   </button>
    //   </Link>
     
    // </div>
  
};

export default CartAdding;
