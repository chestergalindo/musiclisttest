import './App.css';
import { callApi } from '../utils/callApi';
import { useQuery } from 'react-query';

export const ArtistList = () => {
  const { isLoading, error, data } = useQuery('repoData', () => callApi('artists'));

  return <p> artist </p>;
};
