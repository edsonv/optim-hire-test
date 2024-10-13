import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_CHARACTERS_LIST = gql`
  query getCharactersList($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
      }
    }
  }
`;

export const CharactersList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS_LIST);

  if (loading) return 'Loading...';
  if (error) return `${error}`;

  return (
    <ul>
      {data.characters.results.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/character/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
