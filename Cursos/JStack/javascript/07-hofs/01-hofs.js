const array = [
  {name: 'iphone', price: 5000, quantity: 2},
  {name: 'MackBook Pro', price: 20000, quantity: 1},
  {name: 'Magic Mouse', price: 1000, quantity: 4},
];

// .find & findIndex

const find = array.find((product) => product.price > 1000);
// console.log({ find })
const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');
// console.log({ findIndex })
// console.log('Produto', array[findIndex])

// .some = algum & every

const some = array.some((product) => product.price > 1000);
//console.log({ some });

const every = array.every((product) => product.price > 1000);
//console.log({ every });

// .map
const map = array.map((product) => {
  return {
    ...product,
    subtotal: product.quantity * product.price,
  }
});
// console.log({ map });

// .filter 

const filter = array.filter((product) => product.quantity >= 2);
//console.log(filter);

// .reduce valor que vai sendo repassado para cada uma das interações

const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity);
}, 0)
//console.log({reduce});



const numbers = [10, 20, 30, 40];

console.log(numbers.map(n => n*2));