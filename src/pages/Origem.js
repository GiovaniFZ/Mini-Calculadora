import { useState } from 'react';
import './Layout.css'
import { useNavigate } from 'react-router-dom';
import LayoutOrDest from './LayoutOrDest';
import setStateByUf from '../components/SetStateByUf.js';

function Origem() {

  // Variaveis para lidar com estados
  const [fullname, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [neighborhood, setNeigh] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNum] = useState('');
  const [complement, setComp] = useState('');
  // State
  let state = '';

  // Configuração de navegação
  let navigate = useNavigate();
  function handleClick(path) {
  // State
    state = setStateByUf(uf, state);
    
    // JSON para address
    const address = {
      cep, state, uf, city, neighborhood, street, number, complement
    }
    const sender = {
      fullname, cpf, phone, email, address
    }

    navigate(path, { state: sender });
  }

  return (
    LayoutOrDest('/destino', 'origem', handleClick, fullname, setName, cpf, setCpf, phone, setPhone,
    email, setEmail, cep, setCep, uf, setUf, neighborhood, setNeigh, city, setCity,
    street, setStreet, number, setNum, complement, setComp
    )
  );
}
export default Origem;