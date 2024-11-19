import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetails () {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`https://example-data.draftbit.com/books/${id}`);
      const data = await response.json();
      setBook(data);
    };

    fetchBookDetails();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/browse">Back to Browse</Link>
      <h1>{book.title}</h1>
      <img src={book.image_url} alt={book.title}/> 
      <p><strong>Author:</strong> {book.authors}</p>
      <p><strong>Genre:</strong> {book.genres}</p>
      <p><strong>Description:</strong></p>
      <p>{book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
    </div>
  );
};

export default BookDetails;
