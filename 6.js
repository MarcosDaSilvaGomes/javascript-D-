let n;
let nt=0;
let m=0;

do{
    let nString = prompt('Forneça um número');
    let n = Number(nString);
    if (n%3==0){
    nt+=n
	q+=1
	m=(nt/q)
    }
}while (n==0)

document.write(`A média dos números múltiplos de 3 é ${m}`);