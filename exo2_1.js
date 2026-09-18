function echanger(tableau, index1, index2) {
  
    
    let temp = tableau[index1];
    tableau[index1] = tableau[index2];
    tableau[index2] = temp;
  
    return tableau;

}

console.log(echanger([0, 1,0 ],1 ,2 ));

