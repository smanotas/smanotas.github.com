//DOM
/*let container = document.querySelector(".container");

console.log(container);

let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link)
});

let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);
    })
});
*/
let cierre = document.querySelectorAll(".close");
cierre.forEach(function(cerrar){
    cerrar.addEventListener('click', function(){
        console.log(this);
    })
    cerrar.addEventListener('click', function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");
    
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");
        
        setTimeout(function(){
            location.href = "../";
        }, 1000);
        

        return false;
    })
});

