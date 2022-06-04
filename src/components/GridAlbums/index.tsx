import './style.css';

export const GridAlbums = (props: any) => {
  return <ul className="GridAlbums">{props.data?.map(props.renderItem)}</ul>;
};
