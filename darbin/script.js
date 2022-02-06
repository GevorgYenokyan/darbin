const nav = document.querySelector(".nav")
const btn_menu = document.querySelector(".btn_menu")
const nav_main = document.querySelector(".nav_main")
const headr_div = document.querySelector(".header")
const products = document.querySelector(".products")
const products_div = document.querySelectorAll(".products_div")
const next_div = document.querySelector(".next_div")
const prev_div = document.querySelector(".prev_div")
const product_img1 = document.getElementById("products_img_div1")
const product_img2 = document.getElementById("products_img_div2")
const product_img3 = document.getElementById("products_img_div3")
const product_img4 = document.getElementById("products_img_div4")
const cont_all = document.querySelector(".cont_all")
const text = document.querySelector(".paragr_text")
const nav_logo_left = document.querySelector(".nav_logo_left")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".slider_img");
const sliderContener = document.querySelector(".slider-contener");
const sliderNext = document.querySelector(".slider-next")
const sliderPrev = document.querySelector(".slider-prev")
const sliderN = document.querySelector(".sliderN")
const down = document.querySelector(".block_down")
const up = document.querySelector(".block_up")
const closeBtn = document.querySelector(".close")
const contenerImg = document.querySelector(".cont_all")


let i = 0;
let width = slider.offsetWidth

function changeSlide() {
    sliderContener.style.width = `${width * images.length}px`;
    images.forEach(el => {
        el.style.width = `${width}px`;
        el.style.height = "auto";
    });
    changWidth();
}

changeSlide();
window.addEventListener('resize', changeSlide);

sliderNext.addEventListener('click', function () {
    i++;
    if (i >= images.length) {
        i = 0;
    }                                                                                                          
    changWidth();
   
 if (i > 0) {
    sliderPrev.style.display = `block`
 } 

 
if (i ==0) {
    sliderPrev.style.display = `none`
 } 

});

sliderPrev.addEventListener('click', function () {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    changWidth();
    

});

function changWidth() {
    sliderContener.style.transform = `translate(-${i * width}px)`
    sliderN.innerHTML =`<p class = "slideNamber">սլայդ N.${1+i} </P>`
}

 
if (i ==0) {
    sliderPrev.style.display = `none`
 } 


 let bool = true;




slider.addEventListener("dblclick", imgWidth)


function imgWidth(e) {
     if (e.target.tagName=="IMG") {
     down.style.display =`none`
     up.style.display = `none`    
    closeBtn.style.display = "flex"
    document.body.style.backgroundColor = "black"      
         }
         
};


closeBtn.addEventListener("click",function() { 
    down.style.display =`block`
    up.style.display = `block`    
   closeBtn.style.display = "none" 
   document.body.style.backgroundColor = ""   
          
});






let size = 150
let color = true


products.addEventListener("click",imgWidth) 



setInterval(() => {

    if (color) {
        size +=0.2   
        headr_div.style.backgroundSize=`${size}%`;
        
    }else{
        size -=0.2   
        headr_div.style.backgroundSize=`${size}%`;
    }
   if (size >= 250) {
       color = false
       
   }else if (size==150) {
       color = true
       
   }

}, 30);




prev_div.addEventListener("click", function() {
    products_div.forEach((el)=>{
        el.style.transform = `translate(-${70}%)`
    })
})


next_div.addEventListener("click", function () {
    products_div.forEach((el)=>{
        el.style.transform = `translate(${70}%)`
    })
})

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


let arr_img1 = ["img/gates/gates1.jpg","img/gates/gates2.jpg","img/gates/gates3.jpg","img/gates/gates4.jpg"]

let arr_img2 =["img/dors/dors1.jpg","img/dors/dors2.jpg","img/dors/dors3.jpg","img/dors/dors4.jpg"]

let arr_img3 = ["img/railing/railing1.jpg","img/railing/railing2.jpg","img/railing/railing3.jpg","img/railing/railing4.jpg"]

let arr_img4 = ["img/tagavandak.jpg","img/tagavandak1.jpg","img/243762458_189045100034609_1250091406519733870_n.jpg",]


let arrImg = [arr_img1,arr_img2,arr_img3,arr_img4]



setInterval(() => {
     arrImg.map((el,i) =>{
        if (i == 0) {
             product_img1.innerHTML=`<img class="products_img" src=${el.random(el.length) }>`
        }else if(i==1){
            product_img2.innerHTML=`<img class="products_img" src=${el.random(el.length) }>`
        }else if(i==2){
            product_img3.innerHTML=`<img class="products_img" src=${el.random(el.length) }>`
        }else if(i==3){
          product_img4.innerHTML=`<img class="products_img" src=${el.random(el.length) }>`
        }
     })
  }, 10000);

  
  

 




