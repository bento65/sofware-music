
const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previow = document.getElementById('previow');
const capa = document.getElementById('cover');
const currentprogress = document.getElementById('current-progress');
const progresscontainer = document.getElementById('progress-container');

const segundos = {
    nomemusica: '60 Segundos', artista: 'Gustavo Lima', local: 'capaj11', music: '60segundos'
}
const pontofinal = {
    nomemusica: 'Ponto Final', artista: 'Nadson Ferinha', local: 'capaj10', music: '-Nadson o Ferinha (Ponto Final)'
}
const vidario = {
    nomemusica: 'A vida é um Rio', artista: 'Rafa Torres', local: 'capaj9', music: 'A Vida é um Rio'
}
const abalo = {
    nomemusica: 'Abalo Emocional', artista: 'Luan Santana', local: 'capaj8', music: 'ABALO EMOCIONAL'
}
const baixinha = {
    nomemusica: 'Baixinha', artista: 'Mateus e Kauan', local: 'capaj7', music: 'Baixinha'
}
const carreira = {
    nomemusica: 'Carreira Solo', artista: 'Gustavo Lima', local: 'capaj6', music: 'Carreira Solo'
}
const brety = {
    nomemusica: 'In Case You Didnt Know', artista: 'Brett Young', local: 'capaj12', music: '2bretyoung'
}
const cenas = {
    nomemusica: 'Cenas de Amor', artista: 'Zé Vaqueiro', local: 'capaj13', music: '3cenasdeamor'
}
const dona = {
    nomemusica: 'Dona da Voz', artista: 'Malta', local: 'capaj14', music: '4donadavoz'
}

