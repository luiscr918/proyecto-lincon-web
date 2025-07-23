import { useState, useEffect } from 'react'; // Eliminar 'React' ya que no se usa directamente
import AdminLayout from '../components/ComponenteAdministracion'; // Asegúrate de la ruta correcta
import { motion } from 'framer-motion'; // Para animaciones suaves

// Importa Firebase aquí si lo usaras directamente, pero por ahora lo dejamos como comentario.
// import { db } from '../firebaseConfig'; // Asume que tienes un firebaseConfig.ts
// import { doc, getDoc, updateDoc } from 'firebase/firestore';

// Función auxiliar para formatear fechas a YYYY-MM-DD para el input type="date"
const formatDateToInput = (date: Date | null): string => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Función auxiliar para parsear fechas de string a Date
const parseDateFromInput = (dateString: string): Date | null => {
  if (!dateString) return null;
  return new Date(dateString + 'T00:00:00'); // Añade T00:00:00 para evitar problemas de zona horaria
};

// Componente AdminDashboard sin React.FC
const AdminDashboard = () => {
  // Estado local para las fechas. Inicialmente vacías o con valores de ejemplo
  const [fechaInicioInscripciones, setFechaInicioInscripciones] = useState<string>('');
  const [fechaFinInscripciones, setFechaFinInscripciones] = useState<string>('');
  const [fechaInicioClases, setFechaInicioClases] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' | '' }>({ text: '', type: '' });

  // Simulamos la carga de datos desde Firebase (tu compañero lo conectará realmente)
  useEffect(() => {
    const fetchDates = async () => {
      setLoading(true);
      setMessage({ text: '', type: '' });
      try {
        // *** ESTO ES SIMULADO ***
        // Aquí iría la lógica real para obtener las fechas de Firebase.
        // const docRef = doc(db, "fechasInstitucion", "fechas");
        // const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //   const data = docSnap.data();
        //   setFechaInicioInscripciones(formatDateToInput(data.fechaInicioInscripciones?.toDate()));
        //   setFechaFinInscripciones(formatDateToInput(data.fechaFinInscripciones?.toDate()));
        //   setFechaInicioClases(formatDateToInput(data.fechaInicioClases?.toDate()));
        // } else {
        //   console.log("No such document!");
        // }

        // Datos de ejemplo para que la UI funcione sin Firebase conectado
        setTimeout(() => {
          setFechaInicioInscripciones(formatDateToInput(new Date('2025-03-01')));
          setFechaFinInscripciones(formatDateToInput(new Date('2025-03-31')));
          setFechaInicioClases(formatDateToInput(new Date('2025-04-15')));
          setLoading(false);
        }, 1000); // Simula un retraso de red
        // *** FIN SIMULACIÓN ***

      } catch (error) {
        console.error("Error fetching dates:", error);
        setMessage({ text: 'Error al cargar las fechas.', type: 'error' });
        setLoading(false);
      }
    };

    fetchDates();
  }, []);

  const handleSaveDates = async () => {
    setSaving(true);
    setMessage({ text: '', type: '' });
    try {
      // Validaciones básicas
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


      // *** ESTO ES SIMULADO ***
      // Aquí iría la lógica real para guardar las fechas en Firebase.
      // await updateDoc(doc(db, "fechasInstitucion", "fechas"), {
      //   fechaInicioInscripciones: inicioIns,
      //   fechaFinInscripciones: finIns,
      //   fechaInicioClases: inicioClases,
      // });
      setTimeout(() => {
        setMessage({ text: 'Fechas actualizadas exitosamente!', type: 'success' });
        setSaving(false);
      }, 1500); // Simula un retraso de guardado
      // *** FIN SIMULACIÓN ***

    } catch (error) {
      console.error("Error saving dates:", error);
      setMessage({ text: 'Error al guardar las fechas.', type: 'error' });
      setSaving(false);
    }
  };

  // Variantes para las animaciones de Framer Motion
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
  } as const; // 'as const' ayuda a TypeScript a inferir el tipo exacto y evitar errores con framer-motion

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AdminLayout>
      <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 to-indigo-900 text-white min-h-[calc(100vh-80px)]"> {/* Altura ajustada */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md border border-blue-300"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl font-extrabold text-gray-800 mb-8 text-center"
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
              <motion.div variants={itemVariants}>
                <label htmlFor="fechaInicioInscripciones" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Inicio de Inscripciones:
                </label>
                <input
                  type="date"
                  id="fechaInicioInscripciones"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                  value={fechaInicioInscripciones}
                  onChange={(e) => setFechaInicioInscripciones(e.target.value)}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="fechaFinInscripciones" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Fin de Inscripciones:
                </label>
                <input
                  type="date"
                  id="fechaFinInscripciones"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                  value={fechaFinInscripciones}
                  onChange={(e) => setFechaFinInscripciones(e.target.value)}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="fechaInicioClases" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Inicio de Clases:
                </label>
                <input
                  type="date"
                  id="fechaInicioClases"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                  value={fechaInicioClases}
                  onChange={(e) => setFechaInicioClases(e.target.value)}
                />
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