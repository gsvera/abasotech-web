import "./index.scss";

export const CardService = ({ imgSrc, title, description, linkSrc }) => {
  return (
    <div className="card-service">
      <div className="card-header">
        <img src={imgSrc} className="img-card-service" />
      </div>
      <div className="card-body">
        <div>
          <h3 className="card-title">{title}</h3>
        </div>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <a href={linkSrc} className="t-c-gradient">
          Ver más
        </a>
      </div>
    </div>
  );
};

export default CardService;
