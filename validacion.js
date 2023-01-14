import { productoServices } from "./producto-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const url = document.querySelector("[data-url]").value;
  const preco = document.querySelector("[data-preco]").value;
  const descrip= document.querySelector("[data-descrip]").value;

  productoServices
    .creaProdutos(nome, url, preco, descrip)
    .then((resposta) => {
      window.location.href = "../screens/index.html";
      console.log(resposta);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Haz tú validación en javascript acá
const Nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const formul = document.getElementById("form");
const comentario=document.getElementById("mensagem");
const parrafo = document.getElementById("warnings");

formul.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let letters = /^[A-Za-z]+$/;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  parrafo.innerHTML = "";
  if (Nombre.value.length < 4) {
    // var letters = /^[A-Za-z]+$/;
    warnings += "El nombre no es valido <br>";
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += "El email no es valido <br>";
    entrar = true;
  }
  if (asunto.value.length < 6) {
    warnings += "El asunto no es valido <br>";
    entrar = true;
  }
  if (comentario.value.length < 10) {
    warnings += "El comentario no es valido <br>";
    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
});
