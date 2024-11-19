import { useState } from 'react';
import { Link } from 'react-router-dom';

function BookCard ({ book }) {

  const [isExpanded, setIsExpanded] = useState(false);

  function handleReadMore() {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <img src={book.image_url} alt={book.title} />   
      <p><strong>Author: {book.authors}</strong></p>
      <p><strong>Genre:</strong> {book.genres}</p>

      <p><strong>Description:</strong></p>
      <p>{isExpanded ? book.description : book.description.length > 100 ? book.description.slice(0, 100) + "..."  
            : book.description } </p>
  {book.description.length > 100 && (
  <button onClick={handleReadMore}> {isExpanded ? "Read Less" : "Read More"} </button>
)}      
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;