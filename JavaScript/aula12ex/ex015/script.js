function verificar() { // Fará a verificação quando o botão for clicado
    var data = new Date() // Pegará as informações de data e hora do sistema atual
    var ano = data.getFullYear() // Pegará as informações de data
    var fano = document.getElementById('txtano') // Por meio do id, pegará o elemento txtano
    var res = document.querySelector('div#res') // Usando o querySelector, pegará o elemento do is res
    if (fano.value.length === 0 || Number(fano.value) > ano) { // Fará a verificação, de se o cumprimento do valor e o tipo da variável de fano, é igual a zero, ou se esse valor de fano, tranformado em número, é maior que o valor da varável ano
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { // Fará o se não
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') // Criará um elemento HTMl img
        img.setAttribute('id', 'foto') // Atribuira no elemento img a partir da variável img, o id e nome do id
        if (fsex[0].checked) { // Verifica se o valor de fsex na posição 0, foi marcada
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) { // Se idade for maior ou igual a 0 e idade menor que 10
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png') // Adicionará uma imagem ao elemento img da variável img que foi atribuido o elemento HTML
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) { // Igual ao if anterior, mudando somente o index de fsex, que agora vale 1
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // Centraliza o texto do elemento ligado a variável res
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` // Faz interpolação
        res.appendChild(img) // Faz com que aparece a imagem na tela
    }
}