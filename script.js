document.addEventListener("DOMContentLoaded", function() {
    var armarios = document.getElementsByClassName("armario");
  
    for (var i = 0; i < armarios.length; i++) {
      armarios[i].addEventListener("click", function(event) {
        toggleState(event.target);
      });
      
      setInterval(function() {
        toggleState(armarios[i]);
      }, 3000); // Altera o status a cada 3 segundos
    }
  
    function toggleState(armario) {
      var estado = armario.querySelector(".estado");
      if (estado.textContent === "Livre") {
        estado.textContent = "Ocupado";
        armario.classList.remove("livre");
        armario.classList.add("ocupado");
      } else if (estado.textContent === "Ocupado") {
        estado.textContent = "Manutenção";
        armario.classList.remove("ocupado");
        armario.classList.add("manutencao");
      } else {
        estado.textContent = "Livre";
        armario.classList.remove("manutencao");
        armario.classList.add("livre");
      }
    }
  });