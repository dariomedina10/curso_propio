import React from 'react';
import { useState } from 'react';
import '../hojaestilos/boton.css';

function MyButton() {

const [count, setCount] = useState(0);

  function handleClick() {
     setCount(count + 1);
   // alert('¡Me hiciste clic!'); probando
  }


  return (
    //<button>Soy un botón</button>
    <button class="boton" onClick={handleClick}>Hiciste clic {count} veces</button>
      
        
      
    
  )
}
export default MyButton