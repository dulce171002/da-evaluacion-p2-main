import { Home, Settings, User ,Image } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Trabajo Final</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="sidebar-link">
          <Home size={20} />
          <span>Inicio</span>
        </a>
        <a href="#" className="sidebar-link">
          <User size={20} />
          <span>Productos</span>
        </a>
        <a href="#" className="sidebar-link">
          <Settings size={20} />
          <span>Contacto</span>
        </a>
        <a href="#" className="sidebar-link">
          <Image size={20} />
          <span>Galeria</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
