// function scope
let subject;

function creatThink() {
    subject = 'study'
    return subject;
}

console.log(subject);
creatThink();
console.log(subject);