import { Link } from 'react-router-dom';

export const Character = (props) => {
  const { id, name } = props;
  return <Link to={`/details/${id}`}>{name}</Link>;
};
