import './style.css';

export const Song = () => {
  return (
    <section>
      <div className="Song__reproduction">
        <div className="Song__reproduction__pic">
          <img />
        </div>
        <div className="Song__reproduction__info">
          <h3>Do I Wanna Know?</h3>
          <div>
            <p> Album Do I Wanna Know </p>
            <p> 2 canciones: 7 </p>
          </div>
        </div>
      </div>
      <div className="Song__reproduction__info__secondary">
        <div className="Song__reproduction__main">
          <h3>Canciones</h3>
          <ul className="Song__reproduction__main__section">
            <strong> nombre </strong>
            <p> 2:26 </p>
          </ul>
        </div>
        <div className="Song__reproduction__main">
          <h3>Sugerencias</h3>
          <ul className="Song__reproduction__main__section">
            <strong> nombre </strong>
            <p> 2:26 </p>
          </ul>
        </div>
      </div>
    </section>
  );
};
