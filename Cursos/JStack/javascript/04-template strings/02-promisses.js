const apiCall = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve('Sucesso');
    //reject('Erro!');
  }, 2000 );
});

// apiCall
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });


async function run() {
  // const resposta = await apiCall;
  // console.log(resposta);
  try{
    const resposta = await apiCall;
    console.log(resposta);
    console.log('Depois da promise...');
  }catch(erro){
    console.log(erro);
  };
}

run();
