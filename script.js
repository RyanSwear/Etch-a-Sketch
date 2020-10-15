function init()
{
    let squareColor = 'black';
    const container = document.querySelector('#board');
    const clearB = document.querySelector('#clearB');

    const grid = document.createElement('div');
    
    grid.style.color = 'blue';
    grid.classList.add('grid');
    grid.style.display = 'grid';
    grid.style.width = "480px";
    grid.style.height = "480px";
    grid.style.border = "2px solid black";
    grid.style.gridTemplateColumns = 'repeat(16, 1fr [col-start])';
    grid.style.gridTemplateRows = 'repeat(16, 1fr [row-start])';


    for (let i = 0; i < (16*16); i++)
    {
        const square = document.createElement('div');
        square.style['background-color'] = 'lightgray';
        square.addEventListener('mouseenter', () => {square.style.backgroundColor = squareColor;});
        square.classList.add('square');
        grid.appendChild(square);
    }
    clearB.addEventListener('click', clearBoard);

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

init();