// INIT
const gridContainer = document.getElementById("grid");
const playBtn = document.getElementById("play-btn");

// associo la funzione al bottone
playBtn.addEventListener("click", function () {
    // svuoto il contenuto della griglia
    gridContainer.innerHTML = "";
    gridContainer.style.display = "grid"
    let gridNum = document.querySelector("select").value;
    // opzione alternativa con radice quadrata per gestire il numero di colonne
    gridContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(gridNum)}, 1fr)`;
    startGame(gridNum)
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
