import { useContext } from 'react';
import './style.css';

import { useQuery } from 'react-query';
import keyBy from 'lodash/keyBy';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArtistImage } from '../../components/ArtistImage';
import { PlaySong } from '../PlaySong';
import { ContextMenu } from '../../hooks/context';
import { callApi } from '../../utils/callApi';
import { Loader } from '../../components/Loader';

export const ArtistSongList = () => {
  const { idArtist = 0 } = useParams();
  const { artistInformation } = useContext(ContextMenu);

  const { data: artistInfo, isLoading } = useQuery('albums', () =>
    callApi(`artists/${idArtist}/albums`),
  );
  const groupedByAlbum = keyBy(artistInfo, 'artist');
  const artistBasicInfo = keyBy(artistInformation, 'id');

  const albumList = groupedByAlbum[+idArtist]?.albums;
  const artistData: any = artistBasicInfo[+idArtist];

  return (
    <>
      <Helmet>
        <title>{artistData?.name}</title>
        <link rel="icon" type="image/svg+xml" href={artistData?.image} />
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="artistSongList__container">
            <ArtistImage
              src={artistData?.image}
              name={artistData?.name}
              isCircle
              id={0}
              alt={''}
              popularity={0}
            />
            <div className="artistSongList__text">
              <h3>{artistData?.name}</h3>
              <div>
                <FaStar className="artistSongList__star" />
              </div>
              <p>{artistData?.popularity}</p>
            </div>
          </section>
          <section className="artistSongList__albums">
            <div className="artistSongList__songs">
              <h3>Albumes</h3>
              {albumList?.map((album: any) => (
                <div key={album.id} className="artistSongList__song__container">
                  <div className="artistSongList__song__content">
                    <img src={album.image} alt={album.name} className="artistSongList__song__img" />
                    <div>
                      <strong>{album?.name}</strong>
                      <p>canciones:{album?.total_tracks}</p>
                    </div>
                  </div>
                  <div className="artistSongList__song__button">
                    <PlaySong id={album?.id} image={album.image} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};
