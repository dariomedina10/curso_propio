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
        <div>
      <h1>Contadores que se actualizan juntos</h1>
     <button class="boton" count={count} onClick={handleClick}>Hiciste clic {count} veces</button> 
     <br></br>
     <br></br>
     <button class="boton" count={count} onClick={handleClick}>Hiciste clic {count} veces</button> 

    </div>   
    
      
        
      
    
  )
}
export default MyButton