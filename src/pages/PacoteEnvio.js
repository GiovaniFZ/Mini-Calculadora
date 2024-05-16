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
                <TextField
                    required
                    id="peso"
                    label="Peso (g)"
                    type='number'
                    placeholder="Ex: 500g"
                />
                <TextField
                    required
                    id="altura"
                    label="Altura (cm)"
                    type='number'
                    placeholder="Ex: 50cm"
                />
                <TextField
                    required
                    id="largura"
                    label="Largura (cm)"
                    type='number'
                    placeholder="Ex: 40cm"
                />
                <TextField
                    required
                    id="comp"
                    label="Comprimento (cm)"
                    type='number'
                    placeholder="Ex: 50cm"
                />
                <FormGroup>
                    <FormControlLabel control={<Switch />} label="Logística reversa" />
                    <FormControlLabel control={<Switch defaultChecked />} label="Aviso de recebimento" />
                    <FormControlLabel control={<Switch />} label="Mãos próprias" />
                </FormGroup>
                <TextField
                    required
                    id="comp"
                    label="Valor da mercadoria"
                    type='number'
                    placeholder="Ex: 50cm"
                />
                <TextField
                    required
                    id="comp"
                    label="Quantidade de itens"
                    type='number'
                    color="primary"
                    placeholder="Ex: 3"
                />
                <p></p>
                <label for="itensDesc">Descrição dos itens</label>
                <Textarea cols="100" rows="100" className='box' id="itensDesc" maxRows={1000}>
                </Textarea>
                <p></p>
                <Button onClick={() => changeScreen('/valorfin')}>Avançar</Button>
            </form>
        </div>
    );
}
export default PacoteEnvio;