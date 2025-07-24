import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import "../../styles/cardExtracuStyles.css";
import "../../styles/modalCardExtracurri.css";
import "../../styles/cardModalInfo.css";

interface CardInfo {
    id: number;
    title: string;
    emoji: string;
    description: string;
    image: string;
    modalContent: ReactNode;
}

const cards: CardInfo[] = [
    {
        id: 1,
        title: "Convivencia",
        emoji: "👥",
        description: "Promueve la armonía entre los miembros de la comunidad educativa.",
        image: "https://www.advantour.com/img/japan/images/index.jpg",
        modalContent: (
            <div className="contenedor-tar">
                <div className="tar">
                    <div className="tar-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcflDSMHBKSLMU4s6Q3VZgD8nuP3ZDM2VsA&s" />
                    </div>
                    <div className="contentbox">
                        <div className="content-tar">
                            <h3>¿Qué es?</h3>
                            <p>La convivencia es vivir en armonía con otras personas, respetando sus ideas y comportándose con tolerancia. Es importante para tener relaciones pacíficas en casa, la escuela y la comunidad.</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        title: "Eventos de saberes",
        emoji: "🧠",
        description: "Participación en ferias y concursos que desarrollan habilidades.",
        image: "https://www.advantour.com/img/japan/images/index.jpg",
        modalContent: (
            <div className="contenedor-tar">

                <div className="tar">
                    <div className="tar-img">
                        <img src="https://img.freepik.com/vector-gratis/ilustracion-paisaje-japon_1284-32852.jpg?semt=ais_hybrid&w=740" />
                    </div>
                    <div className="contentbox">
                        <div className="content-tar">
                            <h3>¿Qué es?</h3>
                            <p>El evento de saberes es un espacio donde personas comparten conocimientos, experiencias y aprendizajes. Se realiza para dialogar, aprender juntos y valorar distintas formas de pensar, ya sea en la escuela, la comunidad o la cultura.</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 3,
        title: "Programa de Participación Estudiantil",
        emoji: "🏫",
        description: "Fomenta innovación y liderazgo entre estudiantes.",
        image: "https://www.advantour.com/img/japan/images/index.jpg",
        modalContent: (
            <div className="contenedor-tar">
                <div className="tar">
                    <div className="tar-img">
                        <img src="https://img.freepik.com/vector-gratis/ilustracion-paisaje-japon_1284-32852.jpg?semt=ais_hybrid&w=740" />
                    </div>
                    <div className="contentbox">
                        <div className="content-tar">
                            <h3>¿Qué es?</h3>
                            <p>El Programa de Participación Estudiantil es un conjunto de actividades y proyectos que buscan desarrollar valores, habilidades y compromiso social a través del trabajo en beneficio de la comunidad.</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

const CardComponent = () => {
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
        setModalTitle(`${card.title} ${card.emoji}`);
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
                <div className="card-cont">
                    {cards.map((card) => (
                        <article key={card.id} className="card-article">
                            <img src={card.image} alt={card.title} className="card-img" />
                            <div className="card-data">
                                <h2 className="card-title">
                                    {card.title} {card.emoji}
                                </h2>
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

export default CardComponent;
