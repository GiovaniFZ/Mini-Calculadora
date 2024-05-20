import { useState } from 'react';
import './Layout.css'
import { useNavigate, useLocation } from 'react-router-dom';
import LayoutOrDest from './LayoutOrDest';
import { Button } from '@mui/material';
import Routing from './Routing';

function Destino() {

  // Variaveis para lidar com estados
  const [fullname, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');
  const [neighborhood, setNeigh] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNum] = useState('');
  const [complement, setComp] = useState('');
  const {goToOrigem} = Routing();


  // Configuração dos dados recebidos
  const dadosOrigem = useLocation().state;

  // State e uf são o mesmo
  const uf = state;
  console.log('dados', dadosOrigem);

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
    const jsons = {
      "sender": dadosOrigem,
      "receiver": receiver
    }

    navigate(path, { state: { ...jsons } });
  }

  const layout = LayoutOrDest('/pacote_envio', 'destino', handleClick, fullname, setName, cpf, setCpf, phone, setPhone,
  email, setEmail, cep, setCep, state, setState, neighborhood, setNeigh, city, setCity,
  street, setStreet, number, setNum, complement, setComp
)

  return (
    <div className='background'>
    <div className='formsTop'>
      <form id="pathForm" className='paths'>
        <Button color="secondary" onClick={goToOrigem}>Origem</Button>
        <p>{dadosOrigem.fullname} - {dadosOrigem.cpf}</p>
        <p>{dadosOrigem.address.cep}</p>
        <p>{dadosOrigem.address.street} - {dadosOrigem.address.neighborhood}</p>
        <p>Nº{dadosOrigem.address.number} {dadosOrigem.address.complement}</p>
        <p>{dadosOrigem.address.city}-{dadosOrigem.address.state}</p>
      </form>
      </div>
      {layout}
    </div>
  );
}
export default Destino;
