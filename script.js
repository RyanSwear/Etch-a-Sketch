let squareColor = 'black';
let gridSize = 16;
function init()
{
    const container = document.querySelector('#board');
    const clearB = document.querySelector('#clearB');
    const redB = document.querySelector('#redB');
    const blueB = document.querySelector('#blueB');
    const blackB = document.querySelector('#blackB');
    const randomB = document.querySelector('#randomB');
    const resetB = document.querySelector('#resetB');
    const grid = document.createElement('div');
    
    grid.style.color = 'blue';
    grid.classList.add('grid');
    grid.style.display = 'grid';
    grid.style.width = "480px";
    grid.style.height = "480px";
    grid.style.border = "2px solid black";
    grid.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr [col-start])';
    grid.style.gridTemplateRows = 'repeat(' + gridSize + ', 1fr [row-start])';


    for (let i = 0; i < (gridSize*gridSize); i++)
    {
        const square = document.createElement('div');
        square.style['background-color'] = 'lightgray';
        square.addEventListener('mouseenter', () => {square.style.backgroundColor = getSquareColor();});
        square.classList.add('square');
        grid.appendChild(square);
    }
    clearB.addEventListener('click', clearBoard);
    redB.addEventListener('click', changeSquareRed);
    blueB.addEventListener('click', changeSquareBlue);
    blackB.addEventListener('click', changeSquareBlack);
    randomB.addEventListener('click', changeSquareRandom);
    resetB.addEventListener('click', resetGrid);
    container.appendChild(grid);
}


function clearBoard(){
    let x = document.querySelectorAll('.square');
    for(let i = 0; i < x.length; i++)
    {
        x[i].style.backgroundColor = 'lightgray'; 
    }
    return;
}
function changeSquareRed(){squareColor = "red"};
function changeSquareBlue(){squareColor = "blue"};
function changeSquareBlack(){squareColor = "black"};
function changeSquareRandom(){squareColor = 'random'};
function getSquareColor(){
    if(squareColor == 'random')
    {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }else{return squareColor;}
}
function resetGrid(){
    var answer = prompt("Please enter grid size: (1 - 100)", "16");
    gridSize = answer;
    const container = document.querySelector('#board');
    while (container.hasChildNodes())
    {
        container.removeChild(container.firstChild);
    }
    const grid = document.createElement('div');
    
    grid.style.color = 'blue';
    grid.classList.add('grid');
    grid.style.display = 'grid';
    grid.style.width = "480px";
    grid.style.height = "480px";
    grid.style.border = "2px solid black";
    grid.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr [col-start])';
    grid.style.gridTemplateRows = 'repeat(' + gridSize + ', 1fr [row-start])';
    for (let i = 0; i < (gridSize*gridSize); i++)
    {
        const square = document.createElement('div');
        square.style['background-color'] = 'lightgray';
        square.addEventListener('mouseenter', () => {square.style.backgroundColor = getSquareColor();});
        square.classList.add('square');
        grid.appendChild(square);
    }
    container.appendChild(grid);
}
init();