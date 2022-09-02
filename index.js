const btn = document.querySelector(".btn");


btn.addEventListener("click", function() {
  randomRgNum();

})

function randomRgNum() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let rgb = "rgb("+ r + "," + g + "," + b +")";
  document.body.style.backgroundColor = rgb;
}

//randomRgNum();
