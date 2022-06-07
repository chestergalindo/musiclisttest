import { createContext } from 'react';
import { useQuery } from 'react-query';
import { callApi } from '../utils/callApi';
import { defaultValues } from './defaultValues';

export const ContextMenu = createContext(defaultValues);

export const AppProvider = (props: { children: JSX.Element }) => {
  const { isLoading: isLoadingArtistInformation, data: artistInformation } = useQuery(
    'repoData',
    () => callApi('artists'),
  );

  return (
    <ContextMenu.Provider value={{ isLoadingArtistInformation, artistInformation }}>
      {props.children}
    </ContextMenu.Provider>
  );
};
