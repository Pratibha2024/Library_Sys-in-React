import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks, setBooks } from '../utils/bookSlice';
import BookCard from './BookCard';

function BrowseBooks() {
  const { genres } = useParams();
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://example-data.draftbit.com/books?_limit=20');
      if (!response.ok) throw new Error('Failed to fetch books');
      const data = await response.json();
      dispatch(setBooks(data));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchBooks()}, [dispatch]);


  const filteredBooks = books.filter((book) => {
    const title = book.title ? book.title.toLowerCase() : '';
    const authors = book.authors ? book.authors.toLowerCase() : '';
    const bookGenres = book.genres ? book.genres.split(',').map((g) => g.trim().toLowerCase()) : [];

    const genreMatch = genres ? bookGenres.includes(genres.toLowerCase()) : true;

    return (
       genreMatch &&
      (title.includes(search.toLowerCase()) || authors.includes(search.toLowerCase()))
    );
  });

  if (loading) return <div>Loading books...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className='browse-input'>
        <h2>{genres ? `${genres} Books` : 'Browse Books'}</h2>
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
    </div>
      
      <div className='browse-books'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} 
            />))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
