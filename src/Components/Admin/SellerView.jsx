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
import axios from 'axios'
  


const SellerView = () => {

    const [sellers, setSellers] = useState([])
    console.log(sellers)
   



    useEffect(() => {

        const getAllSellers = async (req, res) => {
            try {
                const res = await axios.get("http://localhost:4000/api/v1/seller/sellers", {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                setSellers(res.data.sellers)
               


            } catch (error) {
                console.log(error);

            }

        };
        getAllSellers()

    }, [sellers])



  return (
    <div>
            <TableContainer>
                <Table size='sm' variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>FirstName</Th>
                            <Th>LastName</Th>
                            <Th >E-mail</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {sellers && sellers.map((seller, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{seller.firstName}</td>
                                <td>{seller.lastName}</td>
                                <td>{seller.email}</td>


                            </tr>


                        ))}
                    </Tbody>

                </Table>
            </TableContainer>




        </div>
  )
}

export default SellerView