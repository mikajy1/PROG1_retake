function NombreUn(tableau) {
    let count = 0;
    for (let i = 0; i < tableau.length; i++) {

            if (tableau[i] === 1) {
                count++;
            }
        
    }
    return count;

}
console.log(NombreUn([0, 1, 0, 1, 1, 0, 1]));
exports.NombreUn = NombreUn;