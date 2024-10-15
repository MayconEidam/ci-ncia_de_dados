const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = documente.createElemente('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem
     ${dados.total_pessoas_mundo} de pessoas e
     que aproximadamente ${dados.total_pessoas_conectadas}
     estão conectadas em alguma rede social e passam em média
     ${dados.tempo_medio} horas conectadas.`

     const container = document.getElementByld('graficos-container')
     container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()
