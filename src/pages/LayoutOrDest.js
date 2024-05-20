import { useState } from 'react';
import { MenuItem, Button, InputLabel, FormControl, TextField, FormHelperText } from '@mui/material';
import Select from '@mui/material/Select';
import './Layout.css';
import LayoutPad from './LayoutPad';
import axios from 'axios';
import InputMask from 'react-input-mask';
import VerifyTouch from './VerifyTouch';

function LayoutOrDest(path, role, handleClick, fullname, setName, cpf, setCpf, phone, setPhone, email, setEmail, 
  cep, setCep, state, setState, neighborhood, setNeigh, city, setCity, street, setStreet, number, setNum , complement,
  setComp
) {

  const [cepHelp, setCepHelp] = useState('');
  const [cepCheck, setCepCheck] = useState(false);
  const [cpfCheck, setCpfCheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [stateCheck, setStateCheck] = useState('');
  const {touched, markTouched, markUntouched} = VerifyTouch();

  // Configuração da API de cep
  function handleCepBlur() {
    let url = 'https://viacep.com.br/ws/' + cep + '/json';
    markTouched();
    if (!cep.includes(" ")) {
      setCepCheck(false);
      setCepHelp('');
      axios.get(url)
        .then(function (response) {
          if (response.data.erro !== true) {
            // handle success
            setCity(response.data.localidade);
            setNeigh(response.data.bairro);
            setStreet(response.data.logradouro);
            setState(response.data.uf);
            setComp(response.data.complemento);
          }else{
            setCepHelp('Obs: Cep não encontrado.');
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    } else {
      setCepHelp('Insira um CPF válido!');
      setCepCheck(true);
    }
  }

  function verifyCpf() {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    markTouched();
    if (regex.test(cpf)) {
      setCpfCheck(false);
    } else {
      setCpfCheck(true);
    }
  }

  function verifyPhone() {
    const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    markTouched();
    if (regex.test(phone)) {
      setPhoneCheck(false);
    } else {
      setPhoneCheck(true);
    }
  }

  function verifyState() {
    if (state === '') {
      markTouched();
      setStateCheck('Estado é obrigatório!');
    } else {
      setStateCheck('');
    }
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
              value={fullname}
              error={touched && fullname === ''}
              onChange={e => setName(e.target.value)}
              onBlur={markTouched}
              onFocus={markUntouched}
            helperText={touched && fullname === '' ? 'Nome é obrigatório!' : ''}
            />
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
              onBlur={verifyCpf}
              onFocus={markTouched}
              maskChar="_"
            >
              {() => (
                <TextField
                  required
                  id="cpf"
                  label="CPF"
                  error={touched && cpfCheck}
                  helperText={touched && cpfCheck ? 'Insira um CPF válido!' : ''}
                />)}
            </InputMask>
            <InputMask
              mask="(99) 99999-9999"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              onBlur={verifyPhone}
              onFocus={markUntouched}
              maskChar=" "
            >
              {() => (
                <TextField
                  required
                  id="phone"
                  label="Telefone"
                  value={phone}
                  error={touched && phoneCheck}
                  helperText={touched && phoneCheck ? 'Insira um telefone válido!' : ''}
                />
              )}
            </InputMask>
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
              error={touched && email === ''}
              onBlur={markTouched}
              onFocus={markUntouched}
              helperText={touched && email === '' ? 'E-Mail é obrigatório!' : ''}
            />
            <InputMask
              mask="99999-999"
              value={cep}
              onChange={e => setCep(e.target.value)}
              onBlur={handleCepBlur}
              onFocus={markUntouched}
              maskChar=" ">
              {() => (
                <TextField
                  required
                  id="outlined-required"
                  label="CEP"
                  placeholder="Ex: 11111-000"
                  error={touched && cepCheck}
                  helperText={cepHelp}
                />
              )}
            </InputMask>
            <FormControl variant="filled" size="big">
              <InputLabel id="state">Estado</InputLabel>
              <Select
                labelId="state"
                id="state"
                label="Estado"
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={verifyState}
                sx={{ backgroundColor: 'white' }}
                style={{ width: 210 }}
                error={touched && state === ''}
              >
                <MenuItem value="SP">SP</MenuItem>
                <MenuItem value="MG">MG</MenuItem>
                <MenuItem value="RJ">RJ</MenuItem>
              </Select>
              <FormHelperText error>{stateCheck}</FormHelperText>
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
              error={touched && city === ''}
              onBlur={markTouched}
              onFocus={markUntouched}
              helperText={touched && city === '' ? 'Cidade é obrigatória!' : ''}
            />
            <TextField
              required
              id="outlined-required"
              label="Bairro"
              value={neighborhood}
              placeholder="Ex: Centro"
              InputProps={{ inputProps: { style: { background: '#fff' } } }}
              onChange={e => setNeigh(e.target.value)}
              error={touched && neighborhood === ''}
              onBlur={markTouched}
              onFocus={markUntouched}
              helperText={touched && city === '' ? 'Bairro é obrigatório!' : ''}
            />
            <TextField
              required
              id="outlined-required"
              label="Rua"
              value={street}
              placeholder="Ex: 15 de Novembro"
              onChange={e => setStreet(e.target.value)}
              error={touched && street === ''}
              onBlur={markTouched}
              onFocus={markUntouched}
            helperText={touched && city === '' ? 'Rua é obrigatória!' : ''}
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
              error={touched && number === ''}
              onBlur={markTouched}
              onFocus={markUntouched}
              helperText={touched && number === '' ? 'Número é obrigatório!' : ''}
            />
            <TextField
              id="complement"
              label="Complemento"
              placeholder="Ex: Casa 20"
              value={complement}
              onChange={e => setComp(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
           // disabled={!fullname || !cpf || !phone || !email || !cep || !state || !city || !neighborhood || !street || !number}
            onClick={() => handleClick(path)}>Avançar
          </Button>
        </form>
      </div>
    </div>
  );
}
export default LayoutOrDest;