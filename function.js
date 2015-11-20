  function captureProducts(){
  	qtdProdutos = parseInt(prompt("Quantidade de Produtos"))
    	for(i=1; i<=qtdProdutos; i++){
    		nome = prompt("Digite o nome do produto")
    		valor = parseFloat(prompt("Digite o preço do produto " + nome))

    		produto = {
    			nomes: nome,
    			valores: valor
    		}
    		Produtos.push(produto)
    	}
    return mainMenu();
  }

  function show(){
    writeOnScreen("PRODUTOS EM ESTOQUE <br>")
    for(i=0; i<Produtos.length; i++){
      writeOnScreen("Nome: " + Produtos[i].nomes)
  	  writeOnScreen("Preço: " + Produtos[i].valores + "$" + "<br>")
    }
    return mainMenu();
  }

  function cheaperThanValue(){
    maxvalue = parseFloat(prompt("Digite o Preço máximo "))
    writeOnScreen("Produtos com valor inferior a " + maxvalue + "$" + "<br>")
    for(i=0; i<Produtos.length; i++){
      if(Produtos[i].valores <= maxvalue){
        writeOnScreen("Nome: " + Produtos[i].nomes + "<br>" + "Preço: " + Produtos[i].valores + "$" + "<br>")
      }
    }
    return mainMenu();
  }

  function writeOnScreen(mensagem){
    document.getElementById("conteudo").innerHTML += mensagem + "<br>"
  }

  function mainMenu(){
    alert("== 1-Capturar produtos\n== 2-Buscar por preço máximo\n== 3-Buscar por média de preço\n== 4-Saber a média de preço dos produtos acima de um valor\n== 5- Mostrar produtos em estoque\n== 6- Sair")
    opcao = parseInt(prompt("Digite a opção desejada"))
    if(opcao == 1){
      captureProducts();
    }
    else if(opcao == 2){
      cheaperThanValue();
    }
    else if(opcao == 3){
      buscarMedia();
    }
    else if(opcao == 4){
      mediaDosValores();
    }
    else if(opcao == 5){
      show();
    }
    else if(opcao == 6){
      alert("See ya")
    }
    else{
      alert("Opção inválida")
      return mainMenu();
    }
  }

  function buscarMedia(){
    vMin = parseFloat(prompt("Preço minimo"))
    vMax = parseFloat(prompt("Preço máximo"))
    writeOnScreen("Produtos com valor entre " + vMin + "$" + " e " + vMax + "$" +"<br><br>")
    for(i=0; i<Produtos.length; i++){
      if((vMin <= Produtos[i].valores) && (vMax >= Produtos[i].valores)){
        writeOnScreen("Nome: " + Produtos[i].nomes + "<br>" + "Preço: " + Produtos[i].valores + "$ <br>")
      }
      else if(vMin > Produtos[i].valores){
        continue
      }
      else if(vMax < Produtos[i].valores){
        continue
      }
      else{
        alert("Não foram encontrados produtos")
        writeOnScreen("Não há produtos com esse valor")
        return mainMenu();
      }
    }
    return mainMenu();
  }

  function mediaDosValores(){
    vMedia = parseFloat(prompt("Digite o valor minimo dos produtos <br>"))
    produtosAcima = []
    somaDosValores = 0
    mediaGeral = 0
    for(i=0; i<Produtos.length; i++){
      if(vMedia < Produtos[i].valores){
        somaDosValores = somaDosValores + Produtos[i].valores
        produtosAcima.push(somaDosValores)
      }
    }
    mediaGeral = somaDosValores / produtosAcima.length
    alert("A média de preço entre os produtos com valor acima de " + vMedia + "$" + " é de " + mediaGeral + "$")
    return mainMenu();
  }