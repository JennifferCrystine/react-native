class Produto {

	contructor(nome, preco){
		this.nome = nome;
		this.preco = preco;
		this.codigo = 0;
		this.quantidade = 0;
	}

	getPreco() {
		return this.preco;
	}

	getNome() {
		return this.nome;
	}

	setNome(nome) {
		this.nome = nome;
	}

	setPreco(preco) {
		this.preco = preco;
	}

	setQuantidade(quantidade) {
		this.quantidade = this.quantidade + quantidade;
	}

}

//perguntar pro Amanco como eu declaro um metodo de uma classe