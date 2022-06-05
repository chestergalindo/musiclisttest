import { useContext } from 'react';
import { ArtistImage } from '../../components/ArtistImage';
import { ContextMenu } from '../../hooks/context';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { callApi } from '../../utils/callApi';
import keyBy from 'lodash/keyBy';
import './style.css';
import { FaPlay } from 'react-icons/fa';

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
            <div className="artistSongList__song__container" key={album.id}>
              <img src={album.image} alt={album.name} className="artistSongList__song__img" />
              <div>
                <strong>{album?.name}</strong>
                <p>canciones:{album?.total_tracks}</p>
              </div>
              <button className="artistSongList__song__button">
                <FaPlay className="artistSongList__song__button--icon" />
              </button>
            </div>
          ))}
        </div>
      </section>
      ;
    </>
  );
};
