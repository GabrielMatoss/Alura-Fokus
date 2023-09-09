const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

focoBt.addEventListener("click", () => {
    changeContext("foco");
});

curtoBt.addEventListener("click", () => {
    changeContext("descanso-curto");
});

longoBt.addEventListener("click", () => {
    changeContext("descanso-longo");
});

function changeContext(context) {
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
}

