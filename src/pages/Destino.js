import { useState } from 'react';
import './Layout.css'
import { useNavigate, useLocation } from 'react-router-dom';
import LayoutOrDest from './LayoutOrDest';
import { Button } from '@mui/material';

function Destino() {

  // Variaveis para lidar com estados
  const [fullname] = useState('');
  const [cpf] = useState('');
  const [phone] = useState('');
  const [email] = useState('');
  const [cep] = useState('');
  const [state] = useState('');
  const [city] = useState('');
  const [neighborhood] = useState('');
  const [street] = useState('');
  const [number] = useState('');
  const [complement] = useState('');

  // Configuração dos dados recebidos
  const dadosOrigem = useLocation().state;
  const dadosOrigemStr = JSON.stringify(dadosOrigem);

  // State e uf são o mesmo
  const uf = state;

  // Configuração de navegação
  let navigate = useNavigate();
  function handleClick(path) {
    // Jsons
    const address = {
      cep, state, uf, city, neighborhood, street, number, complement
    }
    const receiver = {
      fullname, cpf, phone, email, address
    }

    // Combinando jsons
    const x = {
      "sender": dadosOrigem,
      "receiver": receiver
    }

    navigate(path, { state: { ...x } });
  }

  const layout = LayoutOrDest('/pacote_envio', 'destino', handleClick)

  return (
    <>
      <form id="pathForm" className='paths'>
        <Button>Origem</Button>
        <p>{dadosOrigemStr}</p>
      </form>
      {layout}
    </>
  );
}
export default Destino;
