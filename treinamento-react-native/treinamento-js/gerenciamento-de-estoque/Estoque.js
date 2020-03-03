class Estoque {

	contructor (nome) {
		this.nome = nome;
		itensDeEstoque = [];
	}

	adicionaItemEstoque(produto) {
		if(itensDeEstoque.includes(produto)) {
			produto.setQuantidade(1);
		} else {
			itensDeEstoque.push(produto);
		}
	}

	retiraItemEstoque(produto) {
		if(itensDeEstoque.includes(produto)) {
			produto.setQuantidade(-1);
		}
		if(itensDeEstoque.includes(produto) && produto.getQuantidade() < 1) {
			index = indexOf(produto);
			item = itensDeEstoque.splice(produto, index);
			return item;
		}
	}
	
	getQuantidadeEstoque() {
		return itensDeEstoque.length;
	}

	getitensDeEstoque() {
		for(item; itensDeEstoque.length; item++) {
			console.log(item.nome, item.preco);
		}
	}
}