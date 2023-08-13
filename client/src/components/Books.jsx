import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from './axiosInstance';
const Books = () => {
  const [books, setBooks] = useState(null); // books array from backend
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/books`)
      .then(res => setBooks(res.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books &&
          books.map(book => (
            <li key={book.id}>
              <Link to={`/books/${book._id}`}>
                {book.title} by {book.author}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
