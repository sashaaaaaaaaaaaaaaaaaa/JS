function biggst(a,b,c,d) {
    let max = a;
    if(b > max){
        return b;
    } else if(c > max){
        return c;
    }else if(d > max){
        return d;
    }else {
        return max
    }
}

console.log(biggst(12,7,15));

//also
const x = (...smth) => Math.max(...smth);
console.log(x(12,7,15,22))


