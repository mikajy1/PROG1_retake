function NombreUn(matrice) {
    let count = 0;
    for (let i = 0; i < matrice.length; i++) {
        for (let j = 0; j < matrice[i].length; j++) {
            if (matrice[i][j] === 1) {
                count++;
            }
        }
    }
    return count;

}
console.log(NombreUn([[0, 1, 0], [1, 1, 0], [0, 0, 1]]));