import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from '../components/Inicio'

const Routing = () => {
  return (
    <BrowserRouter>
    
        <Routes>

            <Route path='/' element={<Inicio/>} />





        </Routes>
    
    
    </BrowserRouter>
    
  )
}

export default Routing