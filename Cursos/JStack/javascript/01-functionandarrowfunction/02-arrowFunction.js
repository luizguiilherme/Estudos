// Arrow Function usa o 'this' do contexto onde ela foi criada
const minhaArrowFunction = () => {
  this.lastname = 'Oliveira'
};

minhaArrowFunction();

// Arrow Function usa o 'arguments' do contexto onde ela foi criada
 const soma = () => {
  console.log(arguments);
}
soma(1, 2, 3, 4, 5, 6, 7, 'Luiz');

//Short syntax
const num = 10;
const getuser = () => ({
  id: '123',
  name: 'Luiz',
});

console.log(getuser());


