import crypto from 'crypto';
import * as math from 'mathjs'

function generateRandomPrime(length) {
    let DH = crypto.createDiffieHellman(length);
    let prime = DH.getPrime('hex');
    return parseInt(prime, length);
}

function generateRandomBit() {
    return Math.round(Math.random());
}

class User {
    constructor(g, n) {
        this.n = n;
        this.g = g
    }

    PsetX(x) {
        this.x = x
    }

    VsetY(y) {
        this.y = y
    }

    Pstep1() {
        this.v = Math.floor(Math.random() * 100)
        this.t = (this.g ** this.v) % this.n;
        return this.t
    }

    Vstep1(t) {
        this.t = t
        this.c = generateRandomBit()
        return this.c
    }

    Pstep2(c) {
        this.r = this.v - (c * this.x); //?
        return this.r
    }

    Vstep2(r) {
        if(this.t === ((this.g**r)*(this.y**this.c))%this.n)
            return true
        else
            return false
    }


}

let n = generateRandomPrime(16)
let g = Math.floor(Math.random() * 50)
console.log("n: ", n)
console.log("g: ", g)

let P = new User(g, n)
let x = 50
P.PsetX(x)
console.log("x: ", x)
let V = new User(g, n)
let y = g**x
V.VsetY(y)
console.log("y: ", y)

let t = P.Pstep1()
console.log("t: ", t)
let c = V.Vstep1(t)
console.log("c: ", c)
let r = P.Pstep2(c)
console.log("r: ", r)
if(V.Vstep2(r))
    console.log("Sikeres")
else
    console.log("Sikertelen")