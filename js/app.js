 function mostrarAstros() {

            let astroSeleccionado = document.getElementById("astros").value;
            console.log(astroSeleccionado);
            document.getElementById("nave").src = astroSeleccionado;

        }
        function acercaDeSistema() {
            alert("Programado por Anny");

        }
        function terminar() {
            self.close();

        }