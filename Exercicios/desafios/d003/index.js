function iniciar(){
  const numero = prompt('Digite um numero');
  const convertido = parseInt(numero)
  const antecessor = convertido - 1;
  const sucessor = convertido + 1;
  alert(`O numero digitado foi ${numero} o antecessor dele é ${antecessor} e o sucessor é ${sucessor}`)
}