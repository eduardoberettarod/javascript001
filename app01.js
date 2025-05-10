// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = 'Eduardo';
let idade = 17;
// Console e Debug
console.log(nome);
console.log(idade);
nome= 'Alysson';
idade= 18;
console.log(nome, idade);
// Tipos de dados
//text ==> string
// number ==> number
let cidade= "Americana"

//numerico = number
let salario= 1500.35

// boleano = boolean
let fumante= false
console.log(typeof cidade);
console.log(typeof salario);
console.log(typeof fumante);

// Operadores
//     Operador Atribuição (=)

//     Operadores aritméticos ( +, -, *, /, %)
console.log(10 + 5);
console.log(10 - 5);
let n1 = 10;   
let n2 = 5;
console.log(n1 + n2); //soma
console.log(n1 * n2); //multiplicação
console.log(n1 / n2); //divisão
console.log(n1 - n2); //subtração
console.log(n1 % 3); //resto da divisão

//     Operadores relacionais (==, !=, >, <, >=, <=)
console.log(n1 == n2); //igualdade
console.log(n1 != n2); //diferença
console.log(n1 > n2); //maior
console.log(n1 < n2); //menor
console.log(n1 >= n2); //maior ou igual
console.log(n1 <= n2); //menor ou igual

//     Operadores lógicos (&&, ||, !)
console.log(!10 > 2); //negação
console.log(!false); //negação
console.log(10 > 2 && 5 > 3 && 2 < 1); //e - Todas as expressões devem ser verdadeiras para retornar true
console.log(10 > 2 || 5 > 3 || 2 < 1); //ou - Apenas uma expressão precisa ser verdadeira para retornar true

//Desafios
let preco = 100;
let precoAcrescimo = 0.17;
let precoDesconto = 0.07;
//faça um código que acrescente 17% ao preço e imprima
//faça um código que desconte 7% do preço e imprima

let precoAcrescimoFinal = preco + (preco * precoAcrescimo);
console.log(precoAcrescimoFinal);
let precoDescontoFinal = preco - (preco * precoDesconto);
console.log(precoDescontoFinal);
console.log("O valor com acrescimo é: " + precoAcrescimoFinal.toFixed(2));
console.log("O valor com desconto é: " + precoDescontoFinal.toFixed(2));

// Estrutura
//     Condicionais (if, else, switch)
if (3>2) {
    console.log("3 é maior que 2");
}
else {
    console.log("3 não é maior que 2");
}

let idadedocanditato = 17;

if (idadedocanditato >= 18) {
    console.log("O candidato pode votar");
}
else {
    console.log("O candidato não pode votar");
}
let sal = 3000
let salarioideal = 5000
let diferenca = (salarioideal - sal).toFixed(2);
if (sal > 5000){
    console.log("Sálario ok!");
}
else{

    console.log("Falta " + diferenca + " para o salário ideal");
}
//     Estrutura de controle/decisão

//     Laços de repetição
//quero mostrar 10 vezes a mensagem "Senac Americana"
let controle = 1
while (controle <= 10){
    console.log("Senac Americana");
   controle = controle + 1;
}

controle = 1 //definição de variavel de controle
while (controle <= 100){ //condição
    console.log(controle);
    controle = controle + 2; //incremento
}

//mostrar 10 vezes "Senac Americana"
for(let i = 1; i <= 10; i=i+1){
    console.log("Senac Americana");
}

for (let i= 1; i <= 50; i = i + 1){
    console.log(i);
}

// Arrays --> vetor
let alunos = ["Eduardo", "Alysson", "Lucas", "Henzo", "Gustavo", "Gabriel", "Felipe", "Matheus", "Guilherme"];
console.log(alunos [0]); //Eduardo
alunos [2] = "Jesus"
console.log(alunos)
alunos.push("José")
console.log(alunos)


let frutas = []
console.log(frutas)
frutas.push("🍓")
frutas.push("🍎")
frutas.push("🍌")
frutas.push("🍊")
frutas.push("🍉")
frutas.push("🍇")
frutas.push("🍍")
frutas.push("🍈")
frutas.push("🍑")
frutas.push("🍒")
console.log(frutas)

// Funções básicas
function soma(num1, num2){
    let total = num1 + num2
    console.log ("O resultado é " + total);
}
soma(100 , 14)
// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
 