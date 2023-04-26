// INIT

const gridContainer = document.getElementById("grid");
const playBtn = document.getElementById("play-btn");

// associo la funzione al bottone
playBtn.addEventListener("click", function () {
    // svuoto il contenuto della griglia
    gridContainer.innerHTML = "";
    gridContainer.style.display = "grid"
    const gridSize = document.querySelector("select").value;
    // assegno a una variabile la difficoltà scelta dell'utente e la passo come argomento alla funzione startGame
    if (gridSize == 49) {
        gridContainer.style.gridTemplateColumns = "repeat(7, auto)"
    } else if (gridSize == 81) {
        gridContainer.style.gridTemplateColumns = "repeat(9, auto)"
    }
    else {
        gridContainer.style.gridTemplateColumns = "repeat(10, auto)"
    }
    startGame(gridSize)
});

// definisco startGame
function startGame(difficulty) {

    for (let i = 1; i <= difficulty; i++) {
        let el = document.createElement("div");
        el.classList.add("square");
        el.innerText = i;
        el.addEventListener("click", function () {
            this.classList.toggle("clicked");
            console.log(this.innerText)
        })
        gridContainer.appendChild(el);
    }
}
