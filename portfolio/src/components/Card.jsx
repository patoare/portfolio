import '../App.css'; // para estilos externos (opcional)

const Card = ({ title, text, updated, imageTop, imageBottom, style }) => {
  return (
    <div className="custom-card" style={style}>
      {imageTop && <img src={imageTop} className="card-img-top" alt={title} />}

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text"><small className="text-muted">{updated}</small></p>
      </div>

      {imageBottom && <img src={imageBottom} className="card-img-bottom" alt={title} />}
    </div>
  );
};

export default Card;