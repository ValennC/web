var contador = 0;

const objeto1a = document.querySelector(".objeto1");
const contador1 = document.querySelector(".puntaje");
objeto1a.addEventListener(
  "click",
  function () {
    objeto1a.classList.remove("objeto1");
    objeto1a.classList.add("objeto1-click");
    contador++;
    console.log(contador);
    contador1.textContent = contador + "/5";
    const audio = document.querySelector(".encontrado");
    audio.play();
    verificarContador();
  },
  { once: true }
);

const objeto2a = document.querySelector(".objeto2");
objeto2a.addEventListener(
  "click",
  function () {
    objeto2a.classList.remove("objeto2");
    objeto2a.classList.add("objeto2-click");
    contador++;
    console.log(contador);
    contador1.textContent = contador + "/5";
    const audio = document.querySelector(".encontrado");
    audio.play();
    verificarContador();
    objeto2a.removeEventListener();
  },
  { once: true }
);

const objeto3a = document.querySelector(".objeto3");
objeto3a.addEventListener(
  "click",
  function () {
    objeto3a.classList.remove("objeto3");
    objeto3a.classList.add("objeto3-click");
    contador++;
    console.log(contador);
    contador1.textContent = contador + "/5";
    const audio = document.querySelector(".encontrado");
    audio.play();
    verificarContador();
    objeto3a.removeEventListener();
  },
  { once: true }
);

const objeto4a = document.querySelector(".objeto4");
objeto4a.addEventListener(
  "click",
  function () {
    objeto4a.classList.remove("objeto4");
    objeto4a.classList.add("objeto4-click");
    contador++;
    console.log(contador);
    contador1.textContent = contador + "/5";
    const audio = document.querySelector(".encontrado");
    audio.play();
    verificarContador();
    objeto4a.removeEventListener();
  },
  { once: true }
);

const objeto5a = document.querySelector(".objeto5");
objeto5a.addEventListener(
  "click",
  function () {
    objeto5a.classList.remove("objeto5");
    objeto5a.classList.add("objeto5-click");
    contador++;
    console.log(contador);
    contador1.textContent = contador + "/5";
    const audio = document.querySelector(".encontrado");
    audio.play();
    verificarContador();
    objeto5a.removeEventListener();
  },
  { once: true }
);
function verificarContador() {
  if (contador == 5) {
    ganador = document.querySelector(".ganaste");
    ganador.style.display = "none";
    console.log("Encontraste todo");
    const fin = document.querySelector(".fin");
    setTimeout(() => {
      fin.play();
    }, 400);
    confeti = document.querySelector(".video");
    confeti.style.display = "flex";
    confeti.play();
  }
}

function ejecutarBucle2() {
  foto = document.querySelector(".imagenapagada");
  foto.style.display = "flex";
  fotonormal = document.querySelector(".imagen");
  fotonormal.style.display = "none";
}
function ejecutarBucle1() {
  foto = document.querySelector(".imagenapagada");
  foto.style.display = "none";
  fotonormal = document.querySelector(".imagen");
  fotonormal.style.display = "flex";
}

function ejecutarBucle() {
  for (i = 1; i <= 200; i++) {
    var valor = parseInt(Math.random() * 3);
    switch (valor) {
      case 0:
        var valor1 = parseInt(Math.random() * 30000 + 300);
        setTimeout(ejecutarBucle1, valor1);
        console.log(valor1);
        break;
      case 1:
        ejecutarBucle2();
        console.log(valor);
        break;
    }
  }

  // Volver a llamar a la función después de 20 segundos
  setTimeout(ejecutarBucle, 2000);
}

// Llamar a la función por primera vez
ejecutarBucle();

const comenzar = document.querySelector(".empezar");
const blur = document.querySelector(".blur");
comenzar.addEventListener("click", function () {
  comenzar.style.display = "none";
  setTimeout(actualizarContador, 800);
  blur.classList.add("blur_desaparece");
  setTimeout(function () {
    blur.style.zIndex = "-10";
  }, 1000);
});

function actualizarContador() {
  var contadorElemento = document.querySelector(".contador");
  var contadorMinutos = 0;
  var contadorSegundos = 0;
  var tiempoTotal = 90; // 1:30 en segundos

  var intervalo = setInterval(function () {
    contadorSegundos++; // Incrementa los segundos

    if (contadorSegundos === 60) {
      contadorSegundos = 0; // Reinicia los segundos
      contadorMinutos++; // Incrementa los minutos
    }

    var contadorFormateado =
      (contadorMinutos < 10 ? "0" : "") +
      contadorMinutos +
      " : " +
      (contadorSegundos < 10 ? "0" : "") +
      contadorSegundos;
    contadorElemento.innerText = contadorFormateado; // Actualiza el texto del elemento HTML con el nuevo valor del contador

    if (contadorMinutos === 2 && contadorSegundos === 0) {
      clearInterval(intervalo); // Detiene el contador
      contadorElemento.style.color = "red"; // Cambia el color del contador a rojo
      blur.classList.remove("blur_desaparece");
      blur.classList.add("blur");
      blur.style.zIndex = "10";
    }
    if (contadorMinutos === 1 && contadorSegundos === 0) {
      contadorElemento.style.color = "yellow"; // Cambia el color del contador a rojo
    }
    if (contadorMinutos === 1 && contadorSegundos === 30) {
      contadorElemento.style.color = "orange"; // Cambia el color del contador a rojo
    }
    if (contadorMinutos === 1 && contadorSegundos === 50) {
      contadorElemento.style.color = "red"; // Cambia el color del contador a rojo
    }
    if (contador == 5) {
      clearInterval(intervalo);
      console.log("0" + contadorMinutos + `:` + contadorSegundos);
    }
  }, 1000);
}
