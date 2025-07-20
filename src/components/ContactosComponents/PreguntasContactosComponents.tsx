import { useState } from 'react';

interface FAQ {
    question: string;
    answer: string;
}

export default function PreguntasContactosComponents() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs: FAQ[] = [
        {
            question: '¿Cuáles son los horarios de la escuela?',
            answer: 'Los horarios de la escuela son de lunes a viernes, de 8:00 AM a 4:00 PM.'
        },
        {
            question: '¿Cuál es el costo de la matrícula?',
            answer: 'El costo de la matrícula varía dependiendo del grado, pero puedes obtener información detallada al contactarnos.'
        },
        {
            question: '¿La escuela tiene transporte?',
            answer: 'Sí, ofrecemos servicio de transporte escolar en varias rutas de la ciudad.'
        },
        {
            question: '¿Cuáles son los requisitos para inscribir a mi hijo?',
            answer: 'Necesitarás el certificado de nacimiento, carnet de vacunas actualizado y el pago de la matrícula.'
        },
        {
            question: '¿Se ofrecen actividades extracurriculares?',
            answer: 'Sí, ofrecemos deportes, arte, música, y clases de inglés.'
        }
    ];

    const toggleAnswer = (index: number): void => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div style={{ marginTop: '2rem' }}>
            <div className="faq">
                {faqs.map((item, index) => (
                    <div key={index} style={{ marginBottom: '1rem' }}>
                        <button
                            onClick={() => toggleAnswer(index)}
                            style={{
                                backgroundColor: '#fff',
                                color: '#072c56',
                                padding: '0.8rem',
                                width: '100%',
                                textAlign: 'left',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                border: 'none',
                                transition: 'background-color 0.3s ease',
                            }}
                        >
                            {item.question}
                        </button>
                        {activeIndex === index && (
                            <div
                                style={{
                                    padding: '1rem',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '8px',
                                    marginTop: '0.5rem',
                                    transition: 'max-height 0.5s ease-out',
                                    maxHeight: '200px',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                }}
                            >
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
