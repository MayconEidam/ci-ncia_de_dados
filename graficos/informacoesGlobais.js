const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
        const res = await fetch(url)
        const dados = await res.json()
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span>
        de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> que estão 
        conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> que horas conectadas.`

        const container = document.getElementById ('graficos-container')
        container.appendChild(paragrafo)
    }
    visualizarInformacoesGlobais()
