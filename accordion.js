const accItem = document.getElementsByClassName('accordion-title');
let i;
for (i = 0; i < accItem.length; i++) {
  accItem[i].addEventListener("click", function(){
    this.classList.toggle("accordion-active");
  });
}