document.addEventListener('DOMContentLoaded', function () {
    // Obtén referencias a los elementos
    var horariosLink = document.getElementById('horariosLink');
    var horariosDiv = document.getElementById('horariosDiv');

    // Agrega un evento de clic al enlace "HORARIOS"
    horariosLink.addEventListener('click', function (event) {
      event.preventDefault(); // Evita que el enlace se comporte como un enlace normal

      // Cambia la visibilidad del div "horariosDiv"
      if (horariosDiv.style.display === 'none' || horariosDiv.style.display === '') {
        horariosDiv.style.display = 'block';
      } else {
        horariosDiv.style.display = 'none';
      }
    });

    // Agrega un evento de clic al documento para ocultar el div "horariosDiv"
    document.addEventListener('click', function (event) {
      var isHorariosLink = event.target === horariosLink || horariosLink.contains(event.target);
      var isHorariosDiv = event.target === horariosDiv || horariosDiv.contains(event.target);

      // Oculta el div "horariosDiv" si haces clic en otro lugar de la pantalla
      if (!isHorariosLink && !isHorariosDiv) {
        horariosDiv.style.display = 'none';
      }
    });
  });
