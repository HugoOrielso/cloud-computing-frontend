import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './api/interceptors';

createRoot(document.getElementById('root')!).render(
    <App />
)
