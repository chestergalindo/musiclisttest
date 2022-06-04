import { Link } from 'react-router-dom';
import './style.css';

export const Image = (props: any) => {
  return (
    <div className="imageContainer">
      {props.name ? (
        <Link to={`/artist/${props.id}`}>
          <div
            style={{
              borderRadius: props.isCircle ? '50%' : '',
              backgroundImage: `url(${props.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: props.isCircle ? '#000' : '',
            }}
            className="imageContainer__image"
          />
          <p className="imageContainer__text">{props.name}</p>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};
