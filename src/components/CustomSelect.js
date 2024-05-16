import React from 'react';
import Select from '@mui/material/Select';

// Componente TextField personalizado com estilos padrão
function CustomSelect(props) {
  return (
    <TextField
      {...props}
      InputProps={{ inputProps: { style: { background: '#fff' } } }}
    />
  );
}

export default CustomSelect;