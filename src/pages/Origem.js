import * as React from 'react';
import logo from '../assets/logo2.png';
import { MenuItem, TextField, Button, InputLabel, FormControl } from '@mui/material';
import Select from '@mui/material/Select';
import './Origem.css'
import { useNavigate } from 'react-router-dom';

function Origem() {

  const [state, setState] = React.useState('');
  const handleChange = (event) => {
    setState(event.target.value);
  };

  // Configuração de navegação
  let navigate = useNavigate(); 
  const changeScreen = () =>{ 
    let path = '/destino'; 
    navigate(path);
  }
  return (
    <div className='App'>
    <img src={logo} className="App-logo" alt="logo_postaqui" />
    <h1>Calculadora Postaqui</h1>
    <form id="calcForm" className='dados'>
    <TextField
          required
          id="name"
          label="Nome"
          placeholder="Ex: Mateus José"
        />
      <TextField
          required
          id="cpf"
          label="CPF"
          placeholder="Ex: 111.111.111-11"
        />
      <TextField
          required
          id="phone"
          label="Telefone"
          placeholder="Ex: (11) 11111-1111"
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          placeholder="Ex: jose@postaqui.com"
        />
        <TextField
          required
          id="outlined-required"
          label="CEP"
          placeholder="Ex: 11111-000"
        />
        <FormControl>
        <InputLabel id="state">Estado</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state}
        label="Estado"
        onChange={handleChange}
  >
          <MenuItem value="sp">SP</MenuItem>
          <MenuItem value="mg">MG</MenuItem>
          <MenuItem value="rj">RJ</MenuItem>
        </Select>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Cidade"
          placeholder="Ex: São Paulo"
        />
        <TextField
          required
          id="outlined-required"
          label="Bairro"
          placeholder="Ex: Centro"
        />
        <TextField
          required
          id="outlined-required"
          label="Rua"
          placeholder="Ex: 15 de Novembro"
        />
        <TextField
          required
          id="outlined-required"
          label="Numero"
          type='number'
        />
        <TextField
          id="outlined-required"
          label="Complemento"
          placeholder="Ex: Casa 20"
        />
    </form>
    <Button onClick={changeScreen}>Submeter</Button>
    </div>
  );
}
export default Origem;
