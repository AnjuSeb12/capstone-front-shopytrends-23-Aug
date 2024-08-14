import React, { useState } from 'react';
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';
// import { FiSearch } from 'react-icons/fi'; 
// import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    console.log(query)

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <Form onSubmit={handleSearch}>
            <FormControl
                type="text"
                placeholder="Search products"
                className="mr-sm-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {/* <Button variant="outline-success" type="submit">Search</Button> */}
        </Form>
       
       
    );
};

export default SearchBar;
