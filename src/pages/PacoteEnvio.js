import * as React from 'react';
import LayoutPad from "./LayoutPad"
import './Layout.css'
import { TextField, Switch, FormGroup, FormControlLabel, Button } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import { useNavigate } from 'react-router-dom';

function PacoteEnvio() {
    const layout = LayoutPad();
    // Configuração de navegação
    const navigate = useNavigate();
    function changeScreen(path) {
    navigate(path);
}
    return (
        <div className='App'>
            {layout}
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
                <label for="itensDesc">Descrição dos itens</label>
                <Textarea cols="100" rows="100" className='box' id="itensDesc" maxRows={1000}>
                </Textarea>
                </div>
                <p></p>
                <Button onClick={() => changeScreen('/valorfin')}>Avançar</Button>
            </form>
        </div>
    );
}
export default PacoteEnvio;