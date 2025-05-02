import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Server } from 'lucide-react';
import axios from 'axios';
import { useAxiosAuth } from '../../../hooks/useAxiosHook';
import { toast } from 'sonner';
const Login = () => {
  const axiosAuth = useAxiosAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as { email: string, password: string };
    const { email, password } = data;

    if (!email || !password) {
      toast.error('Por favor, completa todos los campos');
      return;
    }

    setLoading(true);

    try {
      const request = await axiosAuth.post('/users/login', { email, password });
      if(request.status === 200) {
        console.log(request.data);
        toast.success('Inicio de sesión exitoso');
        navigate('/dashboard');
      }
    }catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error("Error al iniciar sesión")
      } else {
        toast.error('Error inesperado');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
      <header className="sticky px-4 top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">ServerPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicios" className="text-sm font-medium transition-colors hover:text-emerald-600">Servicios</a>
            <a href="#planes" className="text-sm font-medium transition-colors hover:text-emerald-600">Planes</a>
            <a href="#clientes" className="text-sm font-medium transition-colors hover:text-emerald-600">Clientes</a>
            <a href="#soporte" className="text-sm font-medium transition-colors hover:text-emerald-600">Soporte</a>
            <a href="#contacto" className="text-sm font-medium transition-colors hover:text-emerald-600">Contacto</a>
          </nav>
        </div>
      </header>
      <main className='flex flex-col items-center justify-center w-full h-full p-4 flex-1'>

      <form onSubmit={handleLogin} className="bg-white p-8 mt-12 rounded shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Iniciar Sesión</h2>
        <input 
          name="email"
          type="email"
          placeholder="Correo electrónico"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
          required
        />

        <input
          type="password"
          name='password'
          placeholder="Contraseña"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition-colors disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'Cargando...' : 'Entrar'}
        </button>
      </form>
      </main>
    </div>
  );
};

export default Login;
