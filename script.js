/*
 1. gerar numero de 1 a 100 e salvar ele em uma variavel  (ok)
 2. contador de tentativas (ok)
 3. pegar o numero e validar  (ok)
 4. apontar se é maior ou menor que o numero escolhido aleatoriamente (ok)
 5. diminuir o contador de tentativas a cada tentativa e atualizar o valor que aparece para o usuario (ok)
  5.1 se o contador chegar a 0, acabar o jogo e indicar qual era o numero (ok)

*/
 
 let numeroSorteado = Math.floor(Math.random() * 10) + 1;
 let tentativas = 10;
 document.getElementById("tentativas").textContent = "Você tem " + tentativas + " tentativas";

  function diminuirTentativas() {
    if (tentativas > 0) {
        tentativas-- ;
        document.getElementById("tentativas").textContent = `Você tem ${tentativas} tentativas`;
    }
      if (tentativas == 0) {
          document.getElementById("resultado").textContent = `Você perdeu! O número era ${numeroSorteado}`;
     }
  }
   function chutar() {
     if (tentativas == 0) {
         document.getElementById("tentativas").textContent = "Você não tem mais tentativas.";
            return;
    }
    let numerochutado = Number(document.getElementById("chute").value);
    const numeroInvalido = (numerochutado < 1 || numerochutado > 100);
    if (numeroInvalido) {
        document.getElementById("resultado").textContent = "Número inválido! Tente novamente.";
        return;
    }
    else if(numerochutado == numeroSorteado) {
        document.getElementById("resultado").textContent = "Você acertou!";
    }
    else if (numerochutado < numeroSorteado) {
        document.getElementById("resultado").textContent = `O numero é maior que ${numerochutado}`;

    }
    else if (numerochutado > numeroSorteado) {
        document.getElementById("resultado").textContent = `O numero é menor que ${numerochutado}`;
    }
   }
  