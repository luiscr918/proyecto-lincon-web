// Eliminar 'React' ya que no se usa directamente
import FooterHomeComponent from './FooterHomeComponent'; // Asegúrate de la ruta correcta

interface AdminLayoutProps {
  children: React.ReactNode; // Tipado directo para children
}

// Componente AdminLayout sin React.FC
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Puedes agregar un header o navbar específico para el admin aquí si lo necesitas */}
      {/* Por ejemplo: <AdminNavbar /> */}
      <main className="flex-grow">
        {children}
      </main>
      <FooterHomeComponent />
    </div>
  );
};

export default AdminLayout;