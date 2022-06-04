import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArtistList } from './page/ArtistList';
import { Album } from './page/Album';
import { Song } from './page/Song';
import { PlaySong } from './page/PlaySong';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArtistList />} />
        <Route path="album" element={<Album />} />
        <Route path="song" element={<Song />} />
        <Route path="playSong" element={<PlaySong />} />
      </Routes>
    </BrowserRouter>
  );
};
