/*
var nome = "Hugo Neves";
var n1 = 28;
var n2 = 10;
var frase = "Japão é o melhor time do lado";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));*/

/*var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop("laranja");
console.log(lista);
console.log(lista.toString());
console.log(lista.join("-"));

var fruta = { nome: "maça", cor: "vermelha" }
console.log(fruta.nome);
alert(fruta.cor)

var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
console.log(frutas);
alert(frutas[1].cor);*/

/*var idade = prompt("Qual sua idade");
//var idade = 18;
if (idade >= 18) {
  alert("Maior de idade");
} else {
  alert("Menor de idade")
};*/

/*var count = 0;
while (count < 5) {
  console.log(count);
  alert(count++);
};*/

/*var count;
for (count = 0; count <= 5; count++) {
  alert(count);
};*/

/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/*function soma(n1, n2) {
  return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

/*var validar = 0;
function validaIdade(idade) {
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual a sua idade");
validaIdade(idade);
console.log(validar);*/

function clicou() {
  document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
  //console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar!");
}

function redirecionar() {
  window.open("https://www.youtube.com/watch?v=gsT6eKsnT0M");
  window.location.href = "https://www.youtube.com/watch?v=gsT6eKsnT0M"
}

function trocar(elemento) {
  //document.getElementById("mousemove").innerHTML = "ok ok";
  //alert("trocar texto")
  elemento.innerHTML = "ok ok";
}

function voltar(elemento) {
  //document.getElementById("mousemove").innerHTML = "TESTE";
  elemento.innerHTML = "TESTE";
}

function load() {
  alert("pagina ok");
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}