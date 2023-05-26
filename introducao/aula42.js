//Try, Catch, Throw

// try {
//   console.log(naoExiste);
// } catch (err) {
//   console.log("Nao existe, naoExiste");
//   console.log(err);
// }

function soma(x, y) {
  if (typeof x !== "number" || typeof y ==! "number") {
    throw new Error("X e Y precisam ser números.");
  }

  return x + y;
}

try {
  console.log(soma(5, 7));
  console.log(soma("a" , 7));
} catch(e) {
  // console.log(e);
  console.log("Algo mais amigável para o user");
}
