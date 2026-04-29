import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Home } from '@/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* El Layout envuelve todas las rutas que estén dentro */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* Mañana podrías agregar: <Route path="/servicios" element={<Services />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;