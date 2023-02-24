let atual = 0,
  anterior = 0;
let numeros = [];
for (let i = 0; i < 20; i++) {
  numeros.push(anterior);
  anterior === 0 ? (anterior += 1) : (anterior = numeros[i] + numeros[i - 1]);
}
// supondo que meu site tem um input pedindo para o usuário um número e o usuário informa o número 30
let valor = 34;
let pertence = false;
numeros.forEach((item) => {
  if (!pertence) item === valor ? (pertence = true) : (pertence = false);
});
pertence
  ? console.log("seu número pertence a sequência Fibonacci")
  : console.log("seu número não pertence a suquência Finobacci");
