import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArtistList } from './page/ArtistList';
import { ArtistSongList } from './page/ArtistSongList';
import { Song } from './page/Song';
import { PlaySong } from './page/PlaySong';
import { Header } from './components/Header';

export const RouteList = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArtistList />} />
          <Route path="artist">
            <Route path=":idAlbum" element={<ArtistSongList />} />
          </Route>
          <Route path="song" element={<Song />} />
          <Route path="playSong" element={<PlaySong />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
