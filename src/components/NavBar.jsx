import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Characters</Link>
        </li>
        <li>
          <Link to='/locations'>Locations</Link>
        </li>
        <li>
          <Link to='/episodes'>Episodes</Link>
        </li>
      </ul>
      <input type='text' name='search' id='search' placeholder='Search' />
    </nav>
  );
};
