import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const query = queryParams.get('query') || '';
      const type = queryParams.get('type') || 'title';

      try {
        const response = await axios.get(`http://localhost:4000/api/v1/searches/searchitem?query=${searchQuery}&type=${searchType}`);
        setResults(response.data.searchItem || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {results.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item) => (
              <div key={item._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <p className="text-xl font-bold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
