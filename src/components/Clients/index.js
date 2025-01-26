import CardClient from "./CardClient";
import "./index.scss";

const listClients = [
  {
    img: "/assets/img/clients/logo-huella-digital.svg",
    filterStyle: "img-filter-gray",
    site: "https://huella-digital.mx",
  },
  {
    img: "/assets/img/clients/logo-pwevents.png",
    site: "https://pweventscancun.com",
  },
  {
    img: "/assets/img/clients/logo-marcshuttle-black.png",
    filterStyle: "img-filter-invert",
    site: "https://marcshuttlecancun.com",
  },
  {
    img: "/assets/img/clients/logo-clinicadentalquirurjica.png",
    filterStyle: "img-filter-gray",
    site: "https://clinicadentalquirurgica.com",
  },
];

export const Clients = () => {
  return (
    <div className="clients">
      <h3 className="t-c-white t-size-l mb-3">Nuestros clientes</h3>
      <div className="content-clients">
        {listClients.map((item, index) => (
          <CardClient key={index} dataClient={item} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
