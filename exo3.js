import { NombreUn } from "./exo2_3.js";
const M =[
    [1,0,1,0],
    [0,1,0,1],
    [1,0,1,0]
]
function TriLignes(Matrice){
    let result = [];
 for (let i = 0; i < Matrice.length; i++) {
    let count = NombreUn(Matrice[i]);
   if(count <= 0){
    result.add(Matrice[i]);

}
else if(count > 0 && count <= 2){
    result.push(Matrice[i]);
}
return result  ;
}}
console.log(TriLignes(M));