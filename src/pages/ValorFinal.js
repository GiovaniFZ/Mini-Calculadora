import LayoutPad from "./LayoutPad";
import './Layout.css'
import { Button } from "@mui/material";
import { useNavigate, useLocation, json } from "react-router-dom";

function ValorFinal() {
    const layout = LayoutPad();

    // Configuração de navegação
    let navigate = useNavigate();
    function changeScreen(path) {
        navigate(path);
    }

    // Configuração dos dados recebidos
    const dados = useLocation().state;
    // Convertendo para string
    let jsonString = JSON.stringify(dados);
    console.log("json", jsonString);

    return (
        <div className="App">
            {layout}
            <div className='background'>
            <form id="calcForm" className='dados'>
                <h1>Valor final do frete</h1>
                <p>Melhor frete para o seu destino: {dados.carrier}</p>
                <p>Valor: R$ {dados.price}</p>
                <p>Prazo de entrega: Máximo de</p>
                <h2>Economia: {dados.discount}</h2>
                <Button variant="contained" onClick={() => changeScreen('/final')} >Postar</Button>
            </form>
            </div>
        </div>
    );
}
export default ValorFinal;