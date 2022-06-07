import './style.css';
import { Loader } from '../../components/Loader';
import { IGridAlbums } from './index.d';

export const GridAlbums = (props: IGridAlbums) => {
  return props.isLoading ? (
    <Loader />
  ) : (
    <ul className="GridAlbums">{props.data?.map(props.renderItem)}</ul>
  );
};
