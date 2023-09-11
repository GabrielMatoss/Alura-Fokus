const html = document.querySelector("html");
const focusBt = document.querySelector(".app__card-button--foco");
const shortBt = document.querySelector(".app__card-button--curto");
const longBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const startPauseBt = document.querySelector("#start-pause");
const buttons = document.querySelectorAll(".app__card-button");
const musicFocusInput = document.querySelector("#alternar-musica");
const initOrPauseBt = document.querySelector("#start-pause span");
const iconPlay = document.querySelector(".app__card-primary-butto-icon");
const timeScreen = document.querySelector("#timer");

const music = new Audio("./sons/luna-rise-part-one.mp3");
const endCountDownSong = new Audio("./sons/beep.mp3");
const initCountDownSong = new Audio("./sons/play.wav");
const pauseCountDownSong = new Audio("./sons/pause.mp3");

let elapsedTimeInSeconds = 1500;
let intervalID = null;

music.loop = true;

musicFocusInput.addEventListener("change", () => {
    music.paused ? music.play() : music.pause();
})

focusBt.addEventListener("click", () => {
    elapsedTimeInSeconds = 1500;
    changeContext("foco");
    focusBt.classList.add("active");
});

shortBt.addEventListener("click", () => {
    elapsedTimeInSeconds = 300;
    changeContext("descanso-curto");
    shortBt.classList.add("active");
});

longBt.addEventListener("click", () => {
    elapsedTimeInSeconds = 900;
    changeContext("descanso-longo");
    longBt.classList.add("active");
});

function changeContext(context) {
    showTime();
    buttons.forEach((btn) => {
        btn.classList.remove("active");
    });
   
    html.setAttribute("data-contexto", context);
    banner.setAttribute("src", `./imagens/${context}.png`);

    switch (context) {
        case "foco":
            title.innerHTML = `
            Otimize sua produtividade, <br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            title.innerHTML = `
            Que tal dar uma respirada? 
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
        `
            break;
        case "descanso-longo" :
            title.innerHTML = `
            Hora de voltar à superfície.
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    };
};

const countdown = () => {
    if(elapsedTimeInSeconds <= 0) {
        endCountDownSong.play();
        alert("Tempo finalizado!");
        reset();
        return
    }
    
    elapsedTimeInSeconds -= 1;
    showTime();
}

startPauseBt.addEventListener("click", startStop);

function startStop() {
    if(intervalID){
        pauseCountDownSong.play();
        reset();
        return
    }
    initCountDownSong.play();
    intervalID = setInterval(countdown, 1000);
    iconPlay.setAttribute("src", "./imagens/pause.png");
    initOrPauseBt.textContent = "Pausar";
}

function reset() {
    clearInterval(intervalID);
    initOrPauseBt.textContent = "Começar"
    iconPlay.setAttribute("src", "./imagens/play_arrow.png");
    intervalID = null;
}

function showTime () {
    const time = new Date(elapsedTimeInSeconds * 1000);
    const timeFormated = time.toLocaleTimeString("pt-br", {
        minute: "2-digit",
        second: "2-digit"
    });
    timeScreen.innerHTML = `${timeFormated}`;
}

showTime();