import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Artist } from './page/Artist';
import { Album } from './page/Album';
import { Songs } from './page/Song';
import { PlaySong } from './page/PlaySong';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Artist />} />
        <Route path="album" element={<Album />} />
        <Route path="song" element={<Songs />} />
        <Route path="playSong" element={<PlaySong />} />
      </Routes>
    </BrowserRouter>
  );
};
