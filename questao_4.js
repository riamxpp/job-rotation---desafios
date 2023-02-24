const estados = [
  {
    sigla: "SP",
    valor: 67836.43,
  },
  {
    sigla: "RJ",
    valor: 36678.66,
  },
  {
    sigla: "MG",
    valor: 29229.88,
  },
  {
    sigla: "ES",
    valor: 27165.48,
  },
  {
    sigla: "",
    valor: 19849.53,
  },
];

let total = 0;
estados.forEach((estado) => {
  total += estado.valor;
});

const faturamento = [];
estados.forEach((estado) => {
  faturamento.push({
    sigla: estado.sigla == "" ? "outros" : estado.sigla,
    percentual: total / estado.valor,
  });
});

console.log(faturamento);
