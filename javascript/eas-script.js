let gridContainer = document.querySelector
                        (".gridContainer");
let buttonReset = document.querySelector(".buttonReset")
let buttonBlack = document.querySelector(".buttonBlack")
let buttonRandom = document.querySelector(".buttonRandom")
let square;
let squareAmount = 625;
let totalSquares;
let squaresInput;
let flexBasis;
generateGrid();
colorChange();

function generateGrid(){
    for(let i = 1; i <= squareAmount; i++){
        square = document.createElement('div');
        gridContainer.appendChild(square);
    }
}

function colorChange(){
    totalSquares = document.querySelectorAll
        ('.gridContainer div');
        console.log("square count = " + totalSquares.length)
    for(let i = 0; i < totalSquares.length; i++){
        totalSquares[i].addEventListener
        ("mouseover", colorChangeTrue);
    }
}

function colorChangeTrue() {
    this.style.backgroundColor = "darkBlue";
}

buttonReset.addEventListener("click", resetGrid);

function resetGrid() {
    squaresInput = prompt("Enter square amount (16-100):", "100");
    if(squaresInput == null || squaresInput < 16 || squaresInput > 100) {
        alert("Please input a number between 16 and 100");
        resetGrid();
    } else {
        squareAmount = squaresInput*squaresInput;
        removeSquares();
        generateGrid();
        colorChange()
        resetFlex();
        }
    }

function resetFlex(){
    flexBasis = 900 / squaresInput + "px";
        for (let i = 0 ; i < totalSquares.length; i++){
            totalSquares[i].style.flexBasis = flexBasis;
}
}

function removeSquares() {
    while (gridContainer.hasChildNodes() ) {
    gridContainer.removeChild(gridContainer.firstChild);
    }
}

buttonBlack.addEventListener('click', revertColor);

function revertColor(){
        totalSquares = document.querySelectorAll(".gridContainer div");
        
        for (let i = 0; i < totalSquares.length; i++) {
            totalSquares[i].removeEventListener("mouseover", setRandomColour);
            totalSquares[i].addEventListener("mouseover", colorChangeTrue);
        }
      }

buttonRandom.addEventListener('click', switchToColours);
      
      
function switchToColours() {
allGridSquares = document.querySelectorAll(".grid-container div");
        
        for (let i = 0; i < totalSquares.length; i++) {
            totalSquares[i].removeEventListener("mouseover", revertColor);
            totalSquares[i].addEventListener("mouseover", setRandomColour);
        }
      }
function setRandomColour() {
        this.style.backgroundColor = random_rgb();
}
      
function random_rgb() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
      }

