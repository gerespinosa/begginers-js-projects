import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainPage from "./pages/MainPage"
import CAANPage from "./features/CAAN/pages/CAANPage"
import RelojDigitalPage from "./features/Reloj Digital/pages/RelojDigitalPage"
import RelojAnalogicoPage from "./features/Reloj Analogico/pages/RelojAnalogico"
import CSSGeneratorPage from "./features/CSSGenerator/pages/CSSGeneratorPage"
import CronometroPage from "./features/Cronometro/pages/CronometroPage"
import NotasPage from "./features/Notas/pages/NotasPage"
import ModalPage from "./features/Modal/pages/ModalPage"
import PassGeneratorPage from "./features/PassGenerator/pages/PassGeneratorPage"
import RatingsPage from "./features/Ratings/pages/RatingsPage"
import SliderPage from "./features/Slider/pages/SliderPage"
import CalculadoraPage from "./features/Calculadora/pages/CalculadoraPage"
import QRPage from "./features/QR/pages/QRPage"
import TresEnRayaPage from "./features/TresEnRaya/pages/TresEnRayaPage"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/CAAN" element={<CAANPage/>}/>
          <Route path="/reloj-digital" element={<RelojDigitalPage/>}/>
          {/* <Route path="/reloj-analogico" element={<RelojAnalogicoPage/>}/> */}
          <Route path="/generador-css" element={<CSSGeneratorPage/>}/>
          <Route path="/cronometro" element={<CronometroPage/>}/>
          <Route path="/notas" element={<NotasPage/>}/>
          <Route path="/modal" element={<ModalPage/>}/>
          <Route path="/pass-generator" element={<PassGeneratorPage/>}/>
          <Route path="/ratings" element={<RatingsPage/>}/>
          <Route path="/slider" element={<SliderPage />}/>
          <Route path="/calculadora" element={<CalculadoraPage />} />
          <Route path="/qr" element={<QRPage />} />
          <Route path="/tres-en-raya" element={<TresEnRayaPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
