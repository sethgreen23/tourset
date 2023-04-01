let allBtn = document.querySelectorAll(".btn");
btnHam = document.querySelector(".btn-hamburger");
btnClose = document.querySelector(".btn-close");
headerNav = document.querySelector(".header-nav");
headerFlex = document.querySelector(".header-flex");
allBtn.forEach(btn=>{
  btn.addEventListener("click", function(e){
    btnHam.classList.toggle("no-visible");
    btnClose.classList.toggle("no-visible");
    headerNav.classList.toggle("no-display");
    headerFlex.classList.toggle("mg-40");
  });

})
window.addEventListener("resize", function(e){
  if(this.innerWidth >= 1000){
    // headerNav.style.backgroundColor = 'green';
    headerNav.classList.remove("no-display")
  }else{
    headerNav.classList.add("no-display")
  }
})

function onload(){
  if(window.innerWidth >= 1000){
    // headerNav.style.backgroundColor = 'green';
    headerNav.classList.remove("no-display")
  }else{
    headerNav.classList.add("no-display")
  }
}