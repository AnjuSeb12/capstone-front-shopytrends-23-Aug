import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOrdersView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/orders/allorders', {
          withCredentials: true,
        });
        console.log(response.data.orders)
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order._id} className="bg-white shadow-md rounded-lg p-4">
              <h4 className="text-xl font-semibold mb-2">Order ID: {order._id}</h4>
              <p className="text-gray-600 mb-2">User: {order.user.name} ({order.user.email})</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {order.orderItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center bg-gray-100 p-4 rounded-md">
                    <img src={item.image} alt={item.title} className="w-24 h-24 object-cover mb-2 rounded" />
                    <h5 className="text-lg font-medium mb-1">{item.title}</h5>
                    <p className="text-gray-700">Price: ${item.price}</p>
                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-2">Status: {order.paymentStatus}</p>
              <p className="text-gray-700 mb-2">Shipping Address: {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default AdminOrdersView;
