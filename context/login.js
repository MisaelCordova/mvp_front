export function postBanco() {
    let request = fetch(url + "/" + documentoDigitado, {
      method: "POST",
      headers: {
        Accept: "*//*",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        doc_Consumidor: documentoDigitado,
        senha: senha.value,
      }),
    });
    request.then(function(res){
      if(res.status == 200){ 
        window.location.href="../PaginaInicialLogado/index.html"
      }else if (res.status == 404){
          alert("Documento não cadastrado")
      }else if(res.status == 401){
          alert("Senha Incorreta")
      }
      res.json().then(function(cons){ 
          consumidor = cons 
          console.log(consumidor)
      })
  })
  }