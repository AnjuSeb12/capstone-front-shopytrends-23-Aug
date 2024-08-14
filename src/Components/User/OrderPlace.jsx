import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, useToast } from '@chakra-ui/react';

const OrderPlace = () => {
    const [shippingAddress, setShippingAddress] = useState({
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const toast = useToast();

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress({ ...shippingAddress, [name]: value });
    };

    const handleOrderPlacement = async () => {
        const orderItems = [
            {
                product: "product_id_here", // Replace with actual product ID
                quantity: 1,
                totalPrice: 500, // Replace with actual price
            },
        ];

        const orderData = {
            amount: 500, // Replace with the total amount
            shippingAddress,
            orderItems,
        };

        try {
            const { data: order } = await axios.post('http://localhost:4000/api/v1/order/orders', orderData);

            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: "Anju",
                description: "Test Transaction",
                order_id: order.id,
                handler: async (response) => {
                    try {
                        const verificationData = {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            orderItems,
                            shippingAddress,
                        };
                        await axios.post('http://localhost:4000/api/v1/order/verify-payment', verificationData);
                        toast({
                            title: "Payment Successful!",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                        });
                    } catch (error) {
                        toast({
                            title: "Payment Verification Failed",
                            status: "error",
                            duration: 5000,
                            isClosable: true,
                        });
                    }
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            toast({
                title: "Error placing order",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box maxWidth="400px" mx="auto" p="4">
            <Input
                name="address"
                placeholder="Address"
                value={shippingAddress.address}
                onChange={handleAddressChange}
                mb="4"
            />
            <Input
                name="city"
                placeholder="City"
                value={shippingAddress.city}
                onChange={handleAddressChange}
                mb="4"
            />
            <Input
                name="postalCode"
                placeholder="Postal Code"
                value={shippingAddress.postalCode}
                onChange={handleAddressChange}
                mb="4"
            />
            <Input
                name="country"
                placeholder="Country"
                value={shippingAddress.country}
                onChange={handleAddressChange}
                mb="4"
            />
            <Button onClick={handleOrderPlacement} colorScheme="blue">
                Place Order
            </Button>
        </Box>
    );
};

export default OrderPlace;
