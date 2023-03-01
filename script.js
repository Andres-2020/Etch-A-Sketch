// Variables

const colorPicker = document.querySelector ('#color');

let color = colorPicker.value;

const random = document.querySelector ('#random');

const eraser = document.querySelector ('#eraser');

const reset = document.querySelector ('#reset');

const text = document.querySelector ('#sizeText');

const range = document.querySelector ('#range');

let size = range.value;

const grid = document.querySelector ('#grid');

// Function declarations

function randomColor () {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

function gridDisplay () {
    for (let i = 1; i < (size * size) + 1; i++) {
        grid.style.display = 'grid';
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        const div = document.createElement ('div');
        grid.appendChild (div);

        function mouseOver () {
            div.addEventListener ('mouseover', () => {
            color = colorPicker.value;
            div.style.backgroundColor = `${color}`;
            });
        }

        mouseOver();

        colorPicker.addEventListener ('input', () => {
            mouseOver()
        });
        
        random.addEventListener ('click', () => {
            div.addEventListener ('mouseover', () => {
            color = randomColor();
            div.style.backgroundColor = `${color}`;
            });
        });
        
        eraser.addEventListener ('click', () => {
            div.addEventListener ('mouseover', () => {
            color = 'white';
            div.style.backgroundColor = `${color}`;
            });
        });
        
        reset.addEventListener ('click', () => {
            div.style.backgroundColor = `white`;
            mouseOver();
        });
    }
}

gridDisplay();

range.addEventListener ('input', () => {
    grid.innerHTML = '';
    color = colorPicker.value;
    size = range.value;
    text.innerText = `${size} x ${size}`
    gridDisplay();
});