qtd50 = 0;
qtd100 = 0;
soma100 = 0;
media100 = 0;
nomeProd = [];
idx = 0;
var Produto = function(){
	//atributo publico
	this.nome;
	this.preco;

	//metodo publico
	this.processo = function(){
		//alert("Nome: " + this.nome + "\nPreço: " + this.preco)
		this.inferior50();
		this.nomeProduto();
		this.Maior100();

	}

	this.inferior50 = function(){
		if (this.preco < 50) {
			qtd50++;
		};
	}

	this.nomeProduto = function(){
		if (this.preco >= 50 && this.preco <= 100) {
			nomeProd.push(this.nome);
			//nomeProd[idx] = this.nome;
			//alert(nomeProd[idx]);
			idx++;
		};
	}

	this.Maior100 = function(){
		if (this.preco > 100) {
			qtd100++;
			soma100 = soma100 + this.preco;
		};
	}

	this.MostraDados = function(){
		mostrarTela("qtdade menor 50 = " + qtd50);
		for(i=0; i < nomeProd.length; i++){
			mostrarTela("Descrição produto = " +nomeProd[i]);
		}

		media100 = soma100 / qtd100;
		mostrarTela("media preço maior 100 = " + media100);
	}

	
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

	function mostrarTela(mensagem){
		document.write(mensagem + "<br>");
	}
