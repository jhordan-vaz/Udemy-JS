/*
Entre 0 - 11 = bom dia
Entre 12 - 17 = boa tarde
Entre 18 - 23 = boa noite
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 80;

if (hora >= 0 && hora <= 12) {
  console.log("bom dia!")
} else if (hora >= 13 && hora <= 17 ) {
    console.log("Boa tarde!")
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite!")
} else {
    console.log("Salve!")
}

