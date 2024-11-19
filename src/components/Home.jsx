import { Link } from 'react-router-dom';
import '../App.css';

function Home() {

  return (
    <div>
      <div className='header'>
        <h1>Welcome to the Online Library</h1>
        <p>Browse through a variety of books across different categories!</p>
      </div>
      <nav className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/genres/Fiction">Fiction</Link></li>
        <li><Link to="/genres/Classics">Non-Fiction</Link></li>
        <li><Link to="/genres/Science Fiction">Sci-Fi</Link></li>
        <li><Link to="/browse">Browse Books</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
      </ul>
      </nav>
    </div>
  );
};

export default Home;
