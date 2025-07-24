// src/pages/AdminDashboard.tsx

import { useState, useEffect, useCallback, useRef } from 'react'; // Asegúrate de importar useRef
import AdminLayout from '../components/ComponenteAdministracion';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const formatDateToInput = (date: Date | null): string => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const parseDateFromInput = (dateString: string): Date | null => {
  if (!dateString) return null;
  return new Date(dateString + 'T00:00:00');
};

const AdminDashboard = () => {
  const [fechaInicioInscripciones, setFechaInicioInscripciones] = useState<string>('');
  const [fechaFinInscripciones, setFechaFinInscripciones] = useState<string>('');
  const [fechaInicioClases, setFechaInicioClases] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' | '' }>({ text: '', type: '' });

  const [showTooltipInicioIns, setShowTooltipInicioIns] = useState<boolean>(false);
  const [showTooltipFinIns, setShowTooltipFinIns] = useState<boolean>(false);
  const [showTooltipInicioClases, setShowTooltipInicioClases] = useState<boolean>(false);

  // Referencias para cada tooltip
  const tooltipInicioInsRef = useRef<HTMLDivElement>(null);
  const tooltipFinInsRef = useRef<HTMLDivElement>(null);
  const tooltipInicioClasesRef = useRef<HTMLDivElement>(null);

  // Referencias para cada botón de información (para evitar que el global handler los cierre)
  const btnInicioInsRef = useRef<HTMLButtonElement>(null);
  const btnFinInsRef = useRef<HTMLButtonElement>(null);
  const btnInicioClasesRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    const fetchDates = async () => {
      setLoading(true);
      setMessage({ text: '', type: '' });
      try {
        setTimeout(() => {
          setFechaInicioInscripciones(formatDateToInput(new Date('2025-03-01')));
          setFechaFinInscripciones(formatDateToInput(new Date('2025-03-31')));
          setFechaInicioClases(formatDateToInput(new Date('2025-04-15')));
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching dates:", error);
        setMessage({ text: 'Error al cargar las fechas.', type: 'error' });
        setLoading(false);
      }
    };

    fetchDates();
  }, []);

  // useEffect para manejar clics fuera de los tooltips
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Determinar si el clic fue en alguno de los botones de información
      const clickedOnBtnInicioIns = btnInicioInsRef.current && btnInicioInsRef.current.contains(event.target as Node);
      const clickedOnBtnFinIns = btnFinInsRef.current && btnFinInsRef.current.contains(event.target as Node);
      const clickedOnBtnInicioClases = btnInicioClasesRef.current && btnInicioClasesRef.current.contains(event.target as Node);

      // Si el clic fue en uno de los botones de información, no hacemos nada aquí.
      // La lógica de toggle y cierre de otros tooltips se maneja en el onClick de cada botón.
      if (clickedOnBtnInicioIns || clickedOnBtnFinIns || clickedOnBtnInicioClases) {
        return;
      }

      // Si el clic no fue en un botón de información, verificar si fue fuera de cualquier tooltip abierto
      let clickedInsideAnyTooltip = false;
      if (showTooltipInicioIns && tooltipInicioInsRef.current && tooltipInicioInsRef.current.contains(event.target as Node)) {
        clickedInsideAnyTooltip = true;
      }
      if (showTooltipFinIns && tooltipFinInsRef.current && tooltipFinInsRef.current.contains(event.target as Node)) {
        clickedInsideAnyTooltip = true;
      }
      if (showTooltipInicioClases && tooltipInicioClasesRef.current && tooltipInicioClasesRef.current.contains(event.target as Node)) {
        clickedInsideAnyTooltip = true;
      }

      // Si el clic no fue dentro de ningún tooltip abierto, cerrar todos los tooltips
      if (!clickedInsideAnyTooltip) {
        setShowTooltipInicioIns(false);
        setShowTooltipFinIns(false);
        setShowTooltipInicioClases(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltipInicioIns, showTooltipFinIns, showTooltipInicioClases]); // Dependencias para re-ejecutar si un tooltip cambia de estado

  const handleSaveDates = async () => {
    setSaving(true);
    setMessage({ text: '', type: '' });
    try {
      if (!fechaInicioInscripciones || !fechaFinInscripciones || !fechaInicioClases) {
        setMessage({ text: 'Por favor, complete todas las fechas.', type: 'error' });
        setSaving(false);
        return;
      }

      const inicioIns = parseDateFromInput(fechaInicioInscripciones);
      const finIns = parseDateFromInput(fechaFinInscripciones);
      const inicioClases = parseDateFromInput(fechaInicioClases);

      if (!inicioIns || !finIns || !inicioClases) {
        setMessage({ text: 'Formato de fecha inválido.', type: 'error' });
        setSaving(false);
        return;
      }

      if (inicioIns > finIns) {
        setMessage({ text: 'La fecha de inicio de inscripciones no puede ser posterior a la de fin.', type: 'error' });
        setSaving(false);
        return;
      }

      if (finIns > inicioClases) {
        setMessage({ text: 'La fecha de fin de inscripciones no puede ser posterior a la de inicio de clases.', type: 'error' });
        setSaving(false);
        return;
      }

      setTimeout(() => {
        setMessage({ text: 'Fechas actualizadas exitosamente!', type: 'success' });
        setSaving(false);
      }, 1500);

    } catch (error) {
      console.error("Error saving dates:", error);
      setMessage({ text: 'Error al guardar las fechas.', type: 'error' });
      setSaving(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <AdminLayout>
      <div className="relative flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-indigo-950 to-blue-800 text-white min-h-[calc(100vh-80px)] overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 z-0 opacity-10 bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 6V5zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md border border-blue-300 relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl font-extrabold text-gray-800 mb-2 text-center"
            variants={itemVariants}
          >
            Administrar Fechas Clave
          </motion.h1>

          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              <p className="ml-4 text-gray-700">Cargando fechas...</p>
            </div>
          ) : (
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="fechaInicioInscripciones" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <span>Fecha de Inicio de Inscripciones:</span>
                  <button
                    ref={btnInicioInsRef} // Añadir referencia al botón
                    type="button"
                    className="ml-2 p-1 rounded-full bg-white text-red-600 border border-red-600 hover:bg-red-50 hover:border-red-700 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 flex-shrink-0"
                    onClick={() => {
                      setShowTooltipFinIns(false); // Cerrar otros tooltips
                      setShowTooltipInicioClases(false); // Cerrar otros tooltips
                      setShowTooltipInicioIns(!showTooltipInicioIns); // Alternar este tooltip
                    }}
                    aria-expanded={showTooltipInicioIns}
                    aria-controls="tooltip-inicio-ins"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.67.69-1.07 1.3-1.07 2.18h-2v-.5c0-.98.4-1.87 1.07-2.54l1.4-1.4c.27-.27.43-.65.43-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H8c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .71-.29 1.3-.73 1.84z"/>
                    </svg>
                  </button>
                </label>
                <input
                  type="date"
                  id="fechaInicioInscripciones"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                  value={fechaInicioInscripciones}
                  onChange={(e) => {
                    setShowTooltipInicioIns(false);
                    setFechaInicioInscripciones(e.target.value);
                  }}
                />
                {showTooltipInicioIns && (
                  <motion.div
                    ref={tooltipInicioInsRef} // Referencia para el tooltip
                    id="tooltip-inicio-ins"
                    className="absolute z-20 mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md shadow-lg text-sm text-blue-800 left-0 right-0"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Aquí puede **modificar la fecha en que se abren las inscripciones** para un nuevo ciclo escolar.
                  </motion.div>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="fechaFinInscripciones" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <span>Fecha de Fin de Inscripciones:</span>
                  <button
                    ref={btnFinInsRef} // Añadir referencia al botón
                    type="button"
                    className="ml-2 p-1 rounded-full bg-white text-red-600 border border-red-600 hover:bg-red-50 hover:border-red-700 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 flex-shrink-0"
                    onClick={() => {
                      setShowTooltipInicioIns(false); // Cerrar otros tooltips
                      setShowTooltipInicioClases(false); // Cerrar otros tooltips
                      setShowTooltipFinIns(!showTooltipFinIns); // Alternar este tooltip
                    }}
                    aria-expanded={showTooltipFinIns}
                    aria-controls="tooltip-fin-ins"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.67.69-1.07 1.3-1.07 2.18h-2v-.5c0-.98.4-1.87 1.07-2.54l1.4-1.4c.27-.27.43-.65.43-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H8c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .71-.29 1.3-.73 1.84z"/>
                    </svg>
                  </button>
                </label>
                <input
                  type="date"
                  id="fechaFinInscripciones"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                  value={fechaFinInscripciones}
                  onChange={(e) => {
                    setShowTooltipFinIns(false);
                    setFechaFinInscripciones(e.target.value);
                  }}
                />
                {showTooltipFinIns && (
                  <motion.div
                    ref={tooltipFinInsRef} // Referencia para el tooltip
                    id="tooltip-fin-ins"
                    className="absolute z-20 mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md shadow-lg text-sm text-blue-800 left-0 right-0"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Establezca la **fecha límite para las inscripciones**. Después de esta fecha, no se aceptarán más registros.
                  </motion.div>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="fechaInicioClases" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <span>Fecha de Inicio de Clases:</span>
                  <button
                    ref={btnInicioClasesRef} // Añadir referencia al botón
                    type="button"
                    className="ml-2 p-1 rounded-full bg-white text-red-600 border border-red-600 hover:bg-red-50 hover:border-red-700 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 flex-shrink-0"
                    onClick={() => {
                      setShowTooltipInicioIns(false); // Cerrar otros tooltips
                      setShowTooltipFinIns(false); // Cerrar otros tooltips
                      setShowTooltipInicioClases(!showTooltipInicioClases); // Alternar este tooltip
                    }}
                    aria-expanded={showTooltipInicioClases}
                    aria-controls="tooltip-inicio-clases"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.67.69-1.07 1.3-1.07 2.18h-2v-.5c0-.98.4-1.87 1.07-2.54l1.4-1.4c.27-.27.43-.65.43-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H8c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .71-.29 1.3-.73 1.84z"/>
                    </svg>
                  </button>
                </label>
                <input
                  type="date"
                  id="fechaInicioClases"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                  value={fechaInicioClases}
                  onChange={(e) => {
                    setShowTooltipInicioClases(false);
                    setFechaInicioClases(e.target.value);
                  }}
                />
                {showTooltipInicioClases && (
                  <motion.div
                    ref={tooltipInicioClasesRef} // Referencia para el tooltip
                    id="tooltip-inicio-clases"
                    className="absolute z-20 mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md shadow-lg text-sm text-blue-800 left-0 right-0"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Indique la **fecha oficial de inicio de actividades académicas** para el próximo periodo.
                  </motion.div>
                )}
              </motion.div>

              {message.text && (
                <motion.div
                  className={`p-3 rounded-md text-center text-sm font-medium ${
                    message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.text}
                </motion.div>
              )}

              <motion.button
                type="button"
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${
                  saving ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                onClick={handleSaveDates}
                disabled={saving || loading}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {saving ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Guardando...
                  </>
                ) : (
                  'Guardar Fechas'
                )}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
