import { useState, useEffect } from 'react';
import axios from 'axios';

const useBooks = (apiUrl) => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setBookData(response.data.reading_log_entries);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [apiUrl]);

  return bookData;
};

export default useBooks;
