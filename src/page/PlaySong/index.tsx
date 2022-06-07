import { useState } from 'react';
import './style.css';
import keyBy from 'lodash/keyBy';
import { useQuery } from 'react-query';
import { callApi } from '../../utils/callApi';
import { PortalWithState } from 'react-portal';
import { FaPlay, FaRandom, FaExternalLinkAlt } from 'react-icons/fa';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { BsPlayCircleFill } from 'react-icons/bs';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { HiDotsVertical } from 'react-icons/hi';
import { useRandomId } from '../../hooks/useRandomId';
import { toMinutesAndSeconds } from '../../utils/toMinutesAndSeconds';

export const PlaySong = (props: any) => {
  const [isOpenListSongs, setIsOpenListSongs] = useState(false);
  const { data } = useQuery('songs', () => callApi(`albums/${props.id}/songs`));

  const albums = keyBy(data, 'album');
  const songsOfAlbum = albums[props.id];
  const { idx, setIdx, setRandomId } = useRandomId(songsOfAlbum?.songs.length);

  return (
    <PortalWithState closeOnOutsideClick closeOnEsc>
      {({ openPortal, isOpen, portal }) => (
        <>
          <button onClick={openPortal} className="PlaySong__song__button">
            <FaPlay className="PlaySong__song__button--icon" />
          </button>
          {portal(
            <div
              className="PlaySong__container"
              style={{ height: isOpenListSongs ? '55vh' : '70px' }}
            >
              {isOpenListSongs ? (
                <section className="PlaySong__container__lits_songs">
                  <h3>Canciones</h3>
                  <div className="PlaySong__container__lits_songs__list">
                    {songsOfAlbum?.songs.map((song: any, index: any) => {
                      return (
                        <div
                          key={song.id}
                          className={`PlaySong__container__lits_songs__list-element ${
                            song.id === songsOfAlbum?.songs[idx]?.id
                              ? 'PlaySong__container__lits_songs__list-element--active'
                              : ''
                          }`}
                          onClick={() => {
                            setIdx(index);
                          }}
                        >
                          <img src={props.image} alt={song.name} className="PlaySong__song__img" />
                          <div className="PlaySong__song__content">
                            <strong>{song.name}</strong>
                          </div>
                          <p>{toMinutesAndSeconds(song?.duration_ms)}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ) : (
                <></>
              )}
              <section className="PlaySong__container__onplay">
                <div className="PlaySong__container__onplay__reproduction">
                  <BiSkipPrevious />
                  {songsOfAlbum?.songs[idx]?.preview_url && (
                    <audio controls>
                      <source src={songsOfAlbum?.songs[idx]?.preview_url} type="audio/mpeg" />
                    </audio>
                  )}
                  <BiSkipNext />
                </div>
                <div className="PlaySong__container__onplay__reproductiondata">
                  <img src={props.image} alt={songsOfAlbum?.songs[idx]?.name} />
                  <div>
                    <p className="PlaySong__container__onplay__reproductiondata_txt">
                      {songsOfAlbum?.songs[idx]?.name}
                    </p>
                    <p className="PlaySong__container__onplay__reproductiondata_duration">
                      duracion:
                      {toMinutesAndSeconds(songsOfAlbum?.songs[idx]?.duration_ms)}
                    </p>
                  </div>
                </div>
                <div className="PlaySong__container__onplay__icons">
                  <BsPlayCircleFill />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setRandomId();
                    }}
                  >
                    <FaRandom />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpenListSongs(!isOpenListSongs);
                    }}
                  >
                    {isOpenListSongs ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
                  </button>
                  <a target="_blank" href={songsOfAlbum?.songs[0]?.spotify_url}>
                    <FaExternalLinkAlt />
                  </a>
                  <HiDotsVertical />
                </div>
              </section>
            </div>,
          )}
        </>
      )}
    </PortalWithState>
  );
};
