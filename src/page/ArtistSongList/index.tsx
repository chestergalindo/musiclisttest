import { useContext } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import keyBy from 'lodash/keyBy';
import { FaStar } from 'react-icons/fa';

import { ArtistImage } from '../../components/ArtistImage';
import { PlaySong } from '../PlaySong';
import { ContextMenu } from '../../hooks/context';
import { callApi } from '../../utils/callApi';

export const ArtistSongList = () => {
  const { data: basicInfo } = useContext(ContextMenu);
  const { idAlbum = 0 } = useParams();
  const { data: artistInfo } = useQuery('albums', () => callApi(`artists/${idAlbum}/albums`));
  const groupedByAlbum = keyBy(artistInfo, 'artist');
  const artistBasicInfo = keyBy(basicInfo, 'id');

  const albumList = groupedByAlbum[+idAlbum]?.albums;
  const artistData: any = artistBasicInfo[+idAlbum];

  return (
    <>
      <section className="artistSongList__container">
        <ArtistImage src={artistData?.image} name={artistData?.name} isCircle />
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
              <Link to={`album/${album.id}`} className="artistSongList__song__content">
                <img src={album.image} alt={album.name} className="artistSongList__song__img" />
                <div>
                  <strong>{album?.name}</strong>
                  <p>canciones:{album?.total_tracks}</p>
                </div>
              </Link>
              <div className="artistSongList__song__button">
                <PlaySong id={album?.id} image={album.image} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
