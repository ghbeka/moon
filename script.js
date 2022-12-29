 let log = document.getElementById("dark");
 let body = document.querySelector("body");
 let h = document.querySelector("h1");


 let s = "Good morning!";
 let m = "Good evening!";
 

  
 log.addEventListener("click", function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness")){
            body.style.backgroundColor = "rgb(29, 29, 29)";
            body.style.color = "white";
            body.style.transition = "1s";
            h.innerHTML = m;
    }else{
        body.style.backgroundColor = "rgb(229, 240, 135)";
        body.style.color = "black";
        body.style.transition = "1s";
        h.innerHTML = s;
    }
 })
