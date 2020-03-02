class Produto {

	contructor(nome, preco){
		this.nome = nome;
		this.preco = preco;
		this.codigo = codigo++;
		this.quantidade = quantidade;
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

}

//perguntar pro Amanco como eu declaro um metodo de uma classe