const produto = new Produto("arroz", 3.59);
var estoque = new Estoque("Bergs");

estoque.adicionaItemEstoque(produto);

console.log(estoque.getQuantidadeEstoque);


console.log(produto.quantidade);