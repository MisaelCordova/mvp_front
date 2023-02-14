$(function () {
  $('#sair').on('click', function (event) {

    if (!confirm('Pressione "OK" se deseja realmente sair.'))
      event.preventDefault();
  });
});

let tabela = document.querySelector("#tabela-uc")
let linha = document.createElement("tr")
let link = document.createElement("a")
console.log(link)
link.href = "#"
let col1 = document.createElement("td")
let col2 = document.createElement("td")

let uc = "12345678"
let end = "Rua São Martinho"

let cabecalho = document.querySelector("#cabecalho")
let corpo = document.querySelector("#corpo")
col1.innerHTML = uc;
col2.innerHTML = end;
col1.appendChild(link)
linha.appendChild(col1)
linha.appendChild(col2)
corpo.appendChild(linha)


