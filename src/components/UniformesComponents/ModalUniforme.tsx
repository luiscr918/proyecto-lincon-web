import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import "../../styles/cardExtracuStyles.css";
import "../../styles/ModalCardsUniformes/CardsUniformes.css";
import "../../styles/ModalCardsUniformes/ModalUniformes.css";

interface CardInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  modalContent: ReactNode;
}

const cards: CardInfo[] = [
  {
    id: 1,
    title: "Uniforme de Parada",
    description:
      "Aqui encontraras la informacion de nuestro uniforme de parada",
    image: "https://i.postimg.cc/CMsScGTH/Parada.png",
    modalContent: (
      <div className="contenedor-tar">
        <div className="tar">
          <div className="tar-img">
            <img src="https://i.postimg.cc/3JL0vz3P/Whats-App-Image-2025-07-27-at-12-19-06-d2005b1c-removebg-preview.png" />
          </div>
          <div className="contentbox">
            <div className="content-tar">
              <h3>Uniforme de Parada o Diario</h3>
              <p>
                Este uniforme, utilizado por los personajes a la izquierda de la
                imagen, está diseñado con un estilo elegante y sobrio. El niño
                viste un abrigo largo a cuadros en tonos grises con detalles
                blancos y camisa clara debajo, mientras que la niña lleva un
                suéter negro combinado con una falda a cuadros y un collar
                llamativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Nuestro Alumnado",
    description: "Aqui encontraras una foto general",
    image: "https://i.postimg.cc/cCmtk7qm/educacionbasica.jpg",
    modalContent: (
      <div>
        <div className="tar">
          <div className="tar-img">
            <img src="https://i.postimg.cc/cCmtk7qm/educacionbasica.jpg" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Nuestro Uniforme de Educacion Fisica",
    description:
      "Aqui encontraras la informacion de nuestro uniforme de Educación Fisica",
    image: "https://i.postimg.cc/Y9NxkWK4/Educaion.png",
    modalContent: (
      <div className="contenedor-tar">
        <div className="tar">
          <div className="tar-img">
            <img src="https://i.postimg.cc/YCG0m9nW/Whats-App-Image-2025-07-27-at-12-19-07-afeca29b-removebg-preview.png" />
          </div>
          <div className="contentbox">
            <div className="content-tar">
              <h3>Uniforme de Educacion Fisica</h3>
              <p>
                En la parte derecha de la imagen, los personajes lucen un
                uniforme deportivo más cómodo y funcional. El niño viste una
                camiseta blanca con detalles azul oscuro y pantalones deportivos
                del mismo tono, mientras que la niña lleva una camiseta blanca
                holgada y un pantalón deportivo con franjas.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const ModalUniforme = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      const timeout = setTimeout(() => {
        setIsMounted(false);
        setModalContent(null);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isModalOpen]);

  const openModal = (card: CardInfo) => {
    setModalContent(card.modalContent);
    setModalTitle(`${card.title}`);
    setIsMounted(true);

    setTimeout(() => {
      setIsModalOpen(true);
      setAnimateModal(true);
    }, 10);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAnimateModal(false);
  };

  return (
    <>
      <div className="cont">
        <h2 className="text-3xl font-bold text-center mb-4 text-cyan-300">
          Galería de Uniformes
        </h2>
        <p className="text-center text-white mb-10 max-w-2xl mx-auto">
          Observa con detalle los uniformes que representan nuestra identidad
          educativa. Cada uno está diseñado para reflejar nuestros valores y
          funcionalidad.
        </p>
        <div className="card-cont grid gap-8 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.id} className="card-article">
              <img src={card.image} alt={card.title} className="card-img" />
              <div className="card-data">
                <h2 className="card-title">{card.title}</h2>
                <span className="card-description">{card.description}</span>
                <div className="card-button">
                  <button className="botonn" onClick={() => openModal(card)}>
                    Leer más
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {isMounted && (
        <div className={`modal-overlay ${animateModal ? "active" : ""}`}>
          <div className="modal-content">
            <h2>{modalTitle}</h2>
            {modalContent}
            <button onClick={closeModal} className="close-button">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalUniforme;
