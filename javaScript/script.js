const body = document.querySelector("body");
const button = document.createElement("button");
button.textContent = "Click here!";
body.appendChild(button);
button.setAttribute("style", "height: 40px; width: 100px");

let chosenNumber = 4;
let containerDiv;
let childDivs = [];

function chooseNumber() { 
    chosenNumber = +prompt("enter a number");
    if (typeof(chosenNumber) === "number" && chosenNumber <= 100) {
        updateGrid();
    }
    else {
        chooseNumber()
    }
}
button.addEventListener("click", chooseNumber);

function createGrid() {
    containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "container");
    containerDiv.setAttribute("style", " display: flex; height: 96%; width: 100%; flex-wrap: wrap;")
    body.appendChild(containerDiv);
}

function updateGrid() {
    if (containerDiv) {
        body.removeChild(containerDiv)
    }

    createGrid();
    
    let pixelSize = 960 / chosenNumber;
    
    for (let i=0; i<chosenNumber * chosenNumber; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "child-div");
        div.setAttribute("style", `width: ${pixelSize}px; height: ${pixelSize}px;`);
        containerDiv.appendChild(div);
        div.addEventListener("mouseover", () => {
            div.setAttribute("style", `width: ${pixelSize}px; height: ${pixelSize}px; background-color: blue;`)
        });

        childDivs.push(div);
    };
}

createGrid();

updateGrid();

