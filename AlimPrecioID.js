// Obtiene todos los elementos con la clase 'alim-item' y los almacena en una variable
var elementos = document.getElementsByClassName('alim-item');

// Este bucle for itera sobre todos los elementos y les asigna un ID único a cada uno.
for (var i = 0; i < elementos.length; i++) {
    elementos[i].id = 'producto' + (i + 1);
}