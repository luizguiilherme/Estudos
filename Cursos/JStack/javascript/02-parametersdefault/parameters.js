function printGreetings(message = 'Mensagem Padrão'){
  console.log(message);
}

printGreetings('Seja bem-vindo')

function user(userName) { this.name = userName; }

console.log(typeof new user('Mateus'));