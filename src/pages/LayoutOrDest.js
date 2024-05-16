import * as React from 'react';
import { MenuItem, TextField, Button, InputLabel, FormControl } from '@mui/material';
import Select from '@mui/material/Select';
import './Layout.css'
import { useNavigate } from 'react-router-dom';
import LayoutPad from './LayoutPad';

function LayoutOrDest(role, path) {

  // const para lidar com o evento do select
  const [state, setState] = React.useState('');
  const handleChange = (event) => {
    setState(event.target.value);
  };

  // Configuração de navegação
  let navigate = useNavigate();
  function changeScreen(path) {
    navigate(path);
  }

  // Configuração do Layout padrão 
  const layout = LayoutPad();
  return (
    <div className='App'>
      {layout}
      <form id="calcForm" className='dados'>
        <h1>Dados de {role}</h1>
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
        <p></p>
        <Button onClick={() => changeScreen(path)}>Avançar</Button>
      </form>
    </div>
  );
}
export default LayoutOrDest;
