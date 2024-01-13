const a = 0;
const b = null;
const c = "Teste";

console.log(a || b || c);
console.log(a ?? b ?? c);

let e1 = null;
let e2 = 42;

let e3 = e1 ?? e2;
console.log(e3);
