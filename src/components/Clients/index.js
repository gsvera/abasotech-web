import CardClient from "./CardClient";

const listClients = [
  {
    img: "/assets/img/clients/logo-huella-digital.svg",
  },
  { img: "/assets/img/clients/logo-blanco-pwevents.png" },
  { img: "/assets/img/clients/logo-marcshuttle-black.png" },
  { img: "/assets/img/clients/logo-clinicadentalquirurjica.png" },
];

export const Clients = () => {
  return (
    <div className="d-flex">
      {listClients.map((item, index) => (
        <CardClient key={index} srcImg={item.img} />
      ))}
    </div>
  );
};

export default Clients;
