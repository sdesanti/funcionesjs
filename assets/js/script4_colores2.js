const elemento = document.getElementById('cuadrado'); 
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        elemento.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        elemento.style.backgroundColor = 'orange';
    }
    else if (event.key === 'd') {
        elemento.style.backgroundColor = 'skyblue';
    }})

    function crear_div(color) {
        const newDiv = document.createElement('div');
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.backgroundColor = 'white';
        newDiv.style.border = '1px solid black';
        newDiv.style.marginTop = '10px';
        newDiv.style.border = "20px solid black";
        return newDiv;
    }
    
document.addEventListener('keydown', function(event) {
let elemento2;
const keyDiv = document.getElementById('key');
        
    if (event.key === 'q') {
        keyDiv.innerHTML = '';
        elemento2 = crear_div();
        elemento2.style.backgroundColor = 'white';
        keyDiv.appendChild(elemento2);

    } else if (event.key === 'w') {
        keyDiv.innerHTML = '';
        elemento2 = crear_div();
        elemento2.style.backgroundColor = 'purple';
        keyDiv.appendChild(elemento2);

    } else if (event.key === 'e') {
        keyDiv.innerHTML = '';
        elemento2 = crear_div();
        elemento2.style.backgroundColor = 'grey';
        keyDiv.appendChild(elemento2);

    } else if (event.key === 'r') {
        keyDiv.innerHTML = '';
        elemento2 = crear_div();
        elemento2.style.backgroundColor = 'brown';
        keyDiv.appendChild(elemento2);
        }
    });