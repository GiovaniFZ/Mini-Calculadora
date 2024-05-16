import React from 'react';
import TextField from '@mui/material/TextField';

// Componente TextField personalizado com estilos padrão
function CustomTextField(props) {
  return (
    <TextField
      {...props}
      InputProps={{ inputProps: { style: { background: '#fff' } } }}
    />
  );
}

export default CustomTextField;