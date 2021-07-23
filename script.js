
/** MODAL **/
var modal = document.getElementById('myModal');

var img = document.getElementById('img_cv');
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}


 /** Hidden vertical bar when the user clicks on a link*/
const aListVertical = document.querySelectorAll(".ham-menu a");

aListVertical.forEach(function (aElement) {
  aElement.addEventListener('click', () => {
    const hamMenu = document.querySelector("#ham-menu");
    hamMenu.checked = false;

  })
});

// If the screen has a width above 1000px, the menu mustn't stay open //

// const size = window.innerWidth;
// window.onresize = function (){
//   if (size>=1000){
//     const hamMenu = document.querySelector("div\.ham-menu");
//     console.log(hamMenu.hidden)
//     hamMenu.hidden = true;
//     console.log(hamMenu.hidden)
//   }
// }

