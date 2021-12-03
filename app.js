import crypto from 'crypto';

function generateRandomPrime() {
    let DH = crypto.createDiffieHellman(16);

    let prime = DH.getPrime('hex');
    return parseInt(prime, 16);
}

function generateRandomBit() {
    return Math.round(Math.random());
}



let p = generateRandomPrime();
console.log(p);
let q = generateRandomPrime();
console.log(q);
let n = p * q;
console.log(n);

// P:
let r = Math.floor(Math.random()*100);

let t = (r**2) % n;

// V:
let c = generateRandomBit();
console.log(c);

// P:
let s = (r*(x**c))%n;

// V:
if(s**2 % n == t*y**c % n) {
    return true;
}
else
    return false;