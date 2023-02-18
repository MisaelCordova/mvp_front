const url = "https://localhost:7230/Consumidor/Login"
var documento = document.getElementById("cpfcnpj")
var senha = document.querySelector("#password")
let consumidor = {}
const btnEntrar = document.querySelector("form")
let documentoDigitado;

function postBanco(){
    let request = fetch(url + "/" + documentoDigitado,{
        method: 'POST',
        headers: {
            "Accept": "*//*",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            doc_Consumidor : documentoDigitado,
            senha: senha.value
        })
        
    })
    request.then(function(res){
        res.json().then(function(cons){
            if(res.status == 200){
                consumidor = cons
               // console.log(consumidor)
              window.location.href="../PaginaInicialLogado/index.html"
            }else if (res.status == 404){
                alert("Documento não cadastrado")
            }else if(res.status == 401){
                alert("Senha Incorreta")
            }
            
        })
        
    })
}
btnEntrar.addEventListener('submit', function(e){   
     e.preventDefault()
     
     if(documento.value.length == 14){
        documentoDigitado = documento.value.slice(0,3) + documento.value.slice(4,7) + documento.value.slice(8,11) + documento.value.slice(12,14)
     }else{
        documentoDigitado = documento.value.slice(0,2) + documento.value.slice(3,6) + documento.value.slice(7,10) + documento.value.slice(11,15) + documento.value.slice(16,18)
     } 
     postBanco();
    
    
    
})
function teste(){
    return consumidor
}
console.log(teste())