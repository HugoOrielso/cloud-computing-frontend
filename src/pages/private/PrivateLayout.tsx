import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAxiosAuth } from '../../hooks/useAxiosHook';

const PrivateLayout = () => {
  const axiosAuth = useAxiosAuth();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    
    axiosAuth.get('/users/me')
      .then(() =>  
        
        setIsAuth(true))
      .catch((e) => {console.log(e)
       setIsAuth(false)});
  }, [axiosAuth]);

  if (isAuth === null) return <p>Cargando...</p>;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateLayout;
