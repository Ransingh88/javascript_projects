const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const autoSlideBtn = document.getElementById("autoSlide")
const displayImage = document.getElementById("carousel_image")
const imageIndicator = document.getElementById("imageIndicator")

const dataImage = [
  {
    src: "./images/adventure-4381674_1280.jpg",
    title: "test1",
  },
  {
    src: "./images/boat-8002718_1280.jpg",
    title: "",
  },
  {
    src: "./images/hamburg-3846525_1280.jpg",
    title: "",
  },
  {
    src: "./images/island-3542290_1280.jpg",
    title: "",
  },
  {
    src: "./images/mountain-7970232_1280.jpg",
    title: "",
  },
  {
    src: "./images/mountain-8346389_1280.jpg",
    title: "",
  },
  {
    src: "./images/nature-2990060_1280.jpg",
    title: "",
  },
  {
    src: "./images/ship-8308680_1280.jpg",
    title: "",
  },
  {
    src: "./images/water-5173774_1280.jpg",
    title: "",
  },
]

let activeImageIndex = 0
let autoSlideId
let slideStatus = false

nextBtn.addEventListener("click", () => {
  nextNavBtn()
})
prevBtn.addEventListener("click", () => {
  prevNavBtn()
})
autoSlideBtn.addEventListener("click", () => {
  if (!slideStatus) {
    autoSlide()
    slideStatus = true
    autoSlideBtn.innerText = "autoSlide On"
  } else {
    clearInterval(autoSlideId)
    slideStatus = false
    autoSlideBtn.innerText = "autoSlide Off"
  }
})

function nextNavBtn() {
  if (activeImageIndex == dataImage.length - 1) {
    activeImageIndex = 0
  } else {
    activeImageIndex++
  }
  displayImage.src = dataImage[activeImageIndex].src
  updateActiveIndicator()
}
function prevNavBtn() {
  if (activeImageIndex == 0) {
    activeImageIndex = dataImage.length
  } else {
    activeImageIndex--
  }
  displayImage.src = dataImage[activeImageIndex].src
  updateActiveIndicator()
}

function autoSlide() {
  autoSlideId = setInterval(() => {
    nextNavBtn()
  }, 2000)
}

function renderImageIndicator() {
  // dataImage.forEach((item, index) => {
  //   let indBtn = document.createElement("button")
  //   indBtn.innerText = index + 1
  //   indBtn.addEventListener("click", () => {
  //     displayImage.src = dataImage[index].src
  //   })
  //   imageIndicator.appendChild(indBtn)
  // })

  for (let index = 0; index < 3; index++) {
    let indBtn = document.createElement("button")
    indBtn.innerText = "0" + (index + 1)
    if (index == 0) {
      indBtn.classList.add("active")
    }
    indBtn.addEventListener("click", () => {
      activeImageIndex = index
      updateActiveIndicator()
      displayImage.src = dataImage[index].src
    })
    imageIndicator.appendChild(indBtn)
  }
  updateActiveIndicator()
}

function updateActiveIndicator() {
  const buttons = imageIndicator.getElementsByTagName("button")
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active")
  }
  buttons[activeImageIndex].classList.add("active")
}
renderImageIndicator()
