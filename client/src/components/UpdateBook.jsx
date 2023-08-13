import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from './axiosInstance';
const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState();
  useEffect(() => {
    axios
      .get(`/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(e => setError(e.response?.data?.message));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/books/${id}`, book)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
      .catch(e => console.log(e));
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
    // const updatedBook = {...book}
    // updatedBook[name] = value
    // setState(updatedBook)
  };
  return (
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={book?.title || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Author</label>
        <input type="text" name="author" value={book?.author || ''} onChange={handleChange} />
        <label htmlFor="">Year</label>
        <input type="text" name="year" value={book?.year || ''} onChange={handleChange} />
        <button>Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
