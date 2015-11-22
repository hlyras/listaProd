//Variavéis globais;
qtd50 = 0;
qtd100 = 0;
soma100 = 0;
media100 = 0;
idx = 0;
nomeProd = [];

//Objetos, metodos e atributos;
var Produto = function(){
	//atributos públicos;
	this.id;
	this.nome;
	this.preco;

	//metodos públicos;
	this.processo = function(){
		//alert("Nome: " + this.nome + "\nPreço: " + this.preco)
		this.inferior50();
		this.nomeProduto();
		this.maior100();
		this.mediaDosProdutos();
	}
	//Capturando a quantidade de produtos com preço menor que 50
	this.inferior50 = function(){
		if (this.preco < 50) {
			qtd50++;
		};
	}
	//Capturando os nomes dos produtos com preço entre 50 e 100
	this.nomeProduto = function(){
		if (this.preco >= 50 && this.preco <= 100) {
			nomeProd.push(this.nome);
			idx++;
		};
	}
	//Capturando a soma dos preços dos produtos acima de 100
	this.maior100 = function(){
		if (this.preco > 100) {
			qtd100++;
			soma100 = soma100 + this.preco;
		};
	}
	//Capturando a média de preço dos produtos acima de 100
	this.mediaDosProdutos = function(){
		media100 = soma100 / qtd100;
	}
	//Mostrar o resultado de todos os processos
	
	//Lembrete;
	//metodo privado
	/*var informacao = function(){
		alert("Metodo privado")
	}
	//usando metodo privado através de um  
	//metodo publico
	this.useMetodoPrivadoInformacao = function(){
		return informacao();
	}*/
}
	Produto.mostraDados = function(){
		mostrarTela("RELATORIO DE PRODUTOS <br>")
		mostrarTela("quantidade menor 50 = " + qtd50);
		for(i=0; i < nomeProd.length; i++){
			mostrarTela("Descrição produto = " +nomeProd[i]);
		}
		mostrarTela("Media de preço dos produtos com valor superior a 100 = " + media100);
	}
	Produto.capturaProduto = function(){
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
	}
