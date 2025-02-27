const text = document.querySelector(".head")
const btn = document.querySelectorAll(".btn")

btn.forEach((button) => {
  // button.style.backgroundColor = button.name
  button.addEventListener("click", () => {
    text.style.color = button.name
  })
})
