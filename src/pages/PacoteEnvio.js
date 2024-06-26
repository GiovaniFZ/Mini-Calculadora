import { useState } from "react";
import LayoutPad from "./LayoutPad"
import './Layout.css'
import { TextField, Switch, FormGroup, FormControlLabel, Button, FormControl, FormHelperText } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import Routing from '../components/Routing.js';
import CircularProgress from "@mui/material/CircularProgress";
import VerifyTouch from "./VerifyTouch";


function PacoteEnvio() {
    const layout = LayoutPad();

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
    const [validate, setValidate] = useState(false);
    const [count, setCount] = useState('');
    const [checker, setChecker] = useState('');
    const [loading, setLoading] = useState(false);
    const { goToOrigem, goToDest } = Routing();
    const { touched, markTouched, markUntouched } = VerifyTouch();

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

        let jsonPack = {
            ...data, // inclui diretamente os dados de data
            "package": pack
        }

        axiosPost(path, jsonPack);
    }

    // Configuração de post usando Axios
    function axiosPost(path, jsonPack) {
        setLoading(true);
        // Tranformando em String
        let jsonString = JSON.stringify(jsonPack);
        let melhor;
        const url = 'https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate'
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post(url, jsonString, headers)
            .then(function (response) {
                melhor = returnBest(response.data.shipment);
                const arr = [melhor, jsonPack]
                setLoading(false);
                // Navigate
                navigate(path, { state: arr });
            })
            .catch(function (error) { // Tratamento do erro
                console.log(error);
                setLoading(false);
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
        markTouched();
        if (description.length < 10 || description.length > 1000) {
            setValidate(true);
            setChecker('Mínimo: 10 caracteres!')
        } else {
            setValidate(false);
            setChecker('');
        }
    }

    function handleDestClick() {
        const dataSender = data.sender;
        goToDest(dataSender);
    }

    return (
        <div className='App'>
            <div className="formsTop">
                <form id="pathForm" className='paths'>
                    <Button color="secondary" onClick={goToOrigem}>Origem</Button>
                    <p>{data.sender.fullname} - {data.sender.cpf}</p>
                    <p>{data.sender.address.cep}</p>
                    <p>{data.sender.address.street} - {data.sender.address.neighborhood}</p>
                    <p>Nº{data.sender.address.number} {data.sender.address.complement}</p>
                    <p>{data.sender.address.city}-{data.sender.address.uf}</p>
                </form>
                <form id="pathForm" className='paths'>
                    <Button color="secondary" onClick={handleDestClick}>Destino</Button>
                    <p>{data.receiver.fullname} - {data.receiver.cpf}</p>
                    <p>{data.receiver.address.cep}</p>
                    <p>{data.receiver.address.street} - {data.receiver.address.neighborhood}</p>
                    <p>Nº{data.receiver.address.number} {data.receiver.address.complement}</p>
                    <p>{data.receiver.address.city}-{data.receiver.address.uf}</p>
                </form>
            </div>
            {layout}
            <div className='background'>
                <form id="calcForm" className="dados">
                    <h1>Dados do pacote</h1>
                    <div className='packageField'>
                        <TextField
                            required
                            disabled={loading}
                            id="peso"
                            label="Peso (g)"
                            type='number'
                            placeholder="Peso em gramas"
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                            onBlur={markTouched}
                            onFocus={markUntouched}
                            error={touched && weight === ''}
                            helperText={touched && weight === '' ? 'Peso é obrigatório!' : ''}
                            InputProps={{
                                inputProps: { min: 1 }
                              }}
                        />
                        <TextField
                            required
                            id="altura"
                            disabled={loading}
                            label="Altura (cm)"
                            type='number'
                            placeholder="Altura em cm"
                            value={height}
                            onChange={e => setHeight(e.target.value)}
                            onBlur={markTouched}
                            onFocus={markUntouched}
                            error={touched && height === ''}
                            helperText={touched && height === '' ? 'Altura é obrigatória!' : ''}
                            InputProps={{
                                inputProps: { min: 1 }
                              }}
                        />
                        <TextField
                            required
                            id="largura"
                            disabled={loading}
                            label="Largura (cm)"
                            type='number'
                            placeholder="Largura em cm"
                            value={width}
                            onChange={e => setWidth(e.target.value)}
                            onBlur={markTouched}
                            onFocus={markUntouched}
                            error={touched && width === ''}
                            helperText={touched && width === '' ? 'Largura é obrigatória!' : ''}
                            InputProps={{
                                inputProps: { min: 1 }
                              }}
                        />
                        <TextField
                            required
                            id="comp"
                            label="Comprimento (cm)"
                            disabled={loading}
                            type='number'
                            placeholder="Comprimento em cm"
                            value={length}
                            onChange={e => setLength(e.target.value)}
                            onBlur={markTouched}
                            onFocus={markUntouched}
                            error={touched && length === ''}
                            helperText={touched && length === '' ? 'Comprimento é obrigatório!' : ''}
                            InputProps={{
                                inputProps: { min: 1 }
                              }}
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
                            disabled={loading}
                            id="comp"
                            label="Valor da mercadoria"
                            type='number'
                            placeholder="Valor do pacote em R$"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                            onBlur={markTouched}
                            onFocus={markUntouched}
                            error={touched && amount === ''}
                            helperText={touched && amount === '' ? 'Valor é obrigatório!' : ''}
                            InputProps={{
                                inputProps: { min: 1 }
                              }}
                        />
                        <TextField
                            required
                            disabled={loading}
                            id="comp"
                            label="Quantidade de itens"
                            type='number'
                            color="primary"
                            placeholder="Quantidade de itens"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                            onBlur={markTouched}
                            onFocus={markUntouched}
                            error={touched && quantity === ''}
                            helperText={touched && quantity === '' ? 'Quantidade é obrigatória!' : ''}
                            InputProps={{
                                inputProps: { min: 1 }
                              }}
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
                                    onBlur={() => validateDescription()}
                                    onFocus={markUntouched}
                                    error={touched && validate}
                                    placeholder="Mínimo: 10 caracteres"
                                >
                                </Textarea>
                                <FormHelperText>Caracteres: {count}/1000</FormHelperText>
                                <FormHelperText error>{checker}</FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                    <div className="but">
                        <Button
                            variant="contained"
                            disabled={!weight || !height || !width || !length || !amount || !quantity || validate || !description}
                            onClick={() => handleClick('/valorfin')}
                        >Avançar
                        </Button>
                    </div>
                    <div className='progress'>
                        {loading && (
                            <CircularProgress
                                color='secondary'
                            />
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
export default PacoteEnvio;