import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import {
//     Table,
//     Thead,
//     Tbody,
//     Tfoot,
//     Tr,
//     Th,
//     Td,
//     TableCaption,
//     TableContainer,
//   } from '@chakra-ui/react'
import { Box, Text, Flex, useBreakpointValue } from '@chakra-ui/react'



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
                console.log(res.data.products)
               


            } catch (error) {
                console.log(error);

            }

        };
        getSellerProducts()

    }, [products])
    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
//     <TableContainer>
//     <Table size='sm' variant='striped' colorScheme='teal'>
//         <Thead>
//             <Tr>
//                 <Th>#</Th>
//                 <Th>Name</Th>
               
//                 <Th >Products Title</Th>
//             </Tr>
//         </Thead>
//         <Tbody>
//             {products && products.map((product) => (
//                 <tr key={product._id}>
                  
//                     <td>{product.title}</td>
                   
//                     <td>{product.description}</td>


                   

//                 </tr>


//             ))}
//         </Tbody>

//     </Table>
// </TableContainer>
<Box className="container mx-auto p-4">
      <Text as="h1" className="text-2xl font-bold mb-4">
        Seller Products
      </Text>
      <Flex wrap="wrap" gap={4}>
        {products.map(product => (
          <Box
            key={product._id}
            className="w-full md:w-1/2 lg:w-1/3 p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <Text className="text-lg font-semibold">{product.title}</Text>
            <Text className="text-sm text-gray-600 mb-2">{product.description}</Text>
            <Text className="text-blue-500 font-bold mb-4">Price: ${product.price}</Text>
            <Flex
              className="text-sm text-gray-700"
              direction={flexDirection}
              justify="space-between"
              align="center"
            >
              <Text>Seller: {product.seller.firstName}</Text>
              <Text>({product.seller.email})</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>

  )
}

export default SellerItemView