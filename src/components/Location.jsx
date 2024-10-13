import { gql, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

const GET_LOCATION_CHARACTERS = gql`
  query getLocationCharacters($id: ID!) {
    location(id: $id) {
      residents {
        id
        name
      }
    }
  }
`;

export const Location = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_LOCATION_CHARACTERS, {
    variables: { id },
  });

  if (loading) return 'loading...';
  if (error) return `${error}`;

  return (
    <ul>
      {data.location.residents.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/character/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
