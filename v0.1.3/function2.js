	//função para "document.write()" (Escrever na tela);
	function mostrarTela(mensagem){
		document.write(mensagem + "<br>");
	}
	//captura a quantidade e atributos dos produtos;
	/*function capturarProduto(){
	    qtdProduts = parseInt(prompt("Digite quantos produtos serão criados"));
	    ids = [];
	    for(i=0; i<qtdProduts; i++){
	      var c1 = new Produto();
	      c1.nome = prompt("Digite o nome do produto");
	      c1.preco = parseInt(prompt("Digite o preço do produto " + c1.nome));
	      c1.id="ID-" + c1.nome;
	      ids.push(c1);
	      c1.processo();
	    }
	}*/
	
	//Mostra o resultado dos processos
	/*function mostrarDados(){
		mostrarTela("RELATORIO DE PRODUTOS <br>");
		mostrarTela("Quantidade de produtos com valor inferior a 50$ = " + qtd50);
		media50100();
		mostrarTela("Media de preço dos produtos com valor superior a 100$ = " + media100 + "$");
	}
	function media50100(){
		mostrarTela("Produtos com valor entre 50$ e 100$ <br> ")
		for(i=0; i < nomeProd.length; i++){
			mostrarTela("Produto = " + nomeProd[i]);
		}
	}
	function medsup100(){
		mostrarTela("Media de preço dos produtos com valor superior a 100$ = " + media100 + "$");
	}*/