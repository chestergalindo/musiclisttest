import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArtistList } from './page/ArtistList';
import { ArtistSongList } from './page/ArtistSongList';
import { RandomSong } from './page/RandomSong';
import { Header } from './components/Header';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ArtistList />} />
        <Route path="artist">
          <Route path=":idArtist" element={<ArtistSongList />} />
        </Route>
        <Route path="randomsong" element={<RandomSong />} />
      </Routes>
    </BrowserRouter>
  );
};
