// Função normal cria o seu proprio objeto 'this'/contexto apartir de quando usamos o NEW
function minhaFunction(){
// This = deste
  this.name = 'Luiz';
  

console.log( new minhaFunction());
console.log(this)
}
  
// Como receber varios argumentos em uma function normal
function soma(primeiroParametro, ...argumentos){
  console.log({primeiroParametro});
  console.log({argumentos});

}
soma(1, 2, 3, 4, 5, 6, 7, 'Luiz')
  

