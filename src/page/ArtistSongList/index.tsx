import { useParams } from 'react-router-dom';

export const ArtistSongList = () => {
  const { idAlbum } = useParams();
  return <p> Album </p>;
};
