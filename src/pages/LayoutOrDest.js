import { useState } from 'react';
import { MenuItem, Button, InputLabel, FormControl, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import './Layout.css'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import LayoutPad from './LayoutPad';

function LayoutOrDest(role, path) {

  // Variaveis para lidar com estados
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neigh, setNeigh] = useState('');
  const [street, setStreet] = useState('');
  const [num, setNum] = useState('');
  const [comp, setComp] = useState('');

  // Configuração de navegação
  let navigate = useNavigate();
  function handleClick(path) {
    const data = {
      name, cpf, phone, email, cep, state, city, neigh, street, num, comp
    }
    navigate(path, {});
  }

  // Configuração do Layout padrão 
  const layout = LayoutPad();

  return (
    <div className='App'>
      <div className='background'>
        {layout}
        <form id="calcForm" className='dados'>
          <h1>Dados de {role}</h1>
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
              id="city"
              label="Cidade"
              value={city}
              placeholder="Ex: São Paulo"
              onChange={e => setCity(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Bairro"
              value={neigh}
              placeholder="Ex: Centro"
              InputProps={{ inputProps: { style: { background: '#fff' } } }}
              onChange={e => setNeigh(e.target.value)}
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
              id="num"
              label="Numero"
              type='number'
              value={num}
              onChange={e => setNum(e.target.value)}
            />
            <TextField
              id="comp"
              label="Complemento"
              placeholder="Ex: Casa 20"
              value={comp}
              onChange={e => setComp(e.target.value)}
            />
          </div>
          <Button variant="contained" onClick={() => handleClick(path)}>Avançar</Button>
        </form>
      </div>
    </div>
  );
}
export default LayoutOrDest;
