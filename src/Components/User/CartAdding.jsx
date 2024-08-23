// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { useNavigate } from 'react-router-dom';

// // const CartAdding = () => {
// //   const navigate = useNavigate();
// //   const [cartItems, setCartItems] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchCart = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:4000/api/v1/cart/viewbyidcart', { withCredentials: true });
// //         setCartItems(response.data.cartviewbyid.cartItems);
// //       } catch (error) {
// //         console.error('Error fetching cart:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCart();
// //   }, []);

// //   const handleRemoveFromCart = async (cartItemId) => {
// //     try {
// //       await axios.delete(`http://localhost:4000/api/v1/cart/cartdelete/${cartItemId}`, { withCredentials: true });
// //       setCartItems(cartItems.filter(item => item._id !== cartItemId));
// //       toast.success('Item removed from cart.');
// //     } catch (error) {
// //       console.error('Error removing product from cart:', error);
// //       toast.error('Failed to remove item from cart.');
// //     }
// //   };

// //   const handleUpdateQuantity = async (cartItemId, newQuantity) => {
// //     try {
// //       const response = await axios.put(
// //         `http://localhost:4000/api/v1/cart/updatecart/${cartItemId}`,
// //         { quantity: newQuantity },
// //         { withCredentials: true }
// //       );
  
// //       setCartItems(prevItems =>
// //         prevItems.map(item =>
// //           item._id === cartItemId
// //             ? { ...item, ...response.data.cartItem } 
// //             : item
// //         )
// //       );
// //     } catch (error) {
// //       console.error('Error updating cart item quantity:', error);
// //       toast.error('Failed to update item quantity.');
// //     }
// //   };

// //   const handleClearCart = async () => {
// //     try {
// //       await axios.delete('http://localhost:4000/api/v1/cart/clear', { withCredentials: true });
// //       setCartItems([]);
// //       toast.success('Cart cleared.');
// //     } catch (error) {
// //       console.error('Error clearing cart:', error);
// //       toast.error('Failed to clear cart.');
// //     }
// //   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   const handlePayNow = () => {
// //     navigate('/order-cart-form', { state: { cartItems } });
// //   };

// //   return (
// //     <div className="container mx-auto p-4 sm:p-6 lg:p-8">
// //       <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Cart</h2>
// //       {cartItems.length === 0 ? (
// //         <p className="text-center">Your cart is empty</p>
// //       ) : (
// //         <ul className="space-y-4">
// //           {cartItems.map((item) => (
// //             <li key={item._id} className="flex flex-col sm:flex-row bg-gray-100 p-4 rounded-lg shadow-md">
// //               <div className="flex items-center mb-4 sm:mb-0">
// //                 <img
// //                   src={item.product.image}
// //                   alt={item.product.title}
// //                   className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg mr-4"
// //                 />
// //                 <div className="flex-1">
// //                   <div className="flex items-center justify-between mb-2">
// //                     <h3 className="text-lg sm:text-xl font-semibold text-black">{item.product.title}</h3>
// //                     <span className="text-lg sm:text-xl font-semibold text-black">${item.totalPrice.toFixed(2)}</span>
// //                   </div>
// //                   <p className="mb-2 text-black text-sm sm:text-base">{item.product.description}</p>
// //                   <div className="flex items-center space-x-4 mb-4">
// //                     <button
// //                       onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
// //                       className="bg-green-500 text-white py-1 px-2 rounded transition-transform transform hover:scale-105"
// //                       disabled={item.quantity >= item.product.stock}
// //                     >
// //                       <FaPlus />
// //                     </button>
// //                     <button
// //                       onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
// //                       className="bg-green-500 text-white py-1 px-2 rounded transition-transform transform hover:scale-105"
// //                       disabled={item.quantity <= 1}
// //                     >
// //                       <FaMinus />
// //                     </button>
// //                     <button
// //                       onClick={() => handleRemoveFromCart(item._id)}
// //                       className="bg-red-500 text-white py-1 px-2 rounded transition-transform transform hover:scale-105"
// //                     >
// //                       <FaTrash />
// //                     </button>
// //                   </div>
// //                   <p className="text-black text-sm sm:text-base">Quantity: {item.quantity}</p>
// //                   <p className="text-black text-sm sm:text-base">Price (1 item): ${item.price.toFixed(2)}</p>
// //                 </div>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //       <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
// //         <button
// //           onClick={handleClearCart}
// //           className="bg-gray-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-105"
// //         >
// //           Clear Cart
// //         </button>
// //         <button
// //           onClick={handlePayNow}
// //           className="bg-green-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-105"
// //         >
// //           Place Order
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartAdding;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

