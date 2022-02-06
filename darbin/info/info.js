const nav = document.querySelector(".nav")
const btn_menu = document.querySelector(".btn_menu")
const nav_main = document.querySelector(".nav_main")


let size = 150
let color = true








Array.prototype.random = function (length) {
    return this[Math.floor((Math.random()*length))];
}


let menu_bull = true


btn_menu.addEventListener("click",function (e) {
   
       menu_bull = !menu_bull
         if (!menu_bull) {
            nav_main.style.display= "flex"
            btn_menu.innerText = `փակել մենյուն`
            nav.style.background = "black"
          } else {
            nav_main.style.display = "none"
            btn_menu.innerText = `Ցուցադրել  մենյուն`
            nav.style.background = `linear-gradient(70deg, rgba(95, 82, 85, 0.8) 0%, rgba(58, 54, 53, 0.8) 70%)`
          } 
         
    
        console.log(1)   
});




window.addEventListener('resize', menu);
menu()
function menu() {
    if (nav.offsetWidth <600) {
        nav_main.style.display = "none"
        btn_menu.style.display = "block"
   }else{
       nav_main.style.display= "flex"
       btn_menu.style.display = "none"
   }
 
}

let grad = 0

setInterval(() => {
    grad +=5
    btn_menu.style.background = `linear-gradient(90deg, rgba(20, 20, 20, 0.986) ${grad}%, rgba(88, 132, 138, 0.8) 100%)`
    if (grad >= 95) {
        grad = 0
    }

}, 100);

console.log(btn_menu)



  
  

 




