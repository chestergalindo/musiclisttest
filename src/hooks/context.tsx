import { createContext } from 'react';
import { useQuery } from 'react-query';
import { callApi } from '../utils/callApi';
import { defaultValues } from './defaultValues';
import { IArtist } from '../components/GridAlbums/index.d';

export const ContextMenu = createContext(defaultValues);

export const AppProvider = (props: { children: JSX.Element }) => {
  const { isLoading: isLoadingArtistInformation, data: artistInformation } = useQuery<
    Array<IArtist>,
    Error
  >('repoData', () => callApi('artists'));

  return (
    <ContextMenu.Provider value={{ isLoadingArtistInformation, artistInformation }}>
      {props.children}
    </ContextMenu.Provider>
  );
};
