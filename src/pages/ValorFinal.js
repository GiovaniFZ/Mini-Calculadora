import LayoutPad from "./LayoutPad";
import './Layout.css'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ValorFinal() {
    const layout = LayoutPad();
    // Configuração de navegação
    let navigate = useNavigate();
    function changeScreen(path) {
        navigate(path);
    }

    return (
        <div className="App">
            {layout}
            <div className='background'>
            <form id="calcForm" className='dados'>
                <h1>Valor final do frete</h1>
                <p>Melhor frete para o seu destino:</p>
                <p>Valor: </p>
                <p>Prazo de entrega: Máximo de</p>
                <h2>Economia: </h2>
                <Button variant="contained" onClick={() => changeScreen('/final')} >Postar</Button>
            </form>
            </div>
        </div>
    );
}
export default ValorFinal;