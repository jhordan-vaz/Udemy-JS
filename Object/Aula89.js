// Object Map()

const pessoas = [
  { id: 3, nome: "Jhordan" },
  { id: 2, nome: "Jennifer" },
  { id: 1, nome: "Maria" },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa });
}

for (const [identifier, {id, nome}] of novasPessoas) { 
console.log(identifier, id)
}

// for(const pessoas of novasPessoas.keys()) {
//   console.log(pessoas);
// }

novasPessoas.delete(2);
console.log(novasPessoas);