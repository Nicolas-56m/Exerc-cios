function calcularResultado() {

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let n4 = Number(document.getElementById("n4").value);
    let n5 = Number(document.getElementById("n5").value);
    
    let numeros = [n1, n2, n3, n4, n5];
    
    let maior = numeros[0]
    let menor = numeros[0]

    let soma = 0;
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < numeros.length; i++)
    {
        let numero = numeros[i]

        soma = soma + numero;

        if (numero > maior)
        {
            maior = numero
        }
        
        if (numero < menor)
        {
            menor = numero
        }    
       

        if (numero % 2 === 0)
        {
            pares++;
        }
        else
        {
            impares++;   
        }
    }

    let media = soma / numeros.length;

    document.getElementById("resultado").innerHTML =
    "| Maior número: " + maior +
    " | Menor número: " + menor +
    " | Soma total: " + soma +
    " | Média: " + media.toFixed(2) +
    " | Quantidade de Pares: " + pares +
    " | Quantidade de Ímapares: " + impares;
}