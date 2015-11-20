var Produto = function(){
	//atributo publico
	this.nome;
	this.preco;

	//metodo publico
	this.information = function(){
		alert("Nome: " + this.nome + "\nPreço: " + this.preco)
	}
	this.inferior50 = function(){
		
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