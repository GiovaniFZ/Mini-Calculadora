const stateByUfMap = {
  SP: 'São Paulo',
  MG: 'Minas Gerais',
  RJ: 'Rio de Janeiro',
};

export default function setStateByUf(uf) {
  return stateByUfMap[uf] || 'Outro';
}
