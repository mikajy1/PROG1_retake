function order(tableau){
    let zero = [];
    let uno = [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === 0) {
            zero.push(tableau[i]);
        } else if (tableau[i] === 1) {
            uno.push(tableau[i]);
        }
    }
    return [zero, uno];
}
console.log(order([0, 1, 0, 1, 1, 0, 1]));