const gostosinha = {
    nomemusica: 'Gostosinha é ela', artista: 'Felipe Amorim', local: 'capaj15', music: '5gostosinha'
};
const manda = {
    nomemusica: 'Manda um Oi', artista: 'Simone Mendes', local: 'capaj16', music: '6mandaumoi'
};
const impressionando = {
    nomemusica: 'Impressionando os Anjos', artista: 'Gustavo Mioto', local: 'capaj17', music: '7impressionando'
};
const canudinho = {
    nomemusica: 'Canudinho', artista: 'Gustavo lima & Ana Castela', local: 'capaj27', music: 'canudinho'
};
const moletom = {
    nomemusica: 'Moletom', artista: 'Gustavo Mioto', local: 'capaj26', music: 'moleton'
};
const raçanegra = {
    nomemusica: 'Não Posso Dizer Adeus', artista: 'Raça Negra', local: 'capaj24', music: 'Não Posso dizer adeus'
}
const guanabara = {
    nomemusica: 'Pega o Guanabara e Vem', artista: 'Wesley Safadão', local: 'capaj21', music: 'pega o guanabara'
}
const mary = {
    nomemusica: 'Porque Te Amo', artista: 'Mary Fernandez', local: 'capaj22', music: 'porque te amo'
}
const preta = {
    nomemusica: 'Preta', artista: 'Hungria', local: 'capaj20', music: 'Preta'
}
const sinal = {
    nomemusica: 'Sinal', artista: 'Nadson Ferinha', local: 'capaj19', music: 'sinal'
}
const teamo = {
    nomemusica: 'Te Amo', artista: 'Ze Neto e Cristiano', local: 'capaj18', music: 'te amo'
}
const gustavolima = {
    nomemusica: 'Eu não iria', artista: 'Gustavo Lima', local: 'capaj2', music: 'Eu não Iria'
};
const nadson = {
    nomemusica: 'Duas', artista: 'Nadson', local: 'capaj1', music: 'nadson duas'
};
const anacastela = {
    nomemusica: 'Nosso quadro', artista: 'Ana Castela', local: 'capaj3', music: 'Nosso quadro'
};
const hungria = {
    nomemusica: 'Amor e Fé', artista: 'Hungria', local: 'capaj4', music: 'Amor e Fé'
};
const mamuti = {
    nomemusica: 'Lantena dos Afogados', artista: 'Mamuti', local: 'capaj6', music: 'Lanterna Dos Afogados'
};
const demenina = {
    nomemusica: 'De Menina pra Mulher', artista: 'Gustavo Lima', local: 'capaj4', music: 'De Menina Pra Mulher'
};
const diz = {
    nomemusica: 'Diz Pra Mim', artista: 'Malta', local: 'capaj3', music: 'Diz pra mim'
};
const love = {
    nomemusica: 'Love Gostosinho', artista: 'Nattan', local: 'capaj2', music: 'Love Gostosinho'
};
const magica = {
    nomemusica: 'Mágica', artista: 'Hugo e Guilherme', local: '1', music: 'Mágica'
};
const malvada = {
    nomemusica: 'Malvada', artista: 'Zé Felipe', local: '2', music: 'Malvada'
};
const marrento = {
    nomemusica: 'Marrento', artista: 'Zé Felipe', local: '3', music: 'Marrento'
};
const memorias = {
    nomemusica: 'Memórias', artista: 'Malta', local: '4', music: 'Memórias'
};
const metadedemim = {
    nomemusica: 'Metade de Mim', artista: 'Hugo e Guilherme', local: '5', music: 'Metade de Mim'
};
const malvadao = {
    nomemusica: 'Malvadão', artista: 'Xamã', local: '6', music: 'Xamã - Malvadão'
};
const Vontade = {
    nomemusica: 'Vontade de Morder', artista: 'Zé Felipe', local: '7', music: 'Vontade de Morder'
};
const Teassumi = {
    nomemusica: 'Te Assumi Pro Brasil', artista: 'Mateus e Kauan', local: '8', music: 'Te Assumi Pro Brasil'
};
const sam = {
    nomemusica: ' Im Not The Only One', artista: 'Sam Smith', local: '9', music: 'Im Not The Only One'
};
const sete = {
    nomemusica: ' Sete Bilhões', artista: 'Nadson Ferinha', local: '10', music: 'Nadson O Ferinha - Sete Bilhões'
};
const nicke = {
    nomemusica: ' Never Gonna', artista: 'Nckelback', local: '11', music: 'Nickelback - Never Gonna Be Alone'
};
const nada = {
    nomemusica: ' Nada se Compara', artista: 'Malta', local: 'capaj14', music: 'Nada Se Compara'
};
const c1 = {
    nomemusica: 'Não fosse Tão Tarde', artista: 'Lucas Aboiador', local: 'f1', music: 'm1-Lucas Aboiador - Não Fosse Tão Tarde'
};
const c2 = {
    nomemusica: 'Preta', artista: 'Japãozin', local: 'f2', music: 'm2-PRETA - Japãozin'
};
const c3 = {
    nomemusica: 'Vazou na Braquiara', artista: 'Hugo e Guilherme', local: 'f3', music: 'm3-Hugo e Guilherme - Vazou na Braquiara'
};
const c4 = {
    nomemusica: 'Ainda tem amor', artista: 'Barões da Pisadinha', local: 'f4', music: 'm4-Os Barões da Pisadinha, Manu - Ainda Tem Amor (Ao Vivo)_RLR4Jm0CtSY'
};
const c5 = {
    nomemusica: 'Não precisa negar', artista: 'Josué', local: 'f5', music: 'm5-Josué Bom de Faixa - Não Precisa Negar (Clipe Oficial)_YZV3S63tg9Y'
};
const c6 = {
    nomemusica: 'Sei não', artista: 'Manin Vaqueiro', local: 'f6', music: 'm6-Manim Vaqueiro e Zé Vaqueiro - SEI NÃO (DVD Sonhe e Realize)_Osbt4koSwtk'
};
const c7 = {
    nomemusica: 'É sério', artista: 'Banda Encantos', local: 'f7', music: 'm7-Banda Encantu´s, @laryingrind_oficial - É Sério (Clipe Oficial)_gP-HXBKgU-0'
};
const c8 = {
    nomemusica: 'O amor da sua vida', artista: 'Kiko Chicabana', local: 'f8', music: 'm8-Kiko Chicabana - O AMOR DA SUA VIDA_WxVvPoYgVd8'
};
const c9 = {
    nomemusica: 'Deserto', artista: 'Maria Marçal', local: 'f9', music: 'm9-Maria Marçal-Deserto'
};
const c10 = {
    nomemusica: 'Deixa', artista: 'Maria Marçal', local: 'f10', music: 'm10-Maria Marçal - Deixa (Clipe Oficial MK Music)_93TXfW3MT4o'
};
const c11 = {
    nomemusica: 'Todas as coisas', artista: 'Fernandinho', local: 'f11', music: 'm11-Fernandinho - TODAS AS COISAS - (CD Uma Nova História)_HW7_r-BLYKE'
};
const c12 = {
    nomemusica: 'Uma nova História', artista: 'Fernandinho', local: 'f12', music: 'm12-UMA NOVA HISTÓRIA - FERNANDINHO [CLIPE OFICIAL]_SdkWBHLHTgg'
};
const c13 = {
    nomemusica: 'Doce Mel', artista: 'Natazinho', local: 'f22', music: 'm13-Doce Mel - Natanzinho De Bar em Bar 2 ( Ao Vivo )_EEgPsYNcGXY'
};
const c14 = {
    nomemusica: 'Eu amo você', artista: 'Natazinho', local: 'f23', music: 'm14-Eu Amo Você - Natanzinho De Bar em Bar ( Ao Vivo )_GWdwRHoKdco'
};
const c15 = {
    nomemusica: 'Prepara o laço', artista: 'Guilherme Silva', local: 'f15', music: 'm15-Prepara o Laço_0kp2ZazIVQ0'
};
const c16 = {
    nomemusica: 'Barquinha de ouro', artista: 'Guilherme Silva', local: 'f16', music: 'm16-Barquinha de ouro_9fDYBQI4Ggk'
};
const c17 = {
    nomemusica: 'Beija bem', artista: 'Guilherme Silva', local: 'f17', music: 'm18-Guilherme Silva e @OsBaroesdaPisadinha - BEIJA BEM_rNzLjw0RcEo'
};
const c18 = {
    nomemusica: 'Quero Você', artista: 'Thiago Jhonathan', local: 'f19', music: 'm19-Thiago Jhonathan - Quero Você (Video Oficial)_ptSv09mrxRA'
};
const c19 = {
    nomemusica: 'Pássaro noturno', artista: 'Heitor Costa', local: 'f20', music: 'm20-Pássaro Noturno_k73nWgRSWHw'
};
const c20 = {
    nomemusica: 'È ela que eu amo', artista: 'Racine Neto', local: 'f21', music: 'm21-Racine Neto - É ela Que Eu Amo - DVD Minha História_15PoI-HGuEM'
};
const c21 = {
    nomemusica: 'Meu xodó', artista: 'Biguinho Sensação', local: 'f13', music: 'm22-MEU XODÓ - Rafinha o Big Love e Biguinho Sensação (CLIPE OFICIAL)_sUnMTkYQ3eY'
};
const c22 = {
    nomemusica: 'A lua', artista: 'Evoney Fernandes', local: 'f14', music: 'm23-Allanzinho Feat Evoney Fernandes - A Lua'
};

