import React, { useState } from 'react';

const TarjetaProducto = ({ nombreProducto, precio, descripcion, enStock }) => {
    const [cantidadStock, setCantidadStock] = useState(enStock ? 10 : 0);
    const comprarProducto = () => {
        if (cantidadStock > 0) {
        setCantidadStock(cantidadStock - 1);
        }
    };
    return (
        <div style={styles.card}>
            <h3>{nombreProducto}</h3>
            <p>${precio}</p>
            <p>{descripcion}</p>
            <p style={{ color: cantidadStock > 0 ? 'green' : 'red' }}>
                {cantidadStock > 0 ? `En Stock: ${cantidadStock}` : 'Agotado'}
            </p>
            <button 
                onClick={comprarProducto} 
                disabled={cantidadStock === 0}
                style={styles.button}
            >
                Comprar
            </button>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '15px',
        width: '200px',
        textAlign: 'center',
        margin: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    button: {
        padding: '8px 12px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default TarjetaProducto;