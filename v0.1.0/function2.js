	//função para "document.write()" (Escrever na tela);
	function mostrarTela(mensagem){
		document.write(mensagem + "<br>");
	}
	//captura a quantidade e atributos dos produtos;
	function capturarProduto(){
	    qtdProduts = parseInt(prompt("Digite quantos produtos serão criados"));
	    ids = [];
	    for(i=0; i<qtdProduts; i++){
	      var c1 = new Produto();
	      c1.nome = prompt("Digite o nome do produto");
	      c1.preco = parseInt(prompt("Digite o preço do produto " + c1.nome));
	      c1.id="P" + c1.nome;
	      ids.push(c1);
	      c1.processo();
	    }
	}
	//Mostra o resultado dos processos
	function mostrarDados(){
		mostrarTela("RELATORIO DE PRODUTOS <br>");
		mostrarTela("quantidade menor 50 = " + qtd50);
		for(i=0; i < nomeProd.length; i++){
			mostrarTela("Descrição produto = " +nomeProd[i]);
		}
		mostrarTela("media preço maior 100 = " + media100);
	}