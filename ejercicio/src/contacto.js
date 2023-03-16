import React from "react";
import Componenteb from "./componenteb";

export default function Contacto(){
   
    let nombre ="Rubén";
    let apellido="Rodríguez";
    let email ="rubenro@gmail.com";
    let conectado=false;
    
   
    return(
        <div>
            Me llamo {nombre}  {apellido} y mi email es {email}
            {conectado}
            <Componenteb></Componenteb>
        </div>

    );
}