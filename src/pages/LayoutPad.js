import * as React from 'react';
import logo from '../assets/logo2.png';
import './Layout.css'

function LayoutPad() {
    return (
        <div className='App'>
            <img src={logo} className="App-logo" alt="logo_postaqui" />
            <h1 class="titulo">Calculadora Postaqui</h1>
        </div>
    );
}

export default LayoutPad;