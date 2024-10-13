import { gql, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

const GET_EPISODE_CHARACTERS = gql`
  query getEpisodeCharacters($id: ID!) {
    episode(id: $id) {
      characters {
        id
        name
      }
    }
  }
`;

export const Episode = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EPISODE_CHARACTERS, {
    variables: { id },
  });

  if (loading) return 'Loading...';
  if (error) return `${error}`;

  return (
    <>
      <ul>
        {data.episode.characters.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/character/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
