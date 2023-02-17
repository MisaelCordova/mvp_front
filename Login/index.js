const url = "https://localhost:7230/Consumidor/Login"
var documento = document.getElementById("cpfcnpj")
var senha = document.querySelector("#password")

const btnEntrar = document.querySelector("form")
btnEntrar.addEventListener('submit', function(e){   
     e.preventDefault()
     if(documento.value.length == 14 || documento.value.length == 11){
        let documentoDigitado;
     if(documento.value.length == 14){
        documentoDigitado = documento.value.slice(0,3) + documento.value.slice(4,7) + documento.value.slice(8,11) + documento.value.slice(12,14)
     }else{
        documentoDigitado = documento.value.slice(0,2) + documento.value.slice(3,6) + documento.value.slice(7,10) + documento.value.slice(11,15) + documento.value.slice(16,18)
     } 
    console.log(url + "/" + documentoDigitado)

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
    console.log(request)
    request.then(function(res){
        console.log(res.status)
        if(res.status == 200){
            window.location.href="../PaginaInicialLogado/index.html"

        }else if (res.status == 404){
            alert("Documento não cadastrado")
        }else if(res.status == 401){
            alert("Senha Incorreta")
        }
    })
     }
     else{
        alert("Insira um documento com formato falido")
     }
     

})