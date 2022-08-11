module.exports = function reverse (n) {
    let string = String(Math.abs(n));
    let arr = []; 
    arr = string.split('');
    return arr.reverse().join('');
}
