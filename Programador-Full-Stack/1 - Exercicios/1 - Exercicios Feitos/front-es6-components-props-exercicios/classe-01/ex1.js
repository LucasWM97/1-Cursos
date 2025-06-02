function sum(...args) {
  const somaNumeros =args.reduce((acum,val)=>acum+val);
return somaNumeros;
}

console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 0, 5));

