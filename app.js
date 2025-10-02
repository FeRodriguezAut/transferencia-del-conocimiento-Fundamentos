let producto = prompt("Ingrese producto solicitado:");
let precio = parseFloat(prompt("Ingrese precio del producto:"));
let cantidad = parseInt(prompt("Ingrese cantidad solicitada:"));
let total = precio * cantidad;
alert("El total a pagar por " + cantidad + " unidades de " + producto + " es: $" + total);
