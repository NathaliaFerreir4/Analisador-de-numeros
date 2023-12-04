let valores = [];


function adicionar(){
let res = document.getElementById('res').value
let num = document.getElementById('txtano').value;
let algoritimos = document.getElementById('numeros')



if (num != 0 && num <=100){
    valores.push(Number(num))
    let item = document.createElement('option')
    item.text = `Valor ${num} adicionado.`
    algoritimos.appendChild(item)

}else{
    alert ('Digite um número valido!')
}
}
function finalizar(){
    if (valores.length == 0){
        alert('Adicione algum valor!')
    } else{
        let qtd = valores.length
        let maior = valores[0]   
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior =  valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / qtd

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo tem ${qtd} numero(s).</p>` 
        res.innerHTML += `<p>O menor número informado é ${menor}</p>`
        res.innerHTML += `<p>O maior número informado é ${maior} </p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}