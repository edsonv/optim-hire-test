import { gql, useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';

const GET_LOCATIONS_LIST = gql`
  query getLocationsList {
    locations {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        residents {
          id
          name
        }
      }
    }
  }
`;

export const LocationsList = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS_LIST);

  if (loading) return 'loading...';
  if (error) return `${error}`;

  return (
    <div style={{ display: 'flex' }}>
      <ul>
        {data.locations.results.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/locations/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
