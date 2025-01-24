"use client";
import Accordion from "@/components/Accordion";
// import Image from "next/image";
// import styles from "./page.module.css";
// import { GiSwordsPower } from "react-icons/gi";
import { Button } from "@/components/Button";
import CardService from "@/components/CardService";
import Clients from "@/components/Clients";
import { BsCheck2Circle } from "react-icons/bs";

const services = [
  {
    imgSrc: "/assets/img/desarrollo-software.jpg",
    title: "Desarrollo de software a la medida",
    description:
      "Diseñamos y creamos programas informáticos para satisfacer las necesidades de una empresa o negocio",
    linkSrc: "/desarrollo-de-software-a-la-medida",
  },
  {
    imgSrc: "/assets/img/desarrollo-mobile.jpg",
    title: "Desarrollo movil para negocios",
    description: "Creamos software de negocios para dispositivos móviles",
    linkSrc: "/desarrollo-movile-para-negocios",
  },
  {
    imgSrc: "/assets/img/desarrollo-web.jpg",
    title: "Desarrollo de paginas web",
    description:
      "Creamos y mantenos sitios web, para que tu marca este a la vista de tus clientes",
    linkSrc: "/desarrollo-de-paginas-web",
  },
  {
    imgSrc: "/assets/img/desarrollo-api.jpg",
    title: "Desarrollo de apis",
    description: "Creamos interfaces para la conexion con otros programas",
    linkSrc: "/desarrollo-de-apis",
  },
  {
    imgSrc: "/assets/img/mantenimiento-de-apps.jpg",
    title: "Mantenimiento de aplicaciones",
    description:
      "Actualizamos, modificamos y/o cambiamos tu software para que siga funcionando correctamente",
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
      Recolección de requisitos: Identificación de las necesidades del cliente.
      Análisis: Definición de funcionalidades y objetivos del software.
      Diseño: Creación de diagramas y prototipos del sistema.
      Desarrollo: Programación y construcción del software.
      Pruebas: Verificación para asegurar el correcto funcionamiento.
      Implementación: Despliegue del software en el entorno real.
      Mantenimiento: Actualización y soporte técnico continuo.
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
      Adaptación total: Soluciones específicas para las necesidades de tu empresa.
      Escalabilidad: Crecimiento junto con tu negocio.
      Integración: Conexión con otros sistemas y aplicaciones existentes.
      Mayor eficiencia: Automatización de procesos repetitivos y reducción de errores.
      Competitividad: Diferenciación frente a tus competidores.
  `,
  },
  {
    key: 5,
    title:
      "5.- ¿Cuánto tiempo conlleva desarrollar una aplicación a la medida para mi negocio y/o empresa?",
    text: `El tiempo depende de la complejidad y el alcance del proyecto. Por ejemplo:
      <br /><br />
      Aplicaciones simples: De 1 a 3 meses.
      Sistemas más avanzados: De 4 a 12 meses.
      Un análisis inicial es fundamental para estimar plazos con mayor precisión.
    `,
  },
  {
    key: 6,
    title: "6.- ¿Cuál es el costo de desarrollo de software a la medida?",
    text: `El costo varía según factores como:
      <br /><br />
      La complejidad del sistema.
      Las tecnologías utilizadas.
      El tiempo de desarrollo requerido.
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

export default function Home() {
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
              <img src="/assets/img/lap-sistema.png" />
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
        <div className="pl-3 pt-3 pb-3 w-8">
          <h3 className="t-c-white t-size-m">Nuestro proceso de trabajo</h3>
          <div style={{ marginTop: "50px" }}>
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
      <div className="section d-flex">
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
            <Accordion key={item.key} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
      <div className="section">
        <Clients />
      </div>
    </div>
  );
}
