
const url = "https://localhost:7230/UC/"
//import { teste } from "../Login";
$(function () {
  $('#sair').on('click', function (event) {

    if (!confirm('Pressione "OK" se deseja realmente sair.'))
      event.preventDefault();
  });
});
let UCs = []

/*+"/"+consumidor*/
function getUCs() {
  let request = fetch(url)
  request.then(function (response) {
    response.json().then(function (vetorUCs) {
      UCs = vetorUCs
      criaList(vetorUCs)
    })
  })
}

function criaList(Ucs) {
  console.log(Ucs)
  let corpo = document.querySelector("#corpo")
  for (let uc of UCs) {
    let linha = document.createElement("tr")
    let link = document.createElement("a")

    link.href = "#"
    let col1 = document.createElement("td")
    let col2 = document.createElement("td")

    col1.appendChild(link)
    link.innerHTML = "00000"+uc.cod_uc;
    col2.innerHTML = uc.bairro +","+uc.logradouro +","+ uc.num_casa

    linha.appendChild(col1)
    linha.appendChild(col2)
    corpo.appendChild(linha)
  }

}
getUCs();







