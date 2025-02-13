/*08. Agrega un método al objeto creado anteriormente 
e imprima una descripción del mismo*/


let protectorSolar = {
    nombre: "Protector Solar SPF 30",
    marca: "Nivea",
    cantidad: "150ml",
    tipo: "Bloqueador solar"
};

protectorSolar.descripcion = function() {
    return `Este producto es un ${this.nombre} de la marca ${this.marca}, con una cantidad de ${this.cantidad},
     y es del tipo ${this.tipo}.`;
};

console.log(protectorSolar.descripcion());
