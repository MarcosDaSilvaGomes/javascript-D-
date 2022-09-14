

let q=0;
let q2=0;

for(n=0;n<10;n++){
    let nString = prompt('Informe um numero :');
    let n = Number(nString);
    if((n%2==0)){
        q+=1 
    } else{
        q2+=1
    }

}
document.write(`A quantidade de numeros pares é: ${q}`);
document.write(`A quantidade de numeros impares é: ${q2}`);