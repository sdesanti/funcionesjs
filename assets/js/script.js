function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);

const ele2 = document.getElementById("ele2")
ele2.addEventListener("click", () => (ele2.style.backgroundColor = "red"));

const ele3 = document.getElementById("ele3");
    ele3.style.backgroundColor = 'green';
ele3.addEventListener("click", function() {
    ele3.style.backgroundColor = 'yellow';
})


