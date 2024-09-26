import './App.css';
import freecodecampImagen from "./imagenes/freecodecamp-logo.png"

function App() {
  return (
    <div className="App">
        <div className='freeCodecampLogo-contenedor'>
            <img
              src={freecodecampImagen} className="freecodecamp-logo"
            />
            
        </div>
        <div className="contenedor-calculadora">
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
          <div className="fila"></div>
        </div>
    </div>
  );
}

export default App;
