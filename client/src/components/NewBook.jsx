import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './axiosInstance';
const NewBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // let defaultImage = ""
    // {image: image || defaultImage}

    axios
      .post(`/api/books`, { title, author, year })
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
      .catch(e => console.log(e));
  };
  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <label htmlFor="">Author</label>
        <input type="text" name="author" value={author} onChange={e => setAuthor(e.target.value)} />
        <label htmlFor="">Year</label>
        <input type="text" name="year" value={year} onChange={e => setYear(e.target.value)} />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default NewBook;
