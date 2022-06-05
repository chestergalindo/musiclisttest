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

export const PlaySong = (props: any) => {
  const { data } = useQuery('songs', () => callApi(`albums/${props.id}/songs`));

  const albums = keyBy(data, 'album');
  const songsOfAlbum = albums[props.id];

  console.log(songsOfAlbum?.songs[0]);

  const ToMinutesAndSeconds = (duration: any) => {
    const minutes = Math.floor(duration / 60_000);
    const seconds = ((duration % 60_000) / 1000).toFixed(0);
    return `${minutes}:${seconds}`;
  };

  return (
    <PortalWithState closeOnOutsideClick closeOnEsc>
      {({ openPortal, isOpen, portal }) => (
        <>
          <button onClick={openPortal} className="PlaySong__song__button">
            <FaPlay className="PlaySong__song__button--icon" />
          </button>
          {portal(
            <div className="PlaySong__container">
              <section className="PlaySong__container__onplay">
                <div className="PlaySong__container__onplay__reproduction">
                  <BiSkipPrevious />
                  {songsOfAlbum?.songs[0]?.preview_url && (
                    <audio controls>
                      <source src={songsOfAlbum?.songs[0]?.preview_url} type="audio/mpeg" />
                    </audio>
                  )}
                  <BiSkipNext />
                </div>
                <div className="PlaySong__container__onplay__reproductiondata">
                  <img src={props.image} alt={songsOfAlbum?.songs[0]?.name} />
                  <div>
                    <p className="PlaySong__container__onplay__reproductiondata_txt">
                      {songsOfAlbum?.songs[0]?.name}
                    </p>
                    <p className="PlaySong__container__onplay__reproductiondata_duration">
                      duracion:
                      {ToMinutesAndSeconds(songsOfAlbum?.songs[0]?.duration_ms)}
                    </p>
                  </div>
                </div>
                <div className="PlaySong__container__onplay__icons">
                  <BsPlayCircleFill />
                  <FaRandom />
                  {/* <TiArrowSortedDown /> */}
                  <TiArrowSortedUp />
                  <FaExternalLinkAlt />
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
