import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAxiosAuth } from '../../hooks/useAxiosHook';

const PrivateLayout = () => {
  const axiosAuth = useAxiosAuth();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosAuth.get('/users/auth');
        if(response.status === 200){
          setIsAuth(true);
        }
      } catch (error) {
        console.error('❌ Error de autenticación:', error);
        setIsAuth(false);
      }
    };

    checkAuth();
  }, [axiosAuth]);


  if (isAuth === null) return <p>Cargando...</p>;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateLayout;
