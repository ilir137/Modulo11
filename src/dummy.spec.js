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

describe("dummy specs", () => {
    it("should pass spec", () => {
        // Arrange

        // Act

        // Assert
        expect(true).toBeTruthy();
    });
});

describe("estaBienFormadoIBAN", () => {
    test.each([
        ["ES91 2100 0418 45 0200051332", true],
        ["ES9121000418450200051332", true],
        ["ES91-2100-0418-45-0200051332", true],
        ["ES91 2100 0418 45 020005133", false],
        ["ES91 2100 0418 45 02000513322", false],
        ["ES91 2100 0418 45 020005133A", false],
        ["ES91 2100 0418 45 020005133@", false], // Son 7
    ])("Debería devolver %s para el IBAN %s", (iban, expected) => {
        // Arrange

        // Act
        const result = estaBienFormadoIBAN(iban);

        // Assert
        expect(result).toBe(expected);
    });
});

describe("extraerBanco", () => {
    test.each([
        ["ES91 2100 0418 45 0200051332", "2100"],
        ["ES9121000418450200051332", "2100"],
        ["ES91-0081-0418-45-0200051332", "0081"],
        ["ES91 2100 0418 45 020005133", null],
        ["ES91 2100 0418 45 02000513322", null],
        ["ES91 2100 0418 45 020005133A", null],
        ["ES91 2100 0418 45 020005133@", null], // Son 7
    ])("Debería devolver %s para el IBAN %s", (iban, expected) => {
        // Arrange

        // Act
        const result = extraerBanco(iban);

        // Assert
        expect(result).toBe(expected);
    });
});

describe("extraerSucursal", () => {
    test.each([
        ["ES91 2100 0418 45 0200051332", "0418"],
        ["ES9121000418450200051332", "0418"],
        ["ES91-0081-0418-45-0200051332", "0418"],
        ["ES91 2100 0418 45 020005133", null],
        ["ES91 2100 0418 45 02000513322", null],
        ["ES91 2100 0418 45 020005133A", null],
        ["ES91 2100 0418 45 020005133@", null], // Son 7
    ])("Debería devolver %s para el IBAN %s", (iban, expected) => {
        // Arrange

        // Act
        const result = extraerSucursal(iban);

        // Assert
        expect(result).toBe(expected);
    });
});

describe("extraerDigitoControl", () => {
    test.each([
        ["ES91 2100 0418 45 0200051332", "45"],
        ["ES9121000418450200051332", "45"],
        ["ES91-0081-0418-45-0200051332", "45"],
        ["ES91 2100 0418 45 020005133", null],
        ["ES91 2100 0418 45 02000513322", null],
        ["ES91 2100 0418 45 020005133A", null],
        ["ES91 2100 0418 45 020005133@", null], // Son 7
    ])("Debería devolver %s para el IBAN %s", (iban, expected) => {
        // Arrange

        // Act
        const result = extraerDigitoControl(iban);

        // Assert
        expect(result).toBe(expected);
    });
});

describe("extraerNumeroCuenta", () => {
    test.each([
        ["ES91 2100 0418 45 0200051332", "0200051332"],
        ["ES9121000418450200051332", "0200051332"],
        ["ES91-0081-0418-45-0200051332", "0200051332"],
        ["ES91 2100 0418 45 020005133", null],
        ["ES91 2100 0418 45 02000513322", null],
        ["ES91 2100 0418 45 020005133A", null],
        ["ES91 2100 0418 45 020005133@", null], // Son 7
    ])("Debería devolver %s para el IBAN %s", (iban, expected) => {
        // Arrange

        // Act
        const result = extraerNumeroCuenta(iban);

        // Assert
        expect(result).toBe(expected);
    });
});

describe("validarIBAN", () => {
    test.each([
        ["ES91 2100 0418 45 0200051332", true],
        ["ES9121000418450200051332", true],
        ["ES91-2100-0418-45-0200051332", true],
        ["ES91 2100 0418 45 020005133", false],
        ["ES91 2100 0418 47 02000513322", false],
        ["ES91 2100 0418 45 020005133A", false],
        ["ES91 2100 0418 45 020005133@", false], // Son 7
    ])("Debería devolver %s para el IBAN %s", (iban, expected) => {
        // Arrange

        // Act
        const result = validarIBAN(iban);

        // Assert
        expect(result).toBe(expected);
    });
});

describe("extraerNombreBanco", () => {
    test.each([
        ["2100", "Caixabank"],
        ["0081", "Banco de Sabadell"],
        ["9999", "Código de banco no encontrado"],
        ["0000", "Código de banco no encontrado"],
        ["1234", "Código de banco no encontrado"],
    ])("Debería devolver %s para el código de banco %s", (codigo, expected) => {
        // Arrange

        // Act
        const result = extraerNombreBanco(codigo);

        // Assert
        expect(result).toBe(expected);
    });
});

describe("obtenerSrcImagenes", () => {
    test.each([
        [
            '<img src="https://example.com/image1.jpg" alt="Image 1"><img src="https://example.com/image2.png" alt="Image 2">',
            ["https://example.com/image1.jpg", "https://example.com/image2.png"]
        ],
        [
            '<div><img src="https://example.com/image3.gif" alt="Image 3"></div>',
            ["https://example.com/image3.gif"]
        ],
        [
            '<p>No images here!</p>',
            []
        ],
        [
            '<img src="https://example.com/image4.jpg"><img src="https://example.com/image5.png">',
            ["https://example.com/image4.jpg", "https://example.com/image5.png"]
        ],
    ])("Debería devolver %s para el HTML %s", (html, expected) => {
        // Arrange

        // Act
        const result = obtenerSrcImagenes(html);

        // Assert
        expect(result).toEqual(expected);
    });
});
