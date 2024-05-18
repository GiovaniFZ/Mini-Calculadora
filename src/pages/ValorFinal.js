import LayoutPad from "./LayoutPad";
import './Layout.css'
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function ValorFinal() {
    const layout = LayoutPad();

    // Configuração de navegação
    let navigate = useNavigate();

    // Configuração dos dados recebidos
    const dados = useLocation().state;
    // Obtendo o codugo

    // Configuração de post usando Axios
    function axiosPost(path) {
        const url = 'https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/posting';
        const carrier = getCarrier();

        axios.post(url,
            {
                "calculated_id": dados.id // Id que foi retornado na requisição anterior
            },
            {
                params: {
                    carrier: carrier
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (response) {
            console.log("response", response.data);
            // Navigate
            navigate(path, { state: response.data.code });
        })
            .catch(function (error) { // Tratamento do erro
                console.log(error);
            });
    }

    function getCarrier(){
        let carr = dados.carrier
        carr = carr.substr(0, carr.indexOf(' '));
        if(carr === 'AZUL'){
            carr = 'AZUL_CARGO';
        }
        return carr;
    }

    return (
        <div className="App">
            {layout}
            <div className='background'>
                <form id="calcForm" className='dados'>
                    <h1>Valor final do frete</h1>
                    <p>Melhor frete para o seu destino: {dados.carrier}</p>
                    <p>Valor: R$ {dados.price}</p>
                    <p>Prazo de entrega: Máximo de</p>
                    <h2>Economia: R$ {dados.discount}</h2>
                    <Button variant="contained" onClick={() => axiosPost('/final')} >Postar</Button>
                </form>
            </div>
        </div>
    );
}
export default ValorFinal;