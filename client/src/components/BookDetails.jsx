import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from './axiosInstance';
const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [book, setBook] = useState(null); // book object from backend
  useEffect(() => {
    axios
      .get(`/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(e => setError(e.response?.data?.message));
  }, []);
  const handleDelete = () => {
    axios
      .delete(`/api/books/${id}`)
      .then(res => navigate('/'))
      .catch(e => console.log(e));
  };
  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {book && (
        <>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Year: {book.year}</p>
          <Link to={`/books/${id}/update`}>Update Book</Link>
          <button onClick={handleDelete}>Delete Book</button>
        </>
      )}
    </div>
  );
};

export default BookDetails;
