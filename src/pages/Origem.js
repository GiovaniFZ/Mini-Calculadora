import { useState } from 'react';
import './Layout.css'
import { useNavigate } from 'react-router-dom';
import LayoutOrDest from './LayoutOrDest';

function Origem() {

  // Variaveis para lidar com estados
  const [fullname] = useState('');
  const [cpf] = useState('');
  const [phone] = useState('');
  const [email] = useState('');
  const [cep] = useState('');
  const [state] = useState('');
  const [neighborhood] = useState('');
  const [city] = useState('');
  const [street] = useState('');
  const [number] = useState('');
  const [complement] = useState('');

  // Configuração de navegação
  let navigate = useNavigate();
  function handleClick(path) {

    // State e uf são o mesmo
    const uf = state;

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
    LayoutOrDest('/destino', 'origem', handleClick)
  );
}
export default Origem;