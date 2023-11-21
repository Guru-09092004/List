
const Things = ['ball', 'Pen', 'newBook', 'keyboard'];

let button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    document.getElementById("ID").textContent = Things.pop()

})
