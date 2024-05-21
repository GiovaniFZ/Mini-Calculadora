import { useNavigate } from 'react-router-dom';

// Configuração de navegação
export default function Routing(){
    let navigate = useNavigate();
    
    const goToOrigem = () => navigate('/');
    const goToDest = (st) => navigate('/destino', {state: st});
    const goToPacote = (st) => navigate('/pacote_envio', {state: st});

    return{
        goToOrigem,
        goToDest,
        goToPacote
    }
}