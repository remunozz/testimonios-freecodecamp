import React from 'react';

function Testimonio (){
    return (
        <div className = 'contenedor-testimonio'>
          <img 
            className = 'imagen-testimonio'
            src={require('../imagenes/testimonio-emma.png')} 
            alt='Foto de Emma'/>
        </div>
    );
}

export default Testimonio;