let resultado = fizzBuzz();  // armazena a funçao em uma variavel
console.log(resultado)      // executa no console a funçao fizzBuzz;

function fizzBuzz (entrada) {
    if(typeof entrada !== "number")   // verifica se o tipo da entrada e um numero
        return "Não é um número";
    if(entrada % 3 == 0 && entrada % 5 == 0)  //se a entrada for divisivel por 3 e 5 é um FizzBuzz 
        return "FizzBuzz";
    if(entrada % 3 == 0)       // se a entrada for divisivel por 3 é um Fizz
        return "Fizz";
    if(entrada % 5 == 0)   // se a entrada for divisivel por 5 é um Buzz
        return "Buzz";
    return entrada;
}