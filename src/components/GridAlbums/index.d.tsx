export interface IGridAlbums {
  isLoading: boolean;
  data: Array<iArtist>;
  renderItem: (item: any) => JSX.Element;
}

export interface IArtist {
  created_at: string;
  genres: Array<string>;
  id: number;
  image: string;
  name: string;
  popularity: string;
  spotify_id: string;
  spotify_url: string;
  updated_at: string;
}
