import "./index.scss";

export const CardClient = ({ dataClient }) => {
  const { img, filterStyle, site } = dataClient || {};
  return (
    <div className="card-client">
      <a href={site} rel="nofollow" target="_blank">
        <img src={img} className={`img-client ${filterStyle}`} />
      </a>
    </div>
  );
};

export default CardClient;
