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
// float = "asdasduh";

// Erro na tipagem - any type
// const logUser = (user) => {};

const logName = (name: string) => {
  console.log(name);
};

interface UserData {
  name: string;
  email: string;
  idade: number;
  trabalho: WorkData;
}

interface WorkData {
  empresa: string;
  quantidade_funcionarios?: number;
}

const logUser = ({ email, idade, name, trabalho }: UserData) => {
  console.log(email, idade);
};

logUser({
  email: "gabriel@kenzie.com.br",
  idade: 20,
  name: "Gabriel",
  trabalho: {
    empresa: "Kenzie",
  },
});

// Tipando um objeto com a ferramenta type
type Car = {
  model: string;
};

// Extendendo types //
type ExtendedCar = Car & {
  color: string;
};

// Extenndedo uma interface
interface ExtendedUserData extends UserData {
  familyName: string | number;
}

const userArray: UserData[] = [
  {
    email: "gabriel@kenzie.com.br",
    idade: 20,
    name: "Gabriel",
    trabalho: {
      empresa: "Kenzie",
    },
  },
];

const listOneUser = (
  users: UserData[],
  email: string
): UserData | undefined => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return;
  }

  return user;
};

const findUser = listOneUser(userArray, "gabriel@kenzie.com.br");
