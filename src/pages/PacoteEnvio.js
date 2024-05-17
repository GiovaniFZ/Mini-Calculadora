import { useState } from "react";
import LayoutPad from "./LayoutPad"
import './Layout.css'
import { TextField, Switch, FormGroup, FormControlLabel, Button } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import { useNavigate, useLocation } from 'react-router-dom';


function PacoteEnvio() {
    const layout = LayoutPad();

    // Configuração de variáveis do usuário
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');
    const [reverse, setReverse] = useState(false);
    const [ar, setAr] = useState(true);
    const [own_hands, setOwnHands] = useState(false);
    const [amount, setAmount] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    // Configuração dos dados recebidos
    let data = useLocation().state;

    // Configuração de navegação
    const navigate = useNavigate();
    function handleClick(path) {
        // Jsons
        const information={
            amount, quantity, description
        }

        const pack= {
            weight, height, width,length, reverse, ar, own_hands, information
        }

        let combinedJsons = {
            data,
            "information": information,
            "package": pack
        }
        console.log(combinedJsons)
        navigate(path);
    }
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
                            placeholder="Peso em gramas"
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                        />
                        <TextField
                            required
                            id="altura"
                            label="Altura (cm)"
                            type='number'
                            placeholder="Altura em cm"
                            value={height}
                            onChange={e => setHeight(e.target.value)}
                        />
                        <TextField
                            required
                            id="largura"
                            label="Largura (cm)"
                            type='number'
                            placeholder="Largura em cm"
                            value={width}
                            onChange={e => setWidth(e.target.value)}
                        />
                        <TextField
                            required
                            id="comp"
                            label="Comprimento (cm)"
                            type='number'
                            placeholder="Comprimento em cm"
                            value={length}
                            onChange={e => setLength(e.target.value)}
                        />
                    </div>
                    <div className='packageField'>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={reverse}
                                        onChange={e => setReverse(e.target.checked)} 
                                        />
                                }
                                label="Logística reversa" 
                                />
                            <FormControlLabel
                                control={
                                    <Switch 
                                    defaultChecked 
                                    checked={ar}
                                    onChange={e => setAr(e.target.checked)
                                        } 
                                    />
                                }
                                label="Aviso de recebimento" 
                                />
                            <FormControlLabel 
                            control={
                            <Switch 
                            checked={own_hands} 
                            onChange={e => setOwnHands(e.target.checked)}
                            />
                            } 
                            label="Mãos próprias" 
                            />
                        </FormGroup>
                    </div>
                    <div className='packageField'>
                        <TextField
                            required
                            id="comp"
                            label="Valor da mercadoria"
                            type='number'
                            placeholder="Digite o valor do pacote em R$"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                        <TextField
                            required
                            id="comp"
                            label="Quantidade de itens"
                            type='number'
                            color="primary"
                            placeholder="Digite a quantidade de itens"
                            InputProps={{ inputProps: { style: { color: '#fff' } } }}
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                        />
                        <label for="itensDesc" className='box_aux'>Descrição dos itens</label>
                        <Textarea
                            className='box'
                            cols="100"
                            rows="100"
                            id="itensDesc"
                            maxRows={1000}
                            minRows={10}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        >
                        </Textarea>
                    </div>
                    <Button 
                    variant="contained" 
                    onClick={() => handleClick('/valorfin')}>Avançar
                    </Button>
                </form>
            </div>
        </div>
    );
}
export default PacoteEnvio;