import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import {jwtDecode} from 'jwt-decode';
  import Cookies from 'js-cookie';





const SellerProductsView = () => {
    const [products,setProducts]=useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);
   
   
  

    useEffect(() => {
        const getAllSellerProducts = async () => {
            try {
                // Assuming you have the token stored in localStorage or cookies
                const token = Cookies.get('token'); // Or get it from cookies
                if (!token) throw new Error('No token found');

                // Decode the token to get the user ID
                const decodedToken = jwtDecode(token);
                const id = decodedToken.id; // Make sure to use the correct key
                setUserId(id);
                setIsAuthenticated(true)
                console.log(`Fetching products for user ID: ${id}`);
                const res = await axios.get(`http://localhost:4000/api/v1/product/getsingleproduct/${id}`, 
                    { withCredentials: true ,
                        headers: {
                            "Content-Type": "multipart/form-data",
                          },
                    });
                    console.log('Response status:', res.status);
                    console.log('Response data:', res.data.product); 
                setProducts(res.data.product);
            } catch (error) {
                // toast.error(error.message);
                console.log(error.message)
                setIsAuthenticated(false)

            }
        };

        getAllSellerProducts();

    }, []);



    return (
        <div>
            <TableContainer>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Product Name</Th>
                            <Th>Description</Th>
                            <Th >Price</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products && products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                {/* <td><Link to={`/user/${user._id}`}><BorderColorIcon /></Link></td>
                                <td><UserDelete id={user._id} /></td> */}

                            </tr>


                        ))}
                    </Tbody>

                </Table>
            </TableContainer>




        </div>
    )
}

export default SellerProductsView