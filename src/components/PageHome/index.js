"use client";

import { BsCheck2Circle } from "react-icons/bs";
import Button from "../Button";
import CardService from "../CardService";
import Accordion from "../Accordion";
import Clients from "../Clients";
import { useEffect, useState } from "react";

const services = [
  {
    imgSrc: "/assets/img/desarrollo-software.jpg",
    title: "Desarrollo de software a la medida",
    description:
      "Diseñamos y creamos programas informáticos para satisfacer las necesidades de una empresa o negocio.",
    linkSrc: "/desarrollo-de-software-a-la-medida",
  },
  {
    imgSrc: "/assets/img/desarrollo-mobile.jpg",
    title: "Desarrollo movil para negocios",
    description:
      "Entendemos la importancia del acceso rápido a la información y por eso creamos software de negocios para dispositivos móviles.",
    linkSrc: "/desarrollo-movile-para-negocios",
  },
  {
    imgSrc: "/assets/img/desarrollo-web.jpg",
    title: "Desarrollo de paginas web",
    description:
      "Creamos y mantenemos tus sitios web actualizados en diferentes formatos, para que tu marca esté a la vista de tus clientes.",
    linkSrc: "/desarrollo-de-paginas-web",
  },
  {
    imgSrc: "/assets/img/desarrollo-api.jpg",
    title: "Desarrollo de apis",
    description:
      "Si requieres integraciones de servicios en tus aplicaciones, te ayudamos a crear interfaces para la conexión entre sistemas informáticos.",
    linkSrc: "/desarrollo-de-apis",
  },
  {
    imgSrc: "/assets/img/mantenimiento-de-apps.jpg",
    title: "Mantenimiento de aplicaciones",
    description:
      "Actualizamos, modificamos y/o cambiamos tu software para que siga funcionando correctamente de acuerdo a tus procesos de negocio.",
    linkSrc: "/mantenimiento-de-aplicaciones",
  },
];

const faqs = [
  {
    key: 1,
    title: "1.- ¿Qué es y para qué sirve el desarrollo de software?",
    text: "El desarrollo de software es el proceso de diseñar, crear, implementar y mantener aplicaciones o sistemas informáticos. Su propósito principal es resolver problemas, optimizar procesos y satisfacer las necesidades específicas de empresas o usuarios, proporcionando herramientas personalizadas y eficientes.",
  },
  {
    key: 2,
    title: "2.- ¿Cuál es el ciclo de vida del desarrollo de software?",
    text: `El ciclo de vida del desarrollo de software se compone de varias etapas fundamentales:
        <br /><br />
        <span class="t-bold">Recolección de requisitos:</span> Identificación de las necesidades del cliente.<br />
        <span class="t-bold">Análisis:</span> Definición de funcionalidades y objetivos del software.<br />
        <span class="t-bold">Diseño:</span> Creación de diagramas y prototipos del sistema.<br />
        <span class="t-bold">Desarrollo:</span> Programación y construcción del software.<br />
        <span class="t-bold">Pruebas:</span> Verificación para asegurar el correcto funcionamiento.<br />
        <span class="t-bold">Implementación:</span> Despliegue del software en el entorno real.<br />
        <span class="t-bold">Mantenimiento:</span> Actualización y soporte técnico continuo.
      `,
  },
  {
    key: 3,
    title:
      "3.- ¿Se recomienda el desarrollo de software para cualquier tipo de negocio y/o empresa?",
    text: "Sí, el desarrollo de software puede adaptarse a empresas de cualquier tamaño o sector. Desde pequeñas empresas hasta grandes corporaciones, el software personalizado permite automatizar tareas, mejorar la eficiencia y brindar soluciones específicas a problemas particulares.",
  },
  {
    key: 4,
    title:
      "4.- ¿Cuáles son las ventajas del software a la medida para mi negocio y/o empresa?",
    text: `Algunas de las principales ventajas incluyen:
        <br /><br />
        <span class="t-bold">Adaptación total:</span> Soluciones específicas para las necesidades de tu empresa.<br />
        <span class="t-bold">Escalabilidad:</span> Crecimiento junto con tu negocio.<br />
        <span class="t-bold">Integración:</span> Conexión con otros sistemas y aplicaciones existentes.<br />
        <span class="t-bold">Mayor eficiencia:</span> Automatización de procesos repetitivos y reducción de errores.<br />
        <span class="t-bold">Competitividad:</span> Diferenciación frente a tus competidores.
    `,
  },
  {
    key: 5,
    title:
      "5.- ¿Cuánto tiempo conlleva desarrollar una aplicación a la medida para mi negocio y/o empresa?",
    text: `El tiempo depende de la complejidad y el alcance del proyecto. Por ejemplo:
        <br /><br />
        <span class="t-bold">Aplicaciones simples:</span> De 1 a 3 meses.<br />
        <span class="t-bold">Sistemas más avanzados:</span> De 4 a 12 meses.<br />
        Un análisis inicial es fundamental para estimar plazos con mayor precisión.
      `,
  },
  {
    key: 6,
    title: "6.- ¿Cuál es el costo de desarrollo de software a la medida?",
    text: `El costo varía según factores como:
        <br /><br />
        La complejidad del sistema.<br />
        Las tecnologías utilizadas.<br />
        El tiempo de desarrollo requerido.<br />
        Es recomendable realizar una consulta para obtener un presupuesto personalizado, acorde a tus necesidades.
      `,
  },
  {
    key: 7,
    title:
      "7.- ¿Se ofrecen servicios de mantenimiento y/o soporte después de finalizar el desarrollo de una aplicación?",
    text: "Sí, el mantenimiento y soporte son esenciales para garantizar que el software funcione correctamente con el tiempo. Esto incluye actualizaciones, correcciones de errores y soporte técnico para resolver cualquier duda o problema.",
  },
  {
    key: 8,
    title:
      "8.- ¿Se puede integrar el nuevo software con las aplicaciones y sistemas que ya utilizamos en nuestra empresa?",
    text: "Sí, el desarrollo de software personalizado permite crear soluciones que se integren perfectamente con tus sistemas existentes. Esto asegura una transición fluida y maximiza la utilidad del nuevo software en tu empresa.",
  },
];

