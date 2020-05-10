import { useEffect, useState } from 'react';
import yelp from "../../utils/yelp";

export const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const apiSearch = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch(err) {
      setErrorMessage('Something went wrong!')
    }
  };

  useEffect(() => {
    apiSearch('pasta');
  }, []);

  return {
    apiSearch: (searchText: string) => apiSearch(searchText),
    results,
    errorMessage
  };
}