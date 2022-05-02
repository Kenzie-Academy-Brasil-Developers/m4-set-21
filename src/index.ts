let nome = "Gabriel";

let idade = 20;

/* DECIMAL NO SQL - number no typescript*/
let float = 25.5;

const date = new Date();

const array = [10, 20, false, "string"];

let user = {
  name: "Gabriel",
  email: "gabriel@kenzie.com.br",
  idade,
  trabalho: {
    empresa: "Kenzie Academy Brasil",
  },
};

console.log(user.trabalho.empresa);

// Erro na tipagem - reatribuição
float = "asdasduh";

// Erro na tipagem - any type
const logUser = (user) => {};
