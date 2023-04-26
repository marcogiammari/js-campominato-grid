// INIT

const gridContainer = document.getElementById("grid");
const playBtn = document.getElementById("play-btn");

//

playBtn.addEventListener("click", function() {
    gridContainer.innerHTML = "";
    gridContainer.style.display = "grid"
    const gridSize = document.querySelector("select").value;
    if (gridSize==49) {
        gridContainer.style.gridTemplateColumns = "repeat(7, 4rem)"
    } else if (gridSize==81) {
        gridContainer.style.gridTemplateColumns = "repeat(9, 3.5rem)"
    }
    else {
        gridContainer.style.gridTemplateColumns = "repeat(10, 3rem)"
    }
    startGame(gridSize)
});

function startGame(difficulty) {
    
    for (let i = 1; i <= difficulty; i++) {
        let el = document.createElement("div");
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