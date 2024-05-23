// Función para leer el archivo XLSX y actualizar los precios en el HTML
function actualizarPrecios() {
    // Ruta del archivo XLSX
    var archivo = 'ListaPreciosAlim2.xlsx';

    // Carga del archivo XLSX
    var xhr = new XMLHttpRequest();
    xhr.open('GET', archivo, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function (e) {
        var arraybuffer = xhr.response;

        // Convertir el archivo a un objeto XLSX
        var data = new Uint8Array(arraybuffer);
        var workbook = XLSX.read(data, { type: 'array' });

        // Obtener la primera hoja de cálculo
        var firstSheet = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[firstSheet];

        // Obtener los datos de las celdas con precios
        var precios = XLSX.utils.sheet_to_json(worksheet, { header: 'B', raw: true });

        // Actualizar los precios en el HTML
        for (var i = 0; i < precios.length; i++) {
            var precio = precios[i].precio; // Acceder al valor de la propiedad "precio"

            // Buscar el elemento HTML correspondiente y actualizar el precio
            var elementoPrecio = document.querySelector('#producto' + (i + 1) + ' .preciosProductos');
            if (elementoPrecio) {
                elementoPrecio.innerText = precio;
            }
        }
    };

    xhr.send();
}

// Llamar a la función para actualizar los precios cuando la página esté lista
document.addEventListener('DOMContentLoaded', function () {
    actualizarPrecios();
});


// Llamar a la función para actualizar los precios cuando la página esté lista
document.addEventListener('DOMContentLoaded', function () {
    actualizarPrecios();
});
