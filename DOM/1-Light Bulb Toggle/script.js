// -------------Given Assignment----------------
// const bulb = document.querySelector(".bulb")
// const toggle_btn = document.querySelector(".toggle_btn")
// const container = document.querySelector(".container")
// const bStatus = document.querySelector(".bulbStatus")
// let bulbStatus = true

// toggle_btn.addEventListener("click", () => {
//   toggleBulb()
// })

// function toggleBulb() {
//   if (!bulbStatus) {
//     bulb.classList.add("bulb_on")
//     container.style.background = "#202020"
//     container.style.color = "#f5f5f5"
//     toggle_btn.innerText = "turn Off"
//     bStatus.innerText = "Status On"
//     bulbStatus = true
//   } else {
//     bulb.classList.remove("bulb_on")
//     container.style.background = "#f5f5f5"
//     container.style.color = "#202020"
//     toggle_btn.innerText = "turn On"
//     bStatus.innerText = "Status Off"
//     bulbStatus = false
//   }
// }
// toggleBulb()
// --------------------end----------------------

const toggle_btn = document.querySelector(".toggle_btn")
const bulb = document.querySelector(".bulb")
const container = document.querySelector(".container")
let bulbStatus = false

toggle_btn.addEventListener("click", () => {
  if (!bulbStatus) {
    toggle_btn.innerText = "I"
    bulbStatus = true
  } else {
    toggle_btn.innerText = "O"
    bulbStatus = false
  }
  bulb.classList.toggle("on")
  container.classList.toggle("glow")
})

console.log(toggle_btn)
