import LayoutPad from "./LayoutPad";
import './Layout.css'
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function ValorFinal() {
    const layout = LayoutPad();

    // Configuração de navegação
    let navigate = useNavigate();

    // Configuração dos data recebidos
    const arr = useLocation().state;
    console.log('arr0', arr[0]);
    console.log('arr1', arr[1]);

    // Configuração de post usando Axios
    function axiosPost(path) {
        const url = 'https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/posting';
        const carrier = getCarrier();

        axios.post(url,
            {
                "calculated_id": arr[0].id // Id que foi retornado na requisição anterior
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

    function getCarrier() {
        let carr = arr[0].carrier
        carr = carr.substr(0, carr.indexOf(' '));
        if (carr === 'AZUL') {
            carr = 'AZUL_CARGO';
        }
        return carr;
    }

    function handleTopClick() {
        navigate('/');
    }

    return (
        <div className="App">
            <div className="formsTop">
                <form id="pathForm" className='paths'>
                    <Button onClick={handleTopClick}>Origem</Button>
                    <p>{arr[1].sender.fullname} - {arr[1].sender.cpf}</p>
                    <p>{arr[1].sender.address.cep}</p>
                    <p>{arr[1].sender.address.street} - {arr[1].sender.address.neighborhood}</p>
                    <p>Nº{arr[1].sender.address.number} {arr[1].sender.address.complement}</p>
                    <p>{arr[1].sender.address.city}-{arr[1].sender.address.state}</p>
                </form>
                <form id="pathForm" className='paths'>
                    <Button onClick={handleTopClick}>Destino</Button>
                    <p>{arr[1].receiver.fullname} - {arr[1].receiver.cpf}</p>
                    <p>{arr[1].receiver.address.cep}</p>
                    <p>{arr[1].receiver.address.street} - {arr[1].receiver.address.neighborhood}</p>
                    <p>Nº{arr[1].receiver.address.number} {arr[1].receiver.address.complement}</p>
                    <p>{arr[1].receiver.address.city}-{arr[1].receiver.address.state}</p>
                </form>
                <form id="pathForm" className='paths'>
                    <Button onClick={handleTopClick}>Pacote</Button>
                    <p>AXLXC {arr[1].package.height}{arr[1].package.width}{arr[1].package.length}</p>
                    <p>Logística reversa: {arr[1].package.reverse ? 'Sim' : 'Não'}</p>
                    <p>Mãos próprias: {arr[1].package.own_hands ? 'Sim' : 'Não'}</p>
                    <p>Aviso de recebimento: {arr[1].package.ar ? 'Sim' : 'Não'}</p>
                    <p>Valor mercadora: {arr[1].amount}</p>
                </form>
            </div>
            {layout}
            <div className='background'>
                <form id="calcForm" className='dados'>
                    <h1>Valor final do frete</h1>
                    <p>Melhor frete para o seu destino: {arr[0].carrier}</p>
                    <p>Valor: R$ {arr[0].price}</p>
                    <h2>Economia: R$ {arr[0].discount}</h2>
                    <Button variant="contained" onClick={() => axiosPost('/final')} >Postar</Button>
                </form>
            </div>
        </div>
    );
}
export default ValorFinal;