import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../utils/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [description, setDescription] = useState('');
  const [genres, setGenres] = useState('');
  const [rating, setRating] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !authors || !description || !genres || !rating) {
      alert('All fields are required');
      return;
    }
    const newBook = {
      id: Date.now(),
      title,
      authors,
      description,
      genres,
      rating: parseFloat(rating),
    };
    dispatch(addBook(newBook));
    console.log(newBook);
    navigate('/browse');
    
  };

  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={authors}
        onChange={(e) => setAuthors(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
    </div>
    
  ); 
};

export default AddBook;
