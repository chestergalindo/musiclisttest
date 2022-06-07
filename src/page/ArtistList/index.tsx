import { useContext } from 'react';
import './style.css';
import { ArtistImage } from '../../components/ArtistImage';
import { GridAlbums } from '../../components/GridAlbums';
import { ContextMenu } from '../../hooks/context';
import { Helmet } from 'react-helmet';

export const ArtistList = () => {
  const { isLoadingArtistInformation, artistInformation } = useContext(ContextMenu);

  return (
    <section className="artistList">
      <Helmet>
        <title>Lista de Artistas</title>
        <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
      </Helmet>
      <div className="artistList__list">
        <GridAlbums
          isLoading={isLoadingArtistInformation}
          data={artistInformation}
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
