export default function setStateByUf(uf, state){
    if(uf === 'SP'){
      state = 'São Paulo';
    }else if(uf === 'MG'){
        state = 'Minas Gerais'
      }else if(uf === 'RJ'){
        state = 'Rio de Janeiro'
      }else{
        state = 'Outro';
      }
      return state;
    }