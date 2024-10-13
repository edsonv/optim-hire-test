import { gql, useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';

const GET_EPISODES_LIST = gql`
  query getEpisodesList {
    episodes {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        episode
      }
    }
  }
`;

export const EpisodesList = () => {
  const { loading, error, data } = useQuery(GET_EPISODES_LIST);

  if (loading) return 'Loading...';
  if (error) return `${error}`;

  return (
    <div style={{ display: 'flex' }}>
      <ul>
        {data.episodes.results.map(({ id, name }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
