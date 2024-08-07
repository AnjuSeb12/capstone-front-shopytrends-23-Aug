import axios from 'axios';
import React, { useEffect, useState } from 'react';


const DisplayProducts = () => {
    const [items, setItems] = useState([]);
    console.log(items)

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:4000/api/v1/product/getproducts",
                
                );

                const data = res.data.products;
                console.log(data);
                setItems(data);
               
            } catch (error) {
                console.log(error);
            }
        };
        getAllProducts();
    }, [setItems]);
    return (
        <>
            <div className="grid grid-cols-3 px-4">
                

                {items && items.map((item, index) => (

                    <div key={index} className="flex h-[300px] w-[600px]">
                        <section>
                            <img
                                src={item.image}
                                alt="item image"
                                className="w-[200px] border-none bg-center"
                            />
                        </section>
                        <section className="space-y-4 px-3">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="font-light text-gray-500">{item.description}</p>
                            <h3>{item.price}</h3>
                            <button
                                className="rounded-lg bg-blue-500 px-2 py-1 text-white"
                            >
                                Add cart
                            </button>
                        </section>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DisplayProducts