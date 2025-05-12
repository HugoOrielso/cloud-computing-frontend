import { Server, LayoutDashboard, Upload, FolderKanban, LogOut } from "lucide-react";
import { useAxiosAuth } from "../../../hooks/useAxiosHook";
import { useLocation } from "react-router-dom";

const MenuUser = () => {
  const axiosAuth = useAxiosAuth();
  const location = useLocation();

  const cerrarSesion = async () => {
    const request = await axiosAuth.get('/users/logout');
    if (request.status === 200) {
      window.location.href = '/login';
    }
  };

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Mis proyectos",
      href: "/dashboard/projects",
      icon: FolderKanban,
    },
    {
      label: "Subir proyecto",
      href: "/dashboard/deploy",
      icon: Upload,
    }
  ];

  return (
    <aside className="w-full min-h-full h-full bg-white flex flex-col fixed top-0 left-0 items-center justify-center max-w-[250px] border-r border-gray-300">
      <div className="flex items-center gap-2 p-3 border-b w-full border-gray-300">
        <Server className="h-6 w-6 text-emerald-600" />
        <span className="text-xl font-bold">ServerPro</span>
      </div>

      <section className="flex flex-col items-center justify-start gap-4 w-full h-full">
        <ul className="flex flex-col items-center w-full justify-start gap-2 p-2">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = location.pathname === href;
            return (
              <li key={label} className="flex w-full">
                <a
                  href={href}
                  className={
                    "flex w-full items-center gap-2 px-3 py-2 transition rounded-md " +
                    (isActive
                      ? "bg-emerald-600 text-white"
                      : "text-gray-700 hover:bg-emerald-100")
                  }
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="flex items-center justify-center gap-2 w-full border-t border-gray-300 p-3">
        <button
          onClick={cerrarSesion}
          className="flex items-center gap-2 bg-red-500 hover:scale-105 transition text-white p-2 border rounded-lg"
        >
          <LogOut className="h-5 w-5" />
          Cerrar sesión
        </button>
      </section>
    </aside>
  );
};

export default MenuUser;
