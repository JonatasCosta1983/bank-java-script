const prompt = require("prompt-sync")();


const name = prompt("Qual é o seu nome ?");


console.log(`--- ${name}, bem-vindo ao aplicativo Banco JavaScript---`);

let i = 0;
let value, balance = 1000.00, savings = 500.00;

while (i !== 3) {
  console.log("Digite 1 para APLICAR, 2 para RESGATAR e 3 para SAIR:");
  let input = parseInt(prompt("Digite sua escolha: "));

  if (input === 1) {
    console.log("Valor do aplicativo:");
    value = parseFloat(prompt("Digite o valor do aplicativo:"));

    if (value > balance) {
      console.log("Saldo insuficiente da conta corrente");
    } else {
      balance -= value;
      savings += value;
      console.log("Aplicação concluída com sucesso");
    }
  } else {
    if (input === 2) {
      console.log("Valor do resgate: ");
      value = parseFloat(prompt("Digite o valor do resgate: "));

      if (value > savings) {
        console.log("Saldo de poupança insuficiente");
      } else {
        balance += value;
        savings -= value;
        console.log("Resgatar com sucesso");
      }
    } else {
      console.log("Até mais!");
      break;
    }
  }
}

