import './style.css';

export const Image = (props: any) => {
  return (
    <div className="imageContainer">
      {props.name ? (
        <>
          <div
            style={{
              borderRadius: props.isCircle ? '50%' : '',
              backgroundImage: `url(${props.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: props.isCircle ? '#000' : '',
            }}
            className="imageContainer-image"
          />
          <p className="imageContainer-text">{props.name}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