// const CartAdding = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/api/v1/cart/viewbyidcart', { withCredentials: true });
//         setCartItems(response.data.cartviewbyid.cartItems);
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCart();
//   }, []);

//   const handleRemoveFromCart = async (cartItemId) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/v1/cart/cartdelete/${cartItemId}`, { withCredentials: true });
//       setCartItems(cartItems.filter(item => item._id !== cartItemId));
//       toast.success('Item removed from cart.');
//     } catch (error) {
//       console.error('Error removing product from cart:', error);
//       toast.error('Failed to remove item from cart.');
//     }
//   };

//   const handleUpdateQuantity = async (cartItemId, newQuantity) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:4000/api/v1/cart/updatecart/${cartItemId}`,
//         { quantity: newQuantity },
//         { withCredentials: true }
//       );
  
//       setCartItems(prevItems =>
//         prevItems.map(item =>
//           item._id === cartItemId
//             ? { ...item, ...response.data.cartItem } 
//             : item
//         )
//       );
//     } catch (error) {
//       console.error('Error updating cart item quantity:', error);
//       toast.error('Failed to update item quantity.');
//     }
//   };

//   const handleClearCart = async () => {
//     try {
//       await axios.delete('http://localhost:4000/api/v1/cart/clear', { withCredentials: true });
//       setCartItems([]);
//       toast.success('Cart cleared.');
//     } catch (error) {
//       console.error('Error clearing cart:', error);
//       toast.error('Failed to clear cart.');
//     }
//   };

