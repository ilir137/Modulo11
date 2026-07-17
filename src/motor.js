import { isValidIBAN } from "ibantools";
import { codigos, nombres } from "./motor.helper.js";

/****************************************************************
 *                                                              *
 *                                                              *
 *                          APARTADO A                          *
 *                                                              *
 *                                                              *
 ****************************************************************/

export const estaBienFormadoIBAN = (iban) => {
    const regex = /^[A-Z]{2}\d{2}(\s|-)?(\d{4}(\s|-)?){2}\d{2}(\s|-)?\d{10}$/;
    return regex.test(iban);
}

export const extraerBanco = (iban) => {
    // Elimina espacios y guiones
    const ibanLimpio = iban.replace(/[\s-]/g, "");

    const regex = /^[A-Z]{2}\d{22}$/;
    if (regex.test(ibanLimpio)) {
        return ibanLimpio.substring(4, 8);
    } else {
        return null;
    }
}

export const extraerSucursal = (iban) => {
    // Elimina espacios y guiones
    const ibanLimpio = iban.replace(/[\s-]/g, "");

    const regex = /^[A-Z]{2}\d{22}$/;
    if (regex.test(ibanLimpio)) {
        return ibanLimpio.substring(8, 12);
    } else {
        return null;
    }
}

export const extraerDigitoControl = (iban) => {
    // Elimina espacios y guiones
    const ibanLimpio = iban.replace(/[\s-]/g, "");

    const regex = /^[A-Z]{2}\d{22}$/;
    if (regex.test(ibanLimpio)) {
        return ibanLimpio.substring(12, 14);
    } else {
        return null;
    }
}

export const extraerNumeroCuenta = (iban) => {
    // Elimina espacios y guiones
    const ibanLimpio = iban.replace(/[\s-]/g, "");

    const regex = /^[A-Z]{2}\d{22}$/;
    if (regex.test(ibanLimpio)) {
        return ibanLimpio.substring(14, 24);
    } else {
        return null;
    }
}

export const validarIBAN = (iban) => {
    // Elimina espacios y guiones
    const ibanLimpio = iban.replace(/[\s-]/g, "");

    const regex = /^[A-Z]{2}\d{22}$/;
    if (regex.test(ibanLimpio)) {
        if (isValidIBAN(ibanLimpio)) {
            console.log("IBAN válido");
            return true;
        } else {
            console.log("IBAN inválido");
            return false;
        }
    } else {
        return false;
    }
}

export const extraerNombreBanco = (codigo) => {
    const index = codigos.indexOf(codigo);
    console.log(index);
    return index !== -1 ? nombres[index] : "Código de banco no encontrado";
}

/****************************************************************
 *                                                              *
 *                                                              *
 *                          APARTADO B                          *
 *                                                              *
 *                                                              *
 ****************************************************************/

export function obtenerSrcImagenes(html) {
    const regex = /<img\b[^>]*\bsrc="([^"]+)"[^>]*>/g;
    const enlaces = [];
    let match;

    while ((match = regex.exec(html)) !== null) {
        enlaces.push(match[1]);
    }

    return enlaces;
}