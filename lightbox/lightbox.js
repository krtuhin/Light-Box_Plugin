/*
Plugin Name : LightBox
Plugin Version: 1.0.0
Plugin Author: Tuhin Kumar
About Plugin: .....
*/

// function to include popup html
function includePopup() {
  let html =
    ' <div id="popup"><span onclick = "closePopUp()"><img id="close" src="lightbox/images/close.png" alt="" /></span><img id="left" src="lightbox/images/left.png" alt="" /><img id="right" src="lightbox/images/right.png" alt="" /><img id="mainImage" src="images/image1.jpg" alt="" /></div>';

  let popdiv = document.createElement("div");
  popdiv.innerHTML = html;
  document.body.insertBefore(popdiv, document.body.firstElementChild);
}

let imgs;
let currentImg;

// function to init plugin
function popupInit(target) {
  // select all images with class target
  imgs = document.getElementsByClassName(target);

  // add event listener on all selected images
  for (let img of imgs) {
    // add cursor pointer
    img.style.cursor = "pointer";

    // add event listener on images
    img.addEventListener("click", () => {
      document.getElementById("mainImage").src = img.src;
      document.getElementById("popup").style.display = "block";
      checkArrow();
    });
  }

  includePopup();

  // event listener for left arrow
  document.getElementById("left").addEventListener("click", () => {
    prevImg();
  });

  // event listener for right arrow
  document.getElementById("right").addEventListener("click", () => {
    nextImg();
  });
}

// popup close function
function closePopUp() {
  document.getElementById("mainImage").src = "";
  document.getElementById("popup").style.display = "none";
}

// next image function
function nextImg() {
  getCurrentImage();
  currentImg++;
  document.getElementById("mainImage").src = imgs[currentImg].src;
  checkArrow();
}

// previous image function
function prevImg() {
  getCurrentImage();
  currentImg--;
  document.getElementById("mainImage").src = imgs[currentImg].src;
  checkArrow();
}

// function to get current image number
function getCurrentImage() {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].src == document.getElementById("mainImage").src) {
      currentImg = i;
    }
  }
}

// function to hide arrows based on condition
function checkArrow() {
  getCurrentImage();

  if (currentImg == 0) {
    document.getElementById("left").style.display = "none";
  } else {
    document.getElementById("left").style.display = "block";
  }

  if (currentImg == imgs.length - 1) {
    document.getElementById("right").style.display = "none";
  } else {
    document.getElementById("right").style.display = "block";
  }
}
