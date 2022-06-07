import './style.css';
import { useRandomId } from '../../hooks/useRandomId';
import { useQuery } from 'react-query';
import { callApi } from '../../utils/callApi';
import keyBy from 'lodash/keyBy';

export const RandomSong = () => {
  const { idx } = useRandomId(100);

  const { data } = useQuery('songs', () => callApi(`albums/${idx}/songs`));

  const albums = keyBy(data, 'album');
  const songsOfAlbum = albums[idx];
  const { idx: songIndex, setIdx, setRandomId } = useRandomId(songsOfAlbum?.songs.length);
  console.log(songsOfAlbum);

  return (
    <section>
      <div className="RandomSong__reproduction">
        <div className="RandomSong__reproduction__pic">
          <img />
        </div>
        <div className="RandomSong__reproduction__info">
          <h3>Do I Wanna Know?</h3>
          <div>
            <p> Album Do I Wanna Know </p>
            <p> 2 canciones: 7 </p>
          </div>
        </div>
      </div>
      <div className="RandomSong__reproduction__info__secondary">
        <div className="RandomSong__reproduction__main">
          <h3>Canciones</h3>
          <ul className="RandomSong__reproduction__main__section">
            <strong> nombre </strong>
            <p> 2:26 </p>
          </ul>
        </div>
        <div className="RandomSong__reproduction__main">
          <h3>Sugerencias</h3>
          <ul className="RandomSong__reproduction__main__section">
            <strong> nombre </strong>
            <p> 2:26 </p>
          </ul>
        </div>
      </div>
    </section>
  );
};
