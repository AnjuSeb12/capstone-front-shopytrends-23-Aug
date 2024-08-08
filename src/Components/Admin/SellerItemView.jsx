import axios from 'axios'
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



const SellerItemView = () => {
    const [products, setProducts] = useState([])
    console.log(products)
   



    useEffect(() => {

        const getSellerProducts = async (req, res) => {
            try {
                const res = await axios.get("http://localhost:4000/api/v1/product/getproducts", {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                setProducts(res.data.products)
               


            } catch (error) {
                console.log(error);

            }

        };
        getSellerProducts()

    }, [products])

  return (
    <TableContainer>
    <Table size='sm' variant='striped' colorScheme='teal'>
        <Thead>
            <Tr>
                <Th>#</Th>
                <Th>Name</Th>
               
                <Th >Products Title</Th>
            </Tr>
        </Thead>
        <Tbody>
            {products && products.map((product, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.firstName}</td>
                   
                    <td>{product.title}</td>

                   

                </tr>


            ))}
        </Tbody>

    </Table>
</TableContainer>
  )
}

export default SellerItemView