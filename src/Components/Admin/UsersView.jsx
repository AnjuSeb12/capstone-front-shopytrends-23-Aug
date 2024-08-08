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




const UsersView = () => {

    const [users, setUsers] = useState([])
    console.log(users)



    useEffect(() => {

        const getAllUsers = async (req, res) => {
            try {
                const res = await axios.get("http://localhost:4000/api/v1/user/users", {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                setUsers(res.data.users)
               


            } catch (error) {
                console.log(error);

            }

        };
        getAllUsers()

    }, [users])
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
                        {users && users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>

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

export default UsersView