let isplaying = false;

const playtlist = [c22, c21, c20, c19, c18, c17, c16, c15, c14, c13, c12, c11, c10, c9, c8, c7, c6, c5, c4, c3, c2, c1, pontofinal, segundos, sete, malvada, Teassumi, marrento, malvadao, nadson, Vontade, metadedemim, memorias, magica, love, demenina, nada, nicke, diz, vidario, abalo, baixinha, carreira, dona, gostosinha, impressionando, manda, cenas, brety, preta, sinal, teamo, mary, guanabara, raçanegra, moletom, canudinho, anacastela, gustavolima, hungria, sam, mamuti];
let index = 0;


function playsong() {
    play.querySelector('.bi').classList.remove('bi-play-circle');
    play.querySelector('.bi').classList.add('bi-pause-circle')
    song.play();
    isplaying = true;
}

function pausesong() {
    play.querySelector('.bi').classList.add('bi-play-circle');
    play.querySelector('.bi').classList.remove('bi-pause-circle')
    song.pause();
    isplaying = false;
}

function playPause() {
    if (isplaying === true) {
        pausesong();
    }
    else {
        playsong();
    }
}

function incicializar() {
    cover.src = `imagens/${playtlist[index].local}.jpg`;
    song.src = `songs/${playtlist[index].music}.mp3`;
    songName.innerText = playtlist[index].nomemusica;
    bandName.innerText = playtlist[index].artista;
}

function previowsong() {
    if (index === 0) {
        index = playtlist.length - 1;
    }
    else {
        index -= 1;
    }
    incicializar();
    playsong();
}

function nextsong() {
    if (index === playtlist.length - 1) {
        index = 0;
    }
    else {
        index += 1;
    }
    incicializar();
    playsong();
}

function progressbar() {

    const barwidth = (song.currentTime / song.duration) * 100;
    currentprogress.style.setProperty('--progress', `${barwidth}%`);

}
function jumpTo(event) {
    const width = progresscontainer.clientWidth;
    const clickposition = event.offsetX;
    const jampTotime = (clickposition / width) * song.duration
    song.currentTime = jampTotime;
}
function clickMenu() {
    if (k1.style.display == 'block'){
        k1.style.display = 'none'
    } else{
        k1.style.display = 'block'
    }
}


incicializar();

play.addEventListener('click', playPause);
previow.addEventListener('click', previowsong);
next.addEventListener('click', nextsong);
song.addEventListener('timeupdate', progressbar);
progresscontainer.addEventListener('click', jumpTo);