// $(document).ready(function () {

//     $(".carousel-control-prev").click(function () {});
// });

var carousel = document.querySelector(".carousel-inner");
var items = document.querySelectorAll(".carousel-item");
var dots = document.querySelectorAll(".carousel-indicators button");
var prev = document.querySelector(".carousel-control-prev");
var next = document.querySelector(".carousel-control-next");

let active = 0;

next.onclick = function () {
  active += 1;
  reloadslider();
};

function reloadslider() {
  let checkLeft = items[active].offsetLeft;
  console.log(checkLeft);
  items.style.left = -checkLeft + "px";
}
