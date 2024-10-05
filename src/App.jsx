import './App.css'
import TarjetaProducto from './componentes/TarjetaUsuario';

function App() {
  return (
    <div>
      <h1 style={styles.title}>TechStore - Tu destino para la mejor tecnología</h1>
      <div style={styles.container}>
        <TarjetaProducto
          nombreProducto="Laptop"
          precio={1500}
          descripcion="Una potente laptop para trabajar y jugar."
          enStock={true}
        />
        <TarjetaProducto
          nombreProducto="Smartphone"
          precio={800}
          descripcion="Un smartphone de última generación."
          enStock={false}
        />
        <TarjetaProducto
          nombreProducto="Auriculares"
          precio={200}
          descripcion="Auriculares con cancelación de ruido."
          enStock={true}
        />
        <TarjetaProducto
          nombreProducto="Monitor"
          precio={300}
          descripcion="Monitor 4K para una experiencia visual increíble."
          enStock={true}
        />
      </div>
    </div>
  );
}

const styles = {
  title: {
    textAlign: 'center',
    margin: '20px 0',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    color: '#00f',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
  },
};

export default App
