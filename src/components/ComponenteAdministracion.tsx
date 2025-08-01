// Eliminar 'React' ya que no se usa directamente
import FooterHomeComponent from "./FooterHomeComponent"; // Asegúrate de la ruta correcta
import Navegacion from "./Navegacion";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <Navegacion />
      <FooterHomeComponent />
    </div>
  );
};

export default AdminLayout;
