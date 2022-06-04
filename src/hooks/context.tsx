import { createContext } from 'react';
import { useQuery } from 'react-query';
import { callApi } from '../utils/callApi';
import { defaultValues } from './defaultValues';

export const ContextMenu = createContext(defaultValues);

export const AppProvider = (props: any) => {
  const { isLoading, data } = useQuery('repoData', () => callApi('artists'));

  return <ContextMenu.Provider value={{ isLoading, data }}>{props.children}</ContextMenu.Provider>;
};
