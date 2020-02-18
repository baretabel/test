var tableau1= [1,2,3,4,1,2,3,4];
var tableau2= [5,6,7,8,5,6,7,8];

var x=prompt("Tableau 1:"+tableau1+"\nTableau 2:"+tableau2+"\nEntrez un parametre de sélection de type entier");

while(Number.isNaN(x)===true && x>tableau1.length && x>tableau2.length){
    x=prompt("Tableau 1:"+tableau1+"\nTableau 2:"+tableau2+"\nEntrez un parametre de sélection de type entier");
} 
var parametrer=tableau1.slice(0,x)+tableau2.slice(0,x);
var tableaparametrer=[...parametrer];
alert("Tableau paramétré:"+tableaparametrer);