//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   const handlePayNow = () => {
//     navigate('/order-cart-form', { state: { cartItems } });
//   };

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//       <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className="text-center">Your cart is empty</p>
//       ) : (
//         <ul className="space-y-4">
//           {cartItems.map((item) => (
//             <li key={item._id} className="flex flex-col sm:flex-row bg-gray-100 p-4 rounded-lg shadow-md">
//               <div className="flex items-center mb-4 sm:mb-0">
//                 <img
//                   src={item.product.image}
//                   alt={item.product.title}
//                   className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-lg mr-4"
//                 />
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="text-lg sm:text-xl font-semibold text-black">{item.product.title}</h3>
//                     <span className="text-lg sm:text-xl font-semibold text-black">${item.totalPrice.toFixed(2)}</span>
//                   </div>
//                   <p className="mb-2 text-black text-sm sm:text-base">{item.product.description}</p>
//                   <div className="flex items-center space-x-2 sm:space-x-4 mb-4">
//                     <button
//                       onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
//                       className="bg-green-500 text-white py-1 px-2 rounded transition-transform transform hover:scale-105"
//                       disabled={item.quantity >= item.product.stock}
//                     >
//                       <FaPlus />
//                     </button>
//                     <button
//                       onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
//                       className="bg-green-500 text-white py-1 px-2 rounded transition-transform transform hover:scale-105"
//                       disabled={item.quantity <= 1}
//                     >
//                       <FaMinus />
//                     </button>
//                     <button
//                       onClick={() => handleRemoveFromCart(item._id)}
//                       className="bg-red-500 text-white py-1 px-2 rounded transition-transform transform hover:scale-105"
//                     >
//                       <FaTrash />
//                     </button>
//                   </div>
//                   <p className="text-black text-sm sm:text-base">Quantity: {item.quantity}</p>
//                   <p className="text-black text-sm sm:text-base">Price (1 item): ${item.price.toFixed(2)}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
//         <button
//           onClick={handleClearCart}
//           className="bg-gray-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-105"
//         >
//           Clear Cart
//         </button>
//         <button
//           onClick={handlePayNow}
//           className="bg-green-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-105"
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartAdding;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CartAdding = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/cart/viewbyidcart', { withCredentials: true });
        setCartItems(response.data.cartviewbyid.cartItems);
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [cartItems]);

  const handleRemoveFromCart = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/cart/cartdelete/${cartItemId}`, { withCredentials: true });
      setCartItems(cartItems.filter(item => item._id !== cartItemId));
      toast.success('Item removed from cart.');
    } catch (error) {
      console.error('Error removing product from cart:', error);
      toast.error('Failed to remove item from cart.');
    }
  };

  const handleUpdateQuantity = async (cartItemId, newQuantity) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/cart/updatecart/${cartItemId}`,
        { quantity: newQuantity },
        { withCredentials: true }
      );
  
      setCartItems(prevItems =>
        prevItems.map(item =>
          item._id === cartItemId
            ? { ...item, ...response.data.cartItem } 
            : item
        )
      );
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
      toast.error('Failed to update item quantity.');
    }
  };

  const handleClearCart = async () => {
    try {
      await axios.delete('http://localhost:4000/api/v1/cart/clear', { withCredentials: true });
      setCartItems([]);
      toast.success('Cart cleared.');
    } catch (error) {
      console.error('Error clearing cart:', error);
      toast.error('Failed to clear cart.');
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  const handlePayNow = () => {
    navigate('/order-cart-form', { state: { cartItems } });
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-6 lg:py-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <ul className="space-y-2 sm:space-y-4">
          {cartItems.map((item) => (
            <li key={item._id} className="flex flex-col sm:flex-row bg-gray-100 p-2 sm:p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2 sm:mb-0">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-16 h-auto sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-lg mr-2 sm:mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black">{item.product.title}</h3>
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-black">₹{item.totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="mb-1 text-black text-xs sm:text-sm md:text-base">{item.product.description}</p>
                  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 mb-2">
                    <button
                      onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                      className="bg-green-500 text-white py-1 px-1 sm:py-1 sm:px-2 md:py-1 md:px-3 rounded transition-transform transform hover:scale-105"
                      disabled={item.quantity >= item.product.stock}
                    >
                      <FaPlus className="text-xs sm:text-sm md:text-base" />
                    </button>
                    <button
                      onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                      className="bg-green-500 text-white py-1 px-1 sm:py-1 sm:px-2 md:py-1 md:px-3 rounded transition-transform transform hover:scale-105"
                      disabled={item.quantity <= 1}
                    >
                      <FaMinus className="text-xs sm:text-sm md:text-base" />
                    </button>
                    <button
                      onClick={() => handleRemoveFromCart(item._id)}
                      className="bg-red-500 text-white py-1 px-1 sm:py-1 sm:px-2 md:py-1 md:px-3 rounded transition-transform transform hover:scale-105"
                    >
                      <FaTrash className="text-xs sm:text-sm md:text-base" />
                    </button>
                  </div>
                  <p className="text-black text-xs sm:text-sm md:text-base">Quantity: {item.quantity}</p>
                  <p className="text-black text-xs sm:text-sm md:text-base">Price (1 item): ₹{item.price.toFixed(2)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mt-2 sm:mt-4">
        <button
          onClick={handleClearCart}
          className="bg-gray-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded transition-transform transform hover:scale-105"
        >
          Clear Cart
        </button>
        <button
          onClick={handlePayNow}
          className="bg-green-500 text-white py-1 px-2 sm:py-2 sm:px-4 rounded transition-transform transform hover:scale-105"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartAdding;


