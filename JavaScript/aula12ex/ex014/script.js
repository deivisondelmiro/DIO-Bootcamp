function carregar() { // Função carregar, quando clicado o botão carregar
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date() // Pega informações de data e hora para o momento atual
    var hora = data.getHours() // Pega as horas da variável data
    msg.innerHTML = `Agora são ${hora} horas. <br>` // Colocará a frase, mais um dado da variável
    if (hora >= 0 && hora < 12) { // Se hora for maior ou igual a 0 e hora menor que 12
        msg.innerHTML += `Bom Dia!` // String que será somada, junta com a string anterior
        img.src = 'fotomanha.png' // Pegará a partir do src, a fonte da imagem, onde ela está salva
        img.alt = 'Imagem no campo, representando do a manhã' // Adicionará um texto que representa a imagem, um alternativo
        document.body.style.background = '#e2cd9f' // Adicionará um background color no  elemento HTML body
    } else if (hora >= 12 && hora < 18) { // Semelhante as ateriores
        msg.innerHTML += `Boa Tarde!`
        img.src = 'fototarde.png'
        img.alt = 'Imagem de um barco no meio do mar, em um pôr do sol, representando a tarde'
        document.body.style.background = '#b9846f'
    } else { // Semelhante as ateriores, com a diferença de que já não tem mais if, por ser a última oção o else sem um if
        msg.innerHTML += `Boa Noite!`
        img.src = 'fotonoite.png'
        img.alt = 'Imagem de luzes desfocadas a noite, representado a noite'
        document.body.style.background = '#515154'
    }
}