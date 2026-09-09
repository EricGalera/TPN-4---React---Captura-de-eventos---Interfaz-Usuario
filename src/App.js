import './App.css';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function App() {
  function cantidadVocales(texto) {
    let cantidad = 0;

    for (let i = 0; i < texto.length; i++) {
      if (
        texto[i] === 'a' ||
        texto[i] === 'e' ||
        texto[i] === 'i' ||
        texto[i] === 'o' ||
        texto[i] === 'u'
      ) {
        cantidad++;
      }
    }

    return cantidad;
  }

  function presion(e) {
    e.preventDefault();

    const texto = e.target.texto.value;
    const cantidad = cantidadVocales(texto);

    alert('La cantidad de vocales es: ' + cantidad);
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 10,
          padding: 4,
          textAlign: 'center',
          boxShadow: 3,
          borderRadius: 2
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Cantidad de vocales
        </Typography>

        <form onSubmit={presion}>
          <TextField
            fullWidth
            label="Ingrese un texto"
            name="texto"
            variant="outlined"
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Contar vocales
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default App;