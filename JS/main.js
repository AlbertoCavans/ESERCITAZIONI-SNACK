// /* LINKS TO HTML */
// const imgsBoxLink = document.querySelector(".imgs-box");
// const arrowDownLink = document.querySelector(".arrow-down");
// const arrowUpLink = document.querySelector(".arrow-up");
// const sideColumn = document.querySelector(".side-column-slides");

// /* PROCESS */
// const imgs = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// const allMiniImgs = document.getElementsByClassName("mini-img");

// /* IMG CURRENTLY SHOWN */
// let currentIndex = 0;

// /* CREATE IMGS */
// let imgsHtml = "";
// for (let i = 0; i < imgs.length; i++) {
//   const img = imgs[i];

//   let selectedClass;
//   if (i == currentIndex) {
//     selectedClass = "selected";
//   } else {
//     selectedClass = "";
//   }
//   imgsHtml += `<img src="./img/${img}" class="img ${selectedClass}" alt="img ${i}" />`;
// }
// imgsBoxLink.innerHTML = imgsHtml;

// /* ARROW DOWN */

// arrowDownLink.addEventListener("click", function () {
//   selfClickDown();

//   /*   let miniImgHtml = "";
//   for (let i = 0; i < imgs.length; i++) {
//     const img = imgs[i];

//     let selectedClass;
//     if (i == currentIndex) {
//       selectedClass = "selected";
//     } else {
//       selectedClass = "";
//     }
//     miniImgHtml += `<div class="mini-slide">
//   <img src="./img/${img}" class="mini-img ${selectedClass}" alt="img 01" />
// </div>`;
//   }
//   sideColumn.innerHTML = miniImgHtml; */
// });

// /* ARROW UP */

// arrowUpLink.addEventListener("click", function () {
//   const oldMiniImg = allMiniImgs[currentIndex];
//   oldMiniImg.classList.remove("selected");

//   const allImgs = document.getElementsByClassName("img");
//   let prevImg = allImgs[currentIndex];
//   prevImg.classList.remove("selected");

//   if (currentIndex <= 0) {
//     currentIndex = allImgs.length - 1;
//   } else {
//     currentIndex--;
//   }

//   const newMiniImg = allMiniImgs[currentIndex];
//   newMiniImg.classList.add("selected");

//   const nextImg = allImgs[currentIndex];
//   nextImg.classList.add("selected");

//   /*   let miniImgHtml = "";
//   for (let i = 0; i < imgs.length; i++) {
//     const img = imgs[i];

//     let selectedClass;
//     if (i == currentIndex) {
//       selectedClass = "selected";
//     } else {
//       selectedClass = "";
//     }
//     miniImgHtml += `<div class="mini-slide">
//   <img src="./img/${img}" class="mini-img ${selectedClass}" alt="img 01" />
// </div>`;
//   }
//   sideColumn.innerHTML = miniImgHtml; */
// });

// /* CREATE MINI-IMGS */
// let miniImgHtml = "";
// for (let i = 0; i < imgs.length; i++) {
//   const img = imgs[i];

//   let selectedClass;
//   if (i == currentIndex) {
//     selectedClass = "selected";
//   } else {
//     selectedClass = "";
//   }
//   miniImgHtml += `<div class="mini-slide"">
//   <img src="./img/${img}" class="mini-img ${selectedClass}" alt="img 01  data-selected-image="${i}"/>
// </div>`;
// }
// sideColumn.innerHTML = miniImgHtml;

// /* CLICK MINI-IMGS */

// /* for (let i = 0; i < allMiniImgs.length; i++) {
//   const miniImg = allMiniImgs[i];
//   miniImg.addEventListener("click", function () {
//     const oldMiniImg = allMiniImgs[currentIndex];
//     oldMiniImg.classList.remove("selected");

//     currentIndex = parseInt(miniImg.getAttribute("data-selected-image"));

//     const newMiniImg = allMiniImgs[currentIndex];
//     newMiniImg.classList.add("selected");

