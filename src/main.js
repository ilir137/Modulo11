import "./style.css";
import { formulario, campoIBAN, mensajes, formularioB, campoURL } from "./modelo.js";
import { ponerInfoBanco, mostrarEnlaces } from "./ui.js";
import { obtenerSrcImagenes } from "./motor.js";

/****************************************************************
 *                                                              *
 *                                                              *
 *                          APARTADO A                          *
 *                                                              *
 *                                                              *
 ****************************************************************/

// IBAN Válido: ES91 2100 0418 45 0200051332

if (
    formulario !== null && campoIBAN !== null &&
    formulario !== undefined && campoIBAN !== undefined
) {
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la pagina se recargue
    ponerInfoBanco(campoIBAN, mensajes);
});
}

/****************************************************************
 *                                                              *
 *                                                              *
 *                          APARTADO B                          *
 *                                                              *
 *                                                              *
 ****************************************************************/

if (
    formularioB !== null && campoURL !== null &&
    formularioB !== undefined && campoURL !== undefined
) {
formularioB.addEventListener("submit", function(event) {
    event.preventDefault();
    const html = campoURL.value;

    const imagenes = obtenerSrcImagenes(html);

    console.log(imagenes);
    mostrarEnlaces(html);
});
}
