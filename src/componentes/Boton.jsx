import React from 'react';
import '../hojaestilos/boton.css';

function MyButton() {

  function handleClick() {
    alert('¡Me hiciste clic!');
  }


  return (
    //<button>Soy un botón</button>
    <button class="boton" onClick={handleClick}>Hazme clic</button>
        
      
    
  )
}
export default MyButton