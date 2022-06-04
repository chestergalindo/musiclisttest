import './style.css';
import { callApi } from '../../utils/callApi';
import { useQuery } from 'react-query';
import { Image } from '../../components/Image';
import { GridAlbums } from '../../components/GridAlbums';

export const ArtistList = () => {
  const { isLoading, error, data } = useQuery('repoData', () => callApi('artists'));

  return (
    <div className="artistList">
      <header className="artistList__header">
        <h1 className="artistList__title">Prueba</h1>
        <h5 className="artistList__subtitle"> Lista de artistas</h5>
      </header>
      <div className="artistList__list">
        <GridAlbums
          isLoading={isLoading}
          data={data}
          error={error}
          renderItem={(artist: any) => (
            <Image
              isCircle
              name={artist.name}
              src={artist.image}
              alt={artist.name}
              key={artist.id}
            />
          )}
        />
      </div>
    </div>
  );
};
