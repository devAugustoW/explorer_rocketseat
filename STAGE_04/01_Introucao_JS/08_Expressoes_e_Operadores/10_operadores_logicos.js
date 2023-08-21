
// Operador Lógico AND (&&)
const a = true
const b = false

console.log(a && b) // false
console.log(a && a) // true



// Operador Lógico OR (||)
const c = true
const d = false

console.log(c || d) // true
console.log(d || d) // false


// Operador Lógico NOT (!)
const e = true
const f = false

console.log(!e) // false
console.log(!f) // true

// Combinação de Operadores Lógicos
const g = true
const h = false
const i = true

console.log((g && h) || i) // true
console.log(!(g && h))      // true

