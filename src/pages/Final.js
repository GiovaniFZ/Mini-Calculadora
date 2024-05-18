import { useNavigate } from 'react-router-dom';
import './Layout.css'
import LayoutPad from './LayoutPad';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Final() {
    const layout = LayoutPad();

    // Configuração de dados recebidos
    const cod = useLocation().state;

    // Configuração de navegação
    const navigate = useNavigate();
    function changeScreen(path) {
        navigate(path);
    }

    return (
        <div className='App'>
            <div className='background'>
                {layout}
                <form id="calcForm" className='dados'>
                    <h1>Parabéns! Entrega postada com sucesso.</h1>
                    <h2>Código de rastreio: {cod}</h2>
                    <Button variant="contained" onClick={() => changeScreen('/')}>Nova postagem</Button>
                </form>
            </div>
        </div>
    );
}

export default Final;