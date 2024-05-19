import { useState } from "react";
import LayoutPad from "./LayoutPad"
import './Layout.css'
import { TextField, Switch, FormGroup, FormControlLabel, Button, FormControl, FormHelperText } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";


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
    const [touched, setTouched] = useState(false);
    const [validate, setValidate] = useState(false);
    const [count, setCount] = useState('');
    const [checker, setChecker] = useState('');


    // Configuração dos dados recebidos
    let data = useLocation().state;

    // Configuração de navegação
    const navigate = useNavigate();
    function handleClick(path) {
        // Jsons
        const information = {
            amount, quantity, description
        }

        const pack = {
            weight, height, width, length, reverse, ar, own_hands, information
        }

        let x = {
            ...data, // inclui diretamente os dados de data
            "package": pack
        }

        // Requisição para API
        let jsonString = JSON.stringify(x);
        axiosPost(jsonString, path);
    }

    // Configuração de post usando Axios
    function axiosPost(jsonString, path) {
        let melhor;
        const url = 'https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate'
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post(url, jsonString, headers)
            .then(function (response) {
                melhor = returnBest(response.data.shipment);
                // Navigate
                navigate(path, { state: melhor });
            })
            .catch(function (error) { // Tratamento do erro
                console.log(error);
            });
    }

    // Função para retornar o menor frete, valor e dias de entrega
    function returnBest(arr) {
        let menor_frete = arr.reduce((minObj, currentObj) => {
            return currentObj.price < minObj.price ? currentObj : minObj;
        }, arr[0]);

        return menor_frete;
    }

    // Função para tratar o comprimento da descrição
    function validateDescription() {
        if (description.length < 10 || description.length > 1000) {
            setValidate(true);
            setChecker('Mínimo: 10 caracteres!')
        } else {
            setValidate(false);
            setChecker('');
        }
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
                            onBlur={() => setTouched(true)}
                            onFocus={() => setTouched(false)}
                            error={touched && weight === ''}
                            helperText={touched && weight === '' ? 'Peso é obrigatório!' : ''}
                        />
                        <TextField
                            required
                            id="altura"
                            label="Altura (cm)"
                            type='number'
                            placeholder="Altura em cm"
                            value={height}
                            onChange={e => setHeight(e.target.value)}
                            onBlur={() => setTouched(true)}
                            onFocus={() => setTouched(false)}
                            error={touched && height === ''}
                            helperText={touched && height === '' ? 'Altura é obrigatória!' : ''}
                        />
                        <TextField
                            required
                            id="largura"
                            label="Largura (cm)"
                            type='number'
                            placeholder="Largura em cm"
                            value={width}
                            onChange={e => setWidth(e.target.value)}
                            onBlur={() => setTouched(true)}
                            onFocus={() => setTouched(false)}
                            error={touched && width === ''}
                            helperText={touched && width === '' ? 'Largura é obrigatória!' : ''}
                        />
                        <TextField
                            required
                            id="comp"
                            label="Comprimento (cm)"
                            type='number'
                            placeholder="Comprimento em cm"
                            value={length}
                            onChange={e => setLength(e.target.value)}
                            onBlur={() => setTouched(true)}
                            onFocus={() => setTouched(false)}
                            error={touched && length === ''}
                            helperText={touched && length === '' ? 'Comprimento é obrigatório!' : ''}
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
                            placeholder="Valor do pacote em R$"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                            onBlur={() => setTouched(true)}
                            onFocus={() => setTouched(false)}
                            error={touched && amount === ''}
                            helperText={touched && amount === '' ? 'Valor é obrigatório!' : ''}
                        />
                        <TextField
                            required
                            id="comp"
                            label="Quantidade de itens"
                            type='number'
                            color="primary"
                            placeholder="Quantidade de itens"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                            onBlur={() => setTouched(true)}
                            onFocus={() => setTouched(false)}
                            error={touched && quantity === ''}
                            helperText={touched && quantity === '' ? 'Quantidade é obrigatória!' : ''}
                        />
                        <div className='box_aux'>
                            <FormControl>
                                <FormHelperText className="teste">Descrição dos itens</FormHelperText>
                                <Textarea
                                    className='box'
                                    cols="100"
                                    rows="100"
                                    id="itensDesc"
                                    value={description}
                                    onChange={e => { setDescription(e.target.value); setCount(e.target.value.length) }}
                                    onBlur={() => { setTouched(true); validateDescription() }}
                                    onFocus={() => setTouched(false)}
                                    error={touched && validate}
                                    placeholder="Mínimo: 10 caracteres"
                                >
                                </Textarea>
                                <FormHelperText>Caracteres: {count}/1000</FormHelperText>
                                <FormHelperText>{checker}</FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                    <div className="but">
                    <Button
                        variant="contained"
                        onClick={() => handleClick('/valorfin')}
                        disabled={!weight || !height || !width || !length || !amount || !quantity || !description}
                    >Avançar
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default PacoteEnvio;