import { useState } from 'react';
import { MenuItem, Button, InputLabel, FormControl, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import './Layout.css'
import { useNavigate } from 'react-router-dom';
import LayoutPad from './LayoutPad';
import axios from 'axios';

function Origem() {

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
  // Configuração da API de cpf
  function handleCepBlur() {
    let url = 'https://viacep.com.br/ws/' + cep + '/json'
    axios.get(url)
      .then(function (response) {
        if (response.data.erro !== true) {
          // handle success
          setCity(response.data.localidade);
          setNeigh(response.data.bairro);
          setStreet(response.data.logradouro);
          setState(response.data.uf);
          setComp(response.data.complemento);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }


  // Configuração do Layout padrão 
  const layout = LayoutPad();

  return (
    <div className='App'>
      <div className='background'>
        {layout}
        <form id="calcForm" className='dados'>
          <h1>Dados de origem</h1>
          <div className='inputs'>
            <TextField
              required
              id="name"
              label="Nome"
              placeholder="Ex: Mateus José"
              value={fullname}
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
              onBlur={handleCepBlur}
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
                <MenuItem value="SP">SP</MenuItem>
                <MenuItem value="MG">MG</MenuItem>
                <MenuItem value="RJ">RJ</MenuItem>
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
              value={neighborhood}
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
          <Button variant="contained" onClick={() => handleClick('/destino')}>Avançar</Button>
        </form>
      </div>
    </div>
  );
}
export default Origem;