//Variaveis Globais
qtd50 = 0;
qtd100 = 0;
soma100 = 0;
media100 = 0;
idx = 0;
nomeProd = [];

//Objetos, metodos e atributos;
var Produto = function(){
	//atributos públicos;
	this.nome;
	this.preco;

	//metodos públicos;
	this.processo = function(){
		//alert("Nome: " + this.nome + "\nPreço: " + this.preco)
		this.inferior50();
		this.nomeProduto();
		this.Maior100();
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
	this.Maior100 = function(){
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
	this.MostraDados = function(){
		mostrarTela("RELATORIO DE PRODUTOS <br>")
		mostrarTela("quantidade menor 50 = " + qtd50);
		for(i=0; i < nomeProd.length; i++){
			mostrarTela("Descrição produto = " +nomeProd[i]);
		}
		mostrarTela("media preço maior 100 = " + media100);
	}
	//Lembrete;
	//metodo privadoo
	var informacao = function(){
		alert("Metodo privado")
	}
	//usando metodo privado através de um  
	//metodo publico
	this.useMetodoPrivadoInformacao = function(){
		return informacao();
	}
}
