function getRandom(min, max, decimal = true) {
    if (decimal === false) {
        return Math.random() * (max - min) + min;
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

console.log(getRandom(1, 10, false));