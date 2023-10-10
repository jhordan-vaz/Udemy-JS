const nomes = ["Maria", "Jhordan", "Samantha", "Eduardo", "Leticia"];

// nomes.splice(0, 0);

// console.log(nomes);
// const removidos = nomes.splice(2, 2); // a partir de qual indice e quantos elementos apos o indice
// console.log(nomes, removidos);


//array.splice(2,2, "Jhord", "Vaz") //  do indice 2 remove 2 e adicionar "jhordan" e "vaz"
//.array.splice(array.length, 0, "adiciona ao ultimo indice");

function retornaSplice(array) {
    array = nomes;

    let splitted;
    splitted = array.splice(2, 1);
    
    console.log(nomes);
    return console.log(`O/s índice excluído foi: ${splitted}`);
}

retornaSplice();