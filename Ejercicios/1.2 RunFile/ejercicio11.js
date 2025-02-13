/*11. Escribe un bloque de código que intente convertir una cadena
 a un número y que maneje cualquier error que pueda ocurrir */



let cadena = "123aeiou"; // Cadena que no se puede convertir a número

try {
    let valorConvertido = Number(cadena);
    if (isNaN(valorConvertido)) {
        throw new Error("No se pudo convertir el cadena a número");
    }
    console.log(valorConvertido);
} catch (error) {
    console.error("Error:", error.message);
}
