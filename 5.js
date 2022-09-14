let n;
let nt=0;

do{
    let nString = prompt('Forneça um número');
    let n = Number(nString);
    nt+=n
}while (n==0)

document.write(`A soma dos números digitados é: ${nt}`);