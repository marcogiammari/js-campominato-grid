// INIT

gridContainer = document.getElementById("grid");
playBtn = document.getElementById("play-btn");

//

playBtn.addEventListener("click", function() {
    gridContainer.innerHTML = "";
    gridSize = document.querySelector("select").value
    startGame(gridSize)
});

function startGame(difficulty) {
    console.log(difficulty)
    for (let i = 1; i <= difficulty; i++) {
        el = document.createElement("div");
        el.classList.add("square");
        el.innerText = i;
        el.addEventListener("click", function() {
            this.classList.toggle("clicked");
            console.log(this.innerText)
        })
        gridContainer.appendChild(el);
    }
}

// ricordati di cambiare la width dei quadrati in base al numero totale