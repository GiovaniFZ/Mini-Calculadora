import { BrowserRouter, Routes, Route } from "react-router-dom";
import Origem from "./pages/Origem";
import Destino from "./pages/Destino";
import PacoteEnvio from "./pages/PacoteEnvio";
import ValorFinal from "./pages/ValorFinal";
import Final from "./pages/Final";
import NoPage from "./pages/NoPage";

function App(){
  return(
    <BrowserRouter>
      <Routes>
          <Route index element={<Origem />} />
          <Route path="destino" element={<Destino />} />
          <Route path="pacote_envio" element={<PacoteEnvio />} />
          <Route path="valorfin" element={<ValorFinal />} />
          <Route path="fim" element={<Final />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;