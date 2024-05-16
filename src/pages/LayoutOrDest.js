import * as React from 'react';
import { MenuItem, Button, InputLabel, FormControl } from '@mui/material';
import Select from '@mui/material/Select';
import './Layout.css'
import { useNavigate } from 'react-router-dom';
import LayoutPad from './LayoutPad';
import CustomTextField from '../components/CustomTextField';

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
        <CustomTextField
          required
          id="name"
          label="Nome"
          placeholder="Ex: Mateus José"
        />
        <CustomTextField
          required
          id="cpf"
          label="CPF"
          placeholder="Ex: 111.111.111-11"
        />
        <CustomTextField
          required
          id="phone"
          label="Telefone"
          placeholder="Ex: (11) 11111-1111"
        />
        <CustomTextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          placeholder="Ex: jose@postaqui.com"
        />
        <CustomTextField
          required
          id="outlined-required"
          label="CEP"
          placeholder="Ex: 11111-000"
        />
        <FormControl>
          <InputLabel id="state">Estado</InputLabel>
          <Select
            labelId="state"
            id="state"
            value={state}
            label="Estado"
            onChange={handleChange}
          >
            <MenuItem value="sp">SP</MenuItem>
            <MenuItem value="mg">MG</MenuItem>
            <MenuItem value="rj">RJ</MenuItem>
          </Select>
        </FormControl>
        <CustomTextField
          required
          id="outlined-required"
          label="Cidade"
          placeholder="Ex: São Paulo"
        />
        <CustomTextField
          required
          id="outlined-required"
          label="Bairro"
          placeholder="Ex: Centro"
          InputProps={{ inputProps: { style: { background: '#fff' }}}}
        />
        <CustomTextField
          required
          id="outlined-required"
          label="Rua"
          placeholder="Ex: 15 de Novembro"
        />
        <CustomTextField
          required
          id="outlined-required"
          label="Numero"
          type='number'
        />
        <CustomTextField
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
