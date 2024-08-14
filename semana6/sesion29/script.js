import {saludar, notificacion} from "./modulo.js";
import { suma } from "./operacion.js";

console.log(saludar("Futuras desarrolladoras"));

alert(notificacion("No hay mada que mostrar"));


let dato1=parseInt(prompt("ingrese el valor de a:"));
let dato2=parseInt (prompt("ingrese el valor de b:"));
let resultado = suma (dato1, dato2);

document.getElementById("operador").innerHTML = resultado;