//     const img = imgs[currentIndex];
//     const imgsHtml = `<img src="./img/${img}" class="img ${selectedClass}" alt="img ${i}"  data-selected-image="${i} />`;
//     imgsBoxLink.innerHTML = imgsHtml;
//   });
// } */

// /* INTERVALS */

// setInterval(function () {
//   selfClickDown();
//   /*   const oldMiniImg = allMiniImgs[currentIndex];
//   oldMiniImg.classList.remove("selected");

//   const allImgs = document.getElementsByClassName("img");
//   let prevImg = allImgs[currentIndex];
//   prevImg.classList.remove("selected");

//   if (currentIndex >= allImgs.length - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }

//   const newMiniImg = allMiniImgs[currentIndex];
//   newMiniImg.classList.add("selected");

//   const nextImg = allImgs[currentIndex];
//   nextImg.classList.add("selected"); */
// }, 3000);

// /* SELFCLICK */

// function selfClickDown() {
//   const oldMiniImg = allMiniImgs[currentIndex];
//   oldMiniImg.classList.remove("selected");

//   const allImgs = document.getElementsByClassName("img");
//   let prevImg = allImgs[currentIndex];
//   prevImg.classList.remove("selected");

//   if (currentIndex >= allImgs.length - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }

//   const newMiniImg = allMiniImgs[currentIndex];
//   newMiniImg.classList.add("selected");

//   const nextImg = allImgs[currentIndex];
//   nextImg.classList.add("selected");
// }

// ( New version

// * Elements
const slideContainerEl = document.querySelector(".imgs-box");
const thumbnailsEl = document.querySelector(".side-column-slides");
const arrowPrevEl = document.querySelector(".arrow-up");
const arrowNextEl = document.querySelector(".arrow-down");

// * Main Array
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// *Current IMG
let slideIndex = 0;

// * Logic

// ! For loop slides
let slidesHtml = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i == slideIndex ? "selected" : "";
  slidesHtml += `<img src="./img/${slide}" class="img ${activeClass}" alt="img ${i}" />`;
}

slideContainerEl.innerHTML = slidesHtml;

// ! For loop thumbnails
let thumbnailsHtml = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i == slideIndex ? "selected" : "";
  thumbnailsHtml += `<div class="mini-slide">
  <img src="./img/${slide}" class="mini-img ${activeClass}" alt="img ${i}" />
</div>`;
  thumbnailsEl.innerHTML = thumbnailsHtml;
}

//  ! Arrow-Next
arrowNextEl.addEventListener("click", function () {
  // Pick the slides-group
  const allSlides = document.getElementsByClassName("img");
  const allThumbnails = document.getElementsByClassName("mini-img");

  // Delete "selected" by slideIndex
  const oldSlide = allSlides[slideIndex];
  oldSlide.classList.remove("selected");
  const oldThumbnail = allThumbnails[slideIndex];
  oldThumbnail.classList.remove("selected");

  // Show the new slide
  /* if (slideIndex >= 4) {
    slideIndex = 0;
    console.log(slideIndex);
  } else {
    slideIndex++;
    console.log(slideIndex);
  } */
  slideIndex >= allSlides.length - 1 ? (slideIndex = 0) : slideIndex++;

  const newSlide = allSlides[slideIndex];
  newSlide.classList.add("selected");
  const newThumbnail = allThumbnails[slideIndex];
  newThumbnail.classList.add("selected");
});

//  ! Arrow-Prec
arrowPrevEl.addEventListener("click", function () {
  // Pick the slides-group
  const allSlides = document.getElementsByClassName("img");
  const allThumbnails = document.getElementsByClassName("mini-img");

  // Delete "selected" by slideIndex
  const oldSlide = allSlides[slideIndex];
  oldSlide.classList.remove("selected");
  const oldThumbnail = allThumbnails[slideIndex];
  oldThumbnail.classList.remove("selected");

  // Show the new slide
  slideIndex <= 0 ? (slideIndex = allSlides.length - 1) : slideIndex--;

  const newSlide = allSlides[slideIndex];
  newSlide.classList.add("selected");
  const newThumbnail = allThumbnails[slideIndex];
  newThumbnail.classList.add("selected");
});
