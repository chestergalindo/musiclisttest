import { useContext } from 'react';
import './style.css';
import { Image } from '../../components/Image';
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
            <Image
              isCircle
              id={artist.id}
              name={artist.name}
              src={artist.image}
              alt={artist.name}
              key={artist.id}
            />
          )}
        />
      </div>
    </section>
  );
};
