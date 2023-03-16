import React,{useState} from "react";

export default function Componenteb(){
    const [stateConec ,setStateConec]=useState(false);

    const conectado=()=>{
      setStateConec(!stateConec);
    }
    return(
        <div>
        <p>La persona esta conectado :{stateConec?"Conectado":"No disponible"}</p>
          <button onClick={conectado}>
                Conectado/No Disponible
            </button>
        </div>
   );  
}

