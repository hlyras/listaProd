	function mostrarTela(mensagem){
		document.write(mensagem + "<br>");
	}
	function capturarProduto(){
	    qtdProduts = parseInt(prompt("Digite quantos produtos serão criados"))
	    //idx = 0
	    ids = []
	    for(i=0; i<qtdProduts; i++){
	      var c1 = new Produto();
	      c1.nome = prompt("Digite o nome do produto");
	      c1.preco = parseInt(prompt("Digite o preço do produto " + c1.nome));
	      c1.id="P" + c1.nome
	      ids.push(c1);
	      c1.processo();
	    }
	}
	function mostrarDados(){
		mostrarTela("RELATORIO DE PRODUTOS <br>")
		mostrarTela("quantidade menor 50 = " + qtd50);
		for(i=0; i < nomeProd.length; i++){
			mostrarTela("Descrição produto = " +nomeProd[i]);
		}
		mostrarTela("media preço maior 100 = " + media100);
	}