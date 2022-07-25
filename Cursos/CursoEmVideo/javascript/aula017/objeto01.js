let amigo = {nome: 'Luiz', sexo: 'M', peso: 85, engordar(p = 0){
  console.log('Engordou');
  this.peso += p
}}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);