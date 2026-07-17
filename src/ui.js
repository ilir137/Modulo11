import {
    estaBienFormadoIBAN,
    extraerBanco,
    extraerSucursal,
    extraerDigitoControl,
    extraerNumeroCuenta,
    validarIBAN,
    extraerNombreBanco,
    obtenerSrcImagenes
} from "./motor.js";
import { divEnlaces } from "./modelo.js";

/****************************************************************
 *                                                              *
 *                                                              *
 *                          APARTADO A                          *
 *                                                              *
 *                                                              *
 ****************************************************************/

export const ponerInfoBanco = (campoIBAN, mensajes) => {
    const estaBienFormado = estaBienFormadoIBAN(campoIBAN.value);
    const codigoBanco = extraerBanco(campoIBAN.value);
    const nombreBanco = extraerNombreBanco(codigoBanco);
    const codigoSucursal = extraerSucursal(campoIBAN.value);
    const digitoControl = extraerDigitoControl(campoIBAN.value);
    const numeroCuenta = extraerNumeroCuenta(campoIBAN.value);
    const esValido = validarIBAN(campoIBAN.value);
    console.log(estaBienFormado);
    console.log(codigoBanco);
    console.log(nombreBanco);
    console.log(codigoSucursal);
    console.log(digitoControl);
    console.log(numeroCuenta);
    if (estaBienFormado && esValido) {
        mensajes.innerHTML = `<p>El IBAN introducido está bien formado.</p>
        <p>El IBAN introducido es válido.</p>
        <p>Código del banco: ${codigoBanco}</p>
        <p>Nombre del banco: ${nombreBanco}</p>
        <p>Código de la sucursal: ${codigoSucursal}</p>
        <p>Dígito de control: ${digitoControl}</p>
        <p>Número de cuenta: ${numeroCuenta}</p>`;
    } else {
        mensajes.innerHTML = `<p>El IBAN introducido no está bien formado.</p>`;
    }
}

/****************************************************************
 *                                                              *
 *                                                              *
 *                          APARTADO B                          *
 *                                                              *
 *                                                              *
 ****************************************************************/

export function mostrarEnlaces(html) {
    const regex = /<img\b[^>]*\bsrc="([^"]+)"[^>]*>/g;
    const enlaces = [];
    let match;

    while ((match = regex.exec(html)) !== null) {
        enlaces.push(match[1]);
    }

    enlaces.forEach(enlace => {
        divEnlaces.innerHTML += enlace + "<br>";
    });
}