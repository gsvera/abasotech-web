import "./index.scss";

export const CardClient = ({ srcImg }) => {
  return (
    <div className="card-client">
      <img src={srcImg} className="img-client" />
    </div>
  );
};

export default CardClient;
