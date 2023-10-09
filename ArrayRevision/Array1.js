
//                0          1       2          3         4         5        6
const nomes = ["Jhordan", "Maria", "Saulo", "Bianca", "Filipe", "Samira", "Excluir"];
// nomes[2] = "Mudei o nome manual";
// delete nomes[3];
// console.log(nomes);

function handleArray(n) {
    let getArray = nomes;
    let arrayLength = nomes.length;

    console.log(arrayLength);
    return console.log(getArray);
}

if(nomes.length > 5) {
    nomes.pop();
} else {
    return;
}


handleArray();





