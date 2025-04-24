import { Navigate } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
import { useAxiosAuth } from '../hooks/useAxiosHook';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const axiosAuth = useAxiosAuth();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    axiosAuth.get('/users/me')
      .then((e) => { console.log(e);
       setIsAuth(true)})
      .catch((e) => { console.log(e);
       setIsAuth(false)});
  }, [axiosAuth]);

  if (isAuth === null) return <p>Cargando...</p>;

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
