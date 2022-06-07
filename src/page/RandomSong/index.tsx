import { useContext } from 'react';
import './style.css';
import { useQuery } from 'react-query';
import { callApi } from '../../utils/callApi';
import keyBy from 'lodash/keyBy';
import { ContextMenu } from '../../hooks/context';
import { toMinutesAndSeconds } from '../../utils/toMinutesAndSeconds';
import { useRandomId } from '../../hooks/useRandomId';
import { Helmet } from 'react-helmet';
import { Loader } from '../../components/Loader';

export const RandomSong = () => {
  const { artistInformation } = useContext(ContextMenu);

  const artistBasicInfo = keyBy(artistInformation, 'id');

  const { idx: idArtist } = useRandomId(Object.keys(artistBasicInfo)?.length);
  const { data: albumsData } = useQuery('albumsData', () => callApi(`artists/${idArtist}/albums`));
  const albumsByArtist = keyBy(albumsData, 'artist');

  const { idx: idAlbum } = useRandomId(Object.keys(albumsByArtist)?.length);
  const allSongsOfAlbum = albumsByArtist[idAlbum];
  const songsByAlbum = keyBy(allSongsOfAlbum?.albums, 'id');

  const { idx: idSong } = useRandomId(Object.keys(songsByAlbum).length);
  const { idx: idSongSuggestion } = useRandomId(Object.keys(songsByAlbum).length);

  const randomAlbum = songsByAlbum[+Object.keys(songsByAlbum)[0] + idSong];
  const randomAlbumSuggestion = songsByAlbum[+Object.keys(songsByAlbum)[0] + idSongSuggestion];

  const { data: albumsDataByArtist, isLoading } = useQuery('album', () =>
    callApi(`albums/${randomAlbum?.id}/songs`),
  );
  const albums = keyBy(albumsDataByArtist, 'album');
  const album = albums[randomAlbum?.id >= 300 ? 300 : randomAlbum?.id];

  const { idx: idRandomSong } = useRandomId(album?.songs.length);
  const randomSongsOfAlbum = album?.songs[idRandomSong];

  const albumSuggestion =
    albums[randomAlbumSuggestion?.id >= 300 ? 300 : randomAlbumSuggestion?.id];

  return (
    <>
      <Helmet>
        <title>{`Random song - ${randomSongsOfAlbum?.name}`} </title>
        <link rel="icon" type="image/svg+xml" href={randomAlbum?.image} />
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <div className="RandomSong__reproduction">
            <div className="RandomSong__reproduction__pic">
              <img src={randomAlbum?.image} alt={randomAlbum?.name} />
            </div>
            <div className="RandomSong__reproduction__info">
              <h3>{randomSongsOfAlbum?.name}</h3>
              <div>
                <p> Album: {randomAlbum?.name}</p>
                <p> {randomAlbum?.total_tracks} canciones </p>
              </div>
            </div>
          </div>
          <div className="RandomSong__reproduction__info__secondary">
            <div className="RandomSong__reproduction__main">
              <h3>Canciones</h3>
              <ol className="RandomSong__reproduction__main__section">
                {album?.songs.map((song: any) => {
                  return (
                    <li key={song.id}>
                      <strong> {song.name} </strong>
                      <p> {toMinutesAndSeconds(song.duration_ms)} </p>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="RandomSong__reproduction__main">
              <h3>Sugerencias</h3>
              <ol className="RandomSong__reproduction__main__section">
                {albumSuggestion?.songs.map((SongSuggestion: any) => {
                  return (
                    <li key={SongSuggestion.id}>
                      <strong> {SongSuggestion.name} </strong>
                      <p> {toMinutesAndSeconds(SongSuggestion.duration_ms)} </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
