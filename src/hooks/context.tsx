import { createContext } from 'react';
import { useQuery } from 'react-query';
import { callApi } from '../utils/callApi';
import { defaultValues } from './defaultValues';
import { useCommonData } from './useCommonData';

export const ContextMenu = createContext(defaultValues);

export const AppProvider = (props: any) => {
  const { isLoading, data } = useQuery('repoData', () => callApi('artists'));
  const { image, setImage, rating, setRating, name, setName } = useCommonData();

  return (
    <ContextMenu.Provider
      value={{ isLoading, data, image, setImage, rating, setRating, name, setName }}
    >
      {props.children}
    </ContextMenu.Provider>
  );
};
