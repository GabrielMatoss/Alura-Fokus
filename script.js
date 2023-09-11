const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const startPauseBt = document.querySelector("#start-pause");
const botoes = document.querySelectorAll(".app__card-button");

const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("./sons/luna-rise-part-one.mp3");
const endCountDownSong = new Audio("./sons/beep.mp3");
const initCountDownSong = new Audio("./sons/play.wav");
const pauseCountDownSong = new Audio("./sons/pause.mp3");


let tempoDecorridoEmSegundos = 5;
let intervaloID = null;

musica.loop = true;

musicaFocoInput.addEventListener("change", () => {
    musica.paused ? musica.play() : musica.pause();
})

focoBt.addEventListener("click", () => {
    changeContext("foco");
    focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
    changeContext("descanso-curto");
    curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
    changeContext("descanso-longo");
    longoBt.classList.add("active");
});

function changeContext(context) {
    botoes.forEach((btn) => {
        btn.classList.remove("active");
    });
   
    html.setAttribute("data-contexto", context);
    banner.setAttribute("src", `./imagens/${context}.png`);

    switch (context) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade, <br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? 
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
        `
            break;
        case "descanso-longo" :
            titulo.innerHTML = `
            Hora de voltar à superfície.
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    };
};

const countdown = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        endCountDownSong.play();
        alert("Tempo finalizado!");
        reset();
        return
    }
    
    tempoDecorridoEmSegundos -= 1;
    console.log("Temporizador: " + tempoDecorridoEmSegundos);
    console.log("Id: " + intervaloID);
   
}

startPauseBt.addEventListener("click", startStop);

function startStop() {
    if(intervaloID){
        pauseCountDownSong.play();
        reset();
        return
    }
    initCountDownSong.play();
    intervaloID = setInterval(countdown, 1000);
}

function reset() {
    clearInterval(intervaloID);
    intervaloID = null;
}