import { Server, Users } from "lucide-react"
import { useAxiosAuth } from "../../../hooks/useAxiosHook";

const MenuUser = () => {

  const axiosAuth = useAxiosAuth();
  async function cerrarSesion() {
    const request = await axiosAuth.get('/users/logout');
    if(request.status === 200) {
      window.location.href = '/login';
    }

  }


  return (
    <aside className="w-full min-h-full h-full bg-white flex flex-col fixed top-0 left-0  items-center justify-center max-w-[250px] border-r border-gray-300">
      <div className="flex items-center gap-2 p-3 border-b w-full border-gray-300">
          <Server className="h-6 w-6 text-emerald-600 " />
          <span className="text-xl font-bold">ServerPro</span>
      </div>
      <section className="flex flex-col items-center justify-start gap-4 w-full h-full">
        <ul className="flex flex-col items-center w-full justify-start gap-4 p ">
          <li className="flex w-full ">
            <a href="/dashboard" className="flex w-full items-start justify-start cursor-pointer gap-2 text-gray-700 hover:bg-emerald-600 transition px-3 py-2">
              <span>Dashboard</span>
            </a>
          </li>
          {/* <li className="flex w-full ">
            <a href="/dashboard" className="flex w-full items-start justify-start cursor-pointer gap-2 text-gray-700 hover:bg-emerald-600 transition px-3 py-2">
              <span>Servicios</span>
            </a>
          </li> */}
          <li className="flex w-full ">
            <a href="/dashboard/deploy" className="flex w-full items-start justify-start cursor-pointer gap-2 text-gray-700 hover:bg-emerald-600 transition px-3 py-2">
              <span>Subir proyecto</span>
            </a>
          </li>
          <li className="flex w-full ">
            <a href="/dashboard/profile" className="flex w-full items-start justify-start cursor-pointer gap-2 text-gray-700 hover:bg-emerald-600 transition px-3 py-2">
              <span>Perfil</span> 
              <Users className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </section>
      <section className="flex items-center justify-center gap-2 w-full  border-t border-gray-300 p-3">
        <button onClick={cerrarSesion} className="bg-red-500 hover:scale-105 transition text-white p-2 border rounded-lg cursor-pointer  ">Cerrar sesión</button>
      </section>
    </aside>
  )
}

export default MenuUser