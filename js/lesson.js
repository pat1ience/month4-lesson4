const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

phoneButton.onclick = () => {
  const resExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

  if (resExp.test(phoneInput.value)) {
    phoneResult.innerText = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerText = "ERROR";
    phoneResult.style.color = "red";
  }
};

// TAB-SLIDER //

// const tabContentBlock = document.querySelectorAll(".tab_content_block");
// const tabContentItem = document.querySelectorAll(".tab_content_item");
// const tabContentItems = document.querySelector(".tab_content_items");

// let currentSlide = 0;
// const intervalTime = 3000;


// function hideTabItem() {
//   tabContentBlock.forEach((block) => {
//     block.style.display = "none";
//   });
//   tabContentItem.forEach((item) => {
//     item.classList.remove("tab_content_item_active");
//   });
// }

// function showContentBlock(index = 0) {
//   if (tabContentBlock[index]) {
//     tabContentBlock[index].style.display = "block";
//     tabContentItem[index].classList.add("tab_content_item_active");
//     currentSlide = index;
//   }
// }

// function nextSlide() {
//   currentSlide++;
//   const totalSlides = tabContentBlock.length;
//   if (currentSlide >= totalSlides) {
//     currentSlide = 0;
//   }
//   hideTabItem();
//   showContentBlock(currentSlide);
// }

// hideTabItem();
// showContentBlock();

// const autoSlideInterval = setInterval(nextSlide, intervalTime)
// tabContentItems.addEventListener("click", (event) => {
//   const target = event.target;
//   if (target.classList.contains("tab_content_item")) {
//     clearInterval(autoSlideInterval);
//     tabContentItem.forEach((item, index) => {
//       if (target === item) {
//         hideTabItem();
//         showContentBlock(index);
//       }
//     });
//   }
// });


const tabContentBlock = document.querySelectorAll(".tab_content_block");
const tabContentItem = document.querySelectorAll(".tab_content_item");
const tabContentItems = document.querySelector(".tab_content_items");

let currentSlide = 0;
const intervalTime = 3000;
let autoSlideInterval;

function hideTabItem() {
  tabContentBlock.forEach((block) => {
    block.style.display = "none";
  });
  tabContentItem.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
}

function showContentBlock(index = 0) {
  if (tabContentBlock[index]) {
    tabContentBlock[index].style.display = "block";
    tabContentItem[index].classList.add("tab_content_item_active");
    currentSlide = index;
  }
}

function nextSlide() {
  currentSlide++;
  const totalSlides = tabContentBlock.length;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  hideTabItem();
  showContentBlock(currentSlide);
}

function startAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, intervalTime);
}

hideTabItem();
showContentBlock();
startAutoSlide(); 

tabContentItems.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("tab_content_item")) {
    tabContentItem.forEach((item, index) => {
      if (target === item) {
        hideTabItem();
        showContentBlock(index);
      }
    });
    startAutoSlide();
  }
});

