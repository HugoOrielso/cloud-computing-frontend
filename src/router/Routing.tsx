import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from '../pages/public/Inicio/Inicio';
import { Toaster } from 'sonner';
import Dashboard from '../pages/private/Dashboard/Dashboard';
import Login from '../pages/public/Login/Login';
import PrivateLayout from '../pages/private/PrivateLayout';
import Profile from '../pages/private/Profile/Profile';
import DeployMain from '../pages/private/Deploy/DeployMain';
import MyProjectsMain from '../pages/private/MyProjects/MyProjectsMain';
import SingleProjectMain from '../pages/private/MyProjects/id/SingleProjectMain';

const Routing = () => {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/deploy" element={<DeployMain />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/projects" element={<MyProjectsMain />} />
          <Route path="/dashboard/projects/:id" element={<SingleProjectMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
