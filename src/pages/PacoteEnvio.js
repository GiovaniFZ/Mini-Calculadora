import * as React from 'react';
import LayoutPad from "./LayoutPad"
import './Layout.css'
import { TextField, Switch, FormGroup, FormControlLabel, Button } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import { useNavigate, useLocation } from 'react-router-dom';


function PacoteEnvio() {
    const layout = LayoutPad();
    
    // Configuração de navegação
    const navigate = useNavigate();
    function changeScreen(path) {
    navigate(path);
}
    // Configuração dos dados recebidos
    const {dadosOrigem, dadosDestino} = useLocation().state;
    console.log(dadosOrigem.name);
    console.log(dadosDestino.name);

    return (
        <div className='App'>
            {layout}
            <div className='background'>
            <form id="calcForm" className="dados">
                <h1>Dados do pacote</h1>
                <div className='packageField'>
                <TextField
                    required
                    id="peso"
                    label="Peso (g)"
                    type='number'
                    placeholder="Digite o peso do pacote em gramas"
                />
                <TextField
                    required
                    id="altura"
                    label="Altura (cm)"
                    type='number'
                    placeholder="Digite a altura do pacote em cm"
                />
                <TextField
                    required
                    id="largura"
                    label="Largura (cm)"
                    type='number'
                    placeholder="Digite a largura do pacote em cm"
                />
                <TextField
                    required
                    id="comp"
                    label="Comprimento (cm)"
                    type='number'
                    placeholder="Digite o comprimento do pacote em cm"
                />
                </div>
                <div className='packageField'>
                <FormGroup>
                    <FormControlLabel control={<Switch />} label="Logística reversa" />
                    <FormControlLabel control={<Switch defaultChecked />} label="Aviso de recebimento" />
                    <FormControlLabel control={<Switch />} label="Mãos próprias" />
                </FormGroup>
                </div>
                <div className='packageField'>
                <TextField
                    required
                    id="comp"
                    label="Valor da mercadoria"
                    type='number'
                    placeholder="Digite o valor do pacote em R$"
                />
                <TextField
                    required
                    id="comp"
                    label="Quantidade de itens"
                    type='number'
                    color="primary"
                    placeholder="Digite a quantidade de itens"
                    InputProps={{ inputProps: { style: { color: '#fff' }}}}
                />
                <label for="itensDesc" className='box_aux'>Descrição dos itens</label>
                <Textarea className='box' cols="100" rows="100" id="itensDesc" maxRows={1000} minRows={10}>
                </Textarea>
                </div>
                <p></p>
                <Button variant="contained" onClick={() => changeScreen('/valorfin')}>Avançar</Button>
            </form>
            </div>
        </div>
    );
}
export default PacoteEnvio;