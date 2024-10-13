import { useQuery, gql } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

const GET_CHARACTER_DETAILS = gql`
  query getCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
      }
      location {
        id
        name
        type
        dimension
      }
      image
      episode {
        id
        name
      }
    }
  }
`;

export const Details = () => {
  const { characterId } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id: characterId },
  });

  if (loading) return 'Loading...';
  if (error) return `${error}`;

  const {
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
  } = data.character;

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Status</dt>
        <dd>{status}</dd>

        <dt>Species</dt>
        <dd>{species}</dd>

        <dt>Type</dt>
        <dd>{type}</dd>

        <dt>Gender</dt>
        <dd>{gender}</dd>

        <dt>Origin</dt>
        <dd>Location: {origin.name}</dd>
        <dd>Dimension: {origin.dimension}</dd>
        <dd>Type: {origin.planet}</dd>

        <dt>Last Location</dt>
        <dd>Location: {location.name}</dd>
        <dd>Dimension: {location.dimension}</dd>
        <dd>Type: {location.planet}</dd>

        <dt>Image</dt>
        <dd>
          <img src={image} alt={name} />
        </dd>

        <dt>Episodes</dt>
        <dd>
          <ul>
            {episode.map(({ id, name }) => (
              <li key={id}>
                <Link to={`/episodes/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </section>
  );
};
