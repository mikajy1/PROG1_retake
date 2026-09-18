function NegatiFPositif(tableau){
    let positif = [];
    let negatif = [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] >= 0) {
            positif.push(tableau[i]);
        } else {
            negatif.push(tableau[i]);
        }
    }
    
    return [ negatif , positif ];

}
console.log(NegatiFPositif([-5, 3, -2, 7, 0, -1, 4])); 