export const PageHome = () => {
  const [isClient, setIsClient] = useState(false);
  const [openAnswer, setOpenAnswer] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleClick = (id) => {
    setOpenAnswer(id);
  };

  const handleOnclickContact = () => {
    console.log("diste click");
  };
  return (
    <div className="home">
      <div className="section-banner">
        <div className="bg-home">
          <div className="content-header">
            <div className="content-title">
              <h1 className="t-center t-c-white t-size-b mb-3">
                Agencia de desarrollo de software en{" "}
                <span className="t-c-gradient">México</span>
              </h1>
              <div>
                <p className="t-c-white t-size-s mb-3 t-letter-space t-line-height-s">
                  Nos enfocamos en cada etapa del desarrollo de software para
                  entregar un producto de calidad.
                </p>
              </div>
              <Button
                text={"Contactanos"}
                handleClick={handleOnclickContact}
                nameClass={"btn-yellow"}
              />
            </div>
            <div style={{ marginTop: "50px", textAlign: "center" }}>
              <img
                src="/assets/img/dashboard-interface-user-panel.png"
                className="img-home"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="t-center width-5 mx-auto">
          <div>
            <h2 className="t-c-white t-size-l">
              Servicios de desarrollo de software{" "}
              <span className="t-c-gradient">Abasotech</span>
            </h2>
          </div>
          <p className="t-c-secondary t-size-xs t-line-height-s">
            Más que sólo desarrollar una aplicación, ofrecemos y recomendamos
            mejoras de sus procesos e ideas, con la finalidad de mejorar la
            calidad del servicio y el producto final.
          </p>
        </div>
        <div className="content-services">
          {services?.map((item, index) => (
            <CardService
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              linkSrc={item.linkSrc}
            />
          ))}
        </div>
      </div>
      <div className="section two-columns">
        <div className="t-center w-8">
          <img
            src="/assets/img/planing-software.jpg"
            className="img-two-columns"
          />
        </div>
        <div className="w-8 d-child-center pr-our-work">
          <div>
            <h2 className="t-c-white t-size-l t-center-mobile">
              Nuestro proceso de trabajo
            </h2>
            <div style={{ marginTop: "30px" }}>
              <p className="text-process t-size-xs">
                <BsCheck2Circle className="icon-check" />
                {"   "} Análisis de requerimientos y procesos: Levantamiento de
                informacion sobre flujos del negocio.
              </p>
              <p className="text-process t-size-xs">
                <BsCheck2Circle className="icon-check" />
                {"   "} Diseño de solución: Diseño de casos de uso y
                automatización de flujos.
              </p>
              <p className="text-process t-size-xs">
                <BsCheck2Circle className="icon-check" />
                {"   "} Desarrollo de proyecto: Construiccion del proyecto.
              </p>
              <p className="text-process t-size-xs">
                <BsCheck2Circle className="icon-check" />
                {"   "} Despliegue de proyecto: Entrega de proyecto, listo para
                producción.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section d-flex-res">
        <div className="p-3 d-child-center d-40">
          <div className="t-c-white t-center">
            <h3 className="t-size-l mb-1">¿Tienes preguntas?</h3>
            <p className="mb-1 t-c-secondary t-size-xs">
              No dudes y contactanos para una asesoria personalizada, con gusto
              te atenderemos.
            </p>
            <Button
              nameClass={"btn-transparent"}
              text={"Contactanos"}
              handleClick={handleOnclickContact}
            />
          </div>
        </div>
        <div className="p-3 d-70">
          {faqs.map((item) => (
            <Accordion
              key={item.key}
              id={item.key}
              title={item.title}
              text={item.text}
              showAnwser={openAnswer}
              handleShow={handleClick}
            />
          ))}
        </div>
      </div>
      <div className="section">
        <Clients />
      </div>
    </div>
  );
};

export default PageHome;
