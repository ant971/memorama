var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);
// EJERCICIO: concatena grupoTarjetas consigo misma para duplicar
// los valores
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);
function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}
function repartetarjetas(){
  var mesa= document.querySelector("#mesa");
  var tarjetasBarajadas= barajaTarjetas();
  document.getElementById("mesa").innerHTML="";
  tarjetasBarajadas.forEach(function(elemento){
      var tarjeta= document.createElement("div");

      tarjeta.innerHTML= "<div class='tarjeta'>"+
      "<div class='tarjeta_contenido'>"
      elemento +
      "</div>"
    "</div>";
      mesa.appendChild(tarjeta);
  });
}
function descubrir() {
  this.classList.add("descubierta");
}
repartetarjetas(); 
document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);
});
