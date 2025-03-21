import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from '../components/Inicio'
import Ejemplo from '../components/Ejemplo'

const Routing = () => {
  return (
    <BrowserRouter>
    
        <Routes>

            <Route path='/' element={<Inicio/>} />
            <Route path='/ejemplo' element={<Ejemplo/>} />





        </Routes>
    
    
    </BrowserRouter>
    
  )
}

export default Routing