// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te amo, te amo, te amo", time: 0.55 },
  { text: "Real hasta la muerte oíste bebé", time: 7.06 },
  { text: "Jesús me tienes pensando en esa noche, que hicimos el amor", time: 9.66 },
  { text: "El diablo me tiene pensando en esa noche, en que perdí tu amor", time: 17.65 },
  { text: "Te perdí a ti y perdí mi alma, me está matando el dolor", time: 23.02 },
  { text: "No he podido llegar al cielo, porque tú tienes mi corazón", time: 27.72 },
  { text: "Amor de gangster, pasión de gangster, baby déjame amarte", time: 34.11 },
  { text: "Déjame devorarte como en los tiempos de antes", time: 37.66 },
  { text: "Princesa yo te amo, bebé te necesito", time: 40.48 },
  { text: "Y mientras más pasa el tiempo más te sigo extrañando", time: 48.44 },
  { text: "Mi reina yo te amo, bebé te necesito", time: 53.06 },
  { text: "Y el tiempo sigue corriendo, y yo sigo agonizando Oh! Oh!", time: 59.52 },
  { text: "Yo no puedo dormir solo", time: 65.38 },
  { text: "En brazos de una extraña y tus recuerdos no se van", time: 66.1 }  ,
  { text: "Yo me acuerdo yo en mis boxer polo", time: 67.9 },
  { text: "Y tú acostada en mi cama y Victoria Secret era tu hot pant", time: 71.15 },
  { text: "Desenmoña mientras yo rompo el fili", time: 73.37 },
  { text: "Bebiendo codeína con Jolly", time: 75.59 },
  { text: "Cenizas hay donde hubo fuego", time: 79.46 },
  { text: "Me pones necio como a Romeo", time: 82.17 },
  { text: "Si es real, tatúate mi nombre", time: 85.04 },
  { text: "Te lo prometo voy a llevarte a Londres", time: 87.92 },
  { text: "Qué te pasó? Yo siempre fui tu hombre", time: 90.88 },
  { text: "Extrañando tu pelo de oro y tus ojos de cobre", time: 93.17 },
  { text: "Si es real tatúate mi nombre", time: 96.37 },
  { text: "Y vuelve pa' atrás y olvídate de ese hombre", time: 99.03 },
  { text: "Baby mírame a los ojos fijo", time: 102.92 },
  { text: "Y dime que yo no soy la luz de los ojos de tu hijo", time: 105.08 },
  { text: "Te amo, bebé te necesito", time: 107.92 },
  { text: "Y mientras más pasa el tiempo, más te sigo extrañando", time: 112.04 },
  { text: "Mi reina yo te amo, bebé te necesito", time: 117.63 },
  { text: "Y el tiempo sigue corriendo, y yo sigo agonizando", time: 123.13 },
  { text: "Las nalgas grande y el traje Versace con los tacos", time: 128.57 },
  { text: "Versace es mi camisa, la correa y los zapatos", time: 132.16 },
  { text: "Intocable en el Roll Roy's, contigo y con el draco", time: 134.99 },
  { text: "Y primero yo y segundo tú y después los aparatos", time: 137.65 },
  { text: "En el bonete está el baúl y atrás está el motor", time: 140.50 },
  { text: "Qué es el amor sin la felicidad y sin el dolor?", time: 143.04 },
  { text: "Se sufre y se ríe, pero qué rico el calor", time: 145.77 },
  { text: "Tú encima de mí, vulnerable y yo haciéndote el amor", time: 148.57 },
  { text: "Mami tú me matas y yo me entierro adentro de ti", time: 151.24 },
  { text: "Tan rica que no me canso de amarte a ti", time: 154.10 },
  { text: "Tocándonos por el teléfono, vente pa' mí", time: 156.76 },
  { text: "Viniéndonos a la vez bien rico hasta que salí", time: 159.26 },
  { text: "Baby hablándome al oído bien sexy baby", time: 162.09 },
  { text: "Yo nunca pude olvidarme de ti", time: 166.06 },
  { text: "Bebé yo sigo esperándote aquí", time: 168.75 },
  { text: "Contigo hasta la muerte baby!", time: 171.38 },
  { text: "Te amo, bebé te necesito", time: 172.99 },
  { text: "Y mientras más pasa el tiempo, más te sigo extrañando", time: 178.39 },
  { text: "Mi reina yo te amo, bebé te necesito", time: 185.04 },
  { text: "Y el tiempo sigue corriendo, y yo sigo agonizando Oh! Oh!", time: 190.51 },
  { text: "Amar a quien no te ama es como tirarse al vacío sin alas bebé", time: 197.21 },
  { text: "Pero mientras haya vida hay esperanza, oíste baby", time: 203.36 },
  { text: "Real hasta la muerte", time: 206.16 }
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);