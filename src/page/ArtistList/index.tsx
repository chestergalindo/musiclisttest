import { useContext } from 'react';
import './style.css';
import { ArtistImage } from '../../components/ArtistImage';
import { GridAlbums } from '../../components/GridAlbums';
import { ContextMenu } from '../../hooks/context';

export const ArtistList = () => {
  const { isLoading, data } = useContext(ContextMenu);

  return (
    <section className="artistList">
      <div className="artistList__list">
        <GridAlbums
          isLoading={isLoading}
          data={data}
          renderItem={(artist: any) => (
            <div key={artist.id}>
              <ArtistImage
                isCircle
                id={artist.id}
                name={artist.name}
                src={artist.image}
                alt={artist.name}
                popularity={artist.popularity}
              />
            </div>
          )}
        />
      </div>
    </section>
  );
};
