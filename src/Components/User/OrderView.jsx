import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box,
    Button,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Spinner,
    useToast,
    useBreakpointValue,
    Flex
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const OrderView = () => {
    const { userId, orderId } = useParams(); // Extract userId and orderId from URL parameters
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const toast = useToast();

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`/api/orders/${userId}/${orderId}`);
                setOrder(data);
            } catch (error) {
                setError(error.message);
                toast({
                    title: "Error fetching order",
                    description: error.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [userId, orderId, toast]);

    if (loading) {
        return (
            <Flex justify="center" align="center" height="100vh" bg="black">
                <Spinner size="xl" color="white" />
            </Flex>
        );
    }

    if (error) {
        return (
            <Flex justify="center" align="center" height="100vh" bg="black">
                <Text color="red.500" fontSize="xl">{error}</Text>
            </Flex>
        );
    }

    if (!order) {
        return (
            <Flex justify="center" align="center" height="100vh" bg="black">
                <Text color="white" fontSize="xl">No order found.</Text>
            </Flex>
        );
    }



    
    const handleDeleteOrder = async (orderId) => {
        try {
            await axios.delete(`/api/orders/${orderId}`);
            toast({
                title: "Order Deleted",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            // Optionally, redirect or refresh the view
        } catch (error) {
            toast({
                title: "Error deleting order",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };
    return (
        <Box p="4" bg="black" color="white" minHeight="100vh">
            <Text fontSize={useBreakpointValue({ base: "xl", md: "2xl" })} mb="4">Order Details</Text>
            <Text mb="2"><strong>Order ID:</strong> {order._id}</Text>
            <Text mb="2"><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</Text>
            <Text mb="2"><strong>Total Amount:</strong> ₹{order.amount}</Text>
            <Text mb="2"><strong>Shipping Address:</strong></Text>
            <Text mb="2">{order.shippingAddress.address}</Text>
            <Text mb="2">{order.shippingAddress.city}</Text>
            <Text mb="2">{order.shippingAddress.postalCode}</Text>
            <Text mb="2">{order.shippingAddress.country}</Text>

            <Text fontSize={useBreakpointValue({ base: "lg", md: "xl" })} mt="6" mb="4">Order Items</Text>
            <Table variant="simple" colorScheme="whiteAlpha">
                <Thead>
                    <Tr>
                        <Th color="white">Product</Th>
                        <Th color="white">Quantity</Th>
                        <Th color="white">Total Price</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {order.orderItems.map(item => (
                        <Tr key={item.product}>
                            <Td color="white">{item.product}</Td>
                            <Td color="white">{item.quantity}</Td>
                            <Td color="white">₹{item.totalPrice}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <Button mt="4" colorScheme="red" onClick={() => handleDeleteOrder(order._id)}>
                Delete Order
            </Button>
        </Box>
    );
};



export default OrderView;
