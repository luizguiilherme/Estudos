function iniciar(){
  const produto = prompt('Qual produto você está comprando?')
  const precoProduto = prompt('Qual o preço do produto?')
  const valorDado = prompt('Qual o valor dado para pagar o produto')
  const troco = valorDado - precoProduto;
  alert(`
  Você está comprando ${produto}. 
  Deu R$${precoProduto} em dinheiro e vai receber R$${troco} de troco. 
  Volte Sempre
  `)
}