import { useState } from 'react';
import { MenuItem, Button, InputLabel, FormControl, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import './Layout.css'
import { useNavigate, useLocation } from 'react-router-dom';
import LayoutPad from './LayoutPad';

function Destino() {

  // Variaveis para lidar com estados
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');
  const [uf, setUf] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNum] = useState('');
  const [complement, setComp] = useState('');

  // Configuração dos dados recebidos
  const dadosOrigem = useLocation().state;

  // Configuração de navegação
  let navigate = useNavigate();
  function handleClick(path) {
    // Jsons
    const address = {
      cep, state, uf, neighborhood, street, number, complement
    }
    const receiver = {
       name, cpf, phone, email, address
    }

    // Combinando jsons
    let combinedJsons = {
      "sender": dadosOrigem,
      "receiver": receiver
    }

    navigate(path, {state: {combinedJsons}});
  }

  // Configuração do Layout padrão 
  const layout = LayoutPad();

  return (
    <div className='App'>
      <div className='background'>
        {layout}
        <form id="calcForm" className='dados'>
          <h1>Dados de destino</h1>
          <div className='inputs'>
            <TextField
              required
              id="name"
              label="Nome"
              placeholder="Ex: Mateus José"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              required
              id="cpf"
              label="CPF"
              value={cpf}
              placeholder="Ex: 111.111.111-11"
              onChange={e => setCpf(e.target.value)}
            />
            <TextField
              required
              id="phone"
              label="Telefone"
              value={phone}
              placeholder="Ex: (11) 11111-1111"
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className='inputs'>
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              value={email}
              placeholder="Ex: jose@postaqui.com"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="CEP"
              value={cep}
              placeholder="Ex: 11111-000"
              onChange={e => setCep(e.target.value)}
            />
            <FormControl variant="filled" size="big">
              <InputLabel id="state">Estado</InputLabel>
              <Select
                labelId="state"
                id="state"
                label="Estado"
                value={state}
                onChange={e => setState(e.target.value)}
                sx={{ backgroundColor: 'white' }}
                style={{ width: 210 }}
              >
                <MenuItem value="sp">SP</MenuItem>
                <MenuItem value="mg">MG</MenuItem>
                <MenuItem value="rj">RJ</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='inputs'>
            <TextField
              required
              id="uf"
              label="Cidade"
              value={uf}
              placeholder="Ex: São Paulo"
              onChange={e => setUf(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Bairro"
              value={neighborhood}
              placeholder="Ex: Centro"
              InputProps={{ inputProps: { style: { background: '#fff' } } }}
              onChange={e => setNeighborhood(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Rua"
              value={street}
              placeholder="Ex: 15 de Novembro"
              onChange={e => setStreet(e.target.value)}
            />
          </div>
          <div className='inputs'>
            <TextField
              required
              id="number"
              label="Numero"
              type='number'
              value={number}
              onChange={e => setNum(e.target.value)}
            />
            <TextField
              id="complement"
              label="Complemento"
              placeholder="Ex: Casa 20"
              value={complement}
              onChange={e => setComp(e.target.value)}
            />
          </div>
          <Button variant="contained" onClick={() => handleClick('/pacote_envio')}>Avançar</Button>
        </form>
      </div>
    </div>
  );
}
export default Destino;
