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
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { set } from 'react-hook-form';





const SellerProductsView = () => {
    const [products, setProducts] = useState([]);
   




    useEffect(() => {
        const getAllSellerProducts = async () => {
            try {
             
                const res = await axios.get(`http://localhost:4000/api/v1/product/getsingleproduct`,
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    setProducts(res.data.product);
                   


            } catch (error) {
                console.log(error.message)
            
    

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