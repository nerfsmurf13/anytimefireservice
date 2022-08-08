let mOpen = false;
let mMenu = document.getElementById("mobile-menu");

document.body.addEventListener("click", (e) => {
  if (e.target.tagName == "A") {
    mOpen = !mOpen;
    drawMenu();
  } else if (e.target.tagName != "A") {
    mOpen = !mOpen;
    drawMenu();
  }
  console.log(e.target.tagName);
});

let mButton = document.getElementById("mobile-button");
mButton.addEventListener("click", (e) => {
  // console.log(e);
  // console.log(mOpen);
  drawMenu();
});

let drawMenu = () => {
  if (mOpen) {
    mMenu.style.display = "block";
  } else {
    mMenu.style.display = "none";
  }
};
