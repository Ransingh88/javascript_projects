const feedbackInput = document.getElementById("feedback_input")
const submitBtn = document.getElementById("submit_btn")
const removeAllBtn = document.getElementById("removeAll_btn")
const feedbackList = document.getElementById("feedbacks")
const feedback_inputContainer = document.getElementById(
  "feedback_inputContainer"
)
const noFeedbackFallback = document.getElementById("noItem")

window.addEventListener("load", () => {
  if (feedbackList.childNodes.length < 1) {
    noFeedbackFallback.innerText = "No feedback yet!"
  } else {
    noFeedbackFallback.innerText = ""
  }
})

submitBtn.addEventListener("click", () => {
  submitFeedback()
  if (feedbackList.childNodes.length > 0) {
    noFeedbackFallback.innerText = ""
    removeAllBtn.style.display = "block"
  }
})
removeAllBtn.addEventListener("click", () => {
  removeAllFeedback()
})
feedbackInput.addEventListener("keypress", () => {
  document.getElementById("error").innerText = ""
  feedbackInput.classList.remove("inputFocus")
})

function submitFeedback() {
  const inputValue = feedbackInput.value

  if (!inputValue) {
    document.getElementById("error").innerText = "*field can't be empty!"
    feedbackInput.classList.add("inputFocus")
    feedbackInput.focus()
  } else {
    const feedbackItem = document.createElement("li")
    feedbackItem.innerText = inputValue

    // feedbackList.appendChild(feedbackItem)
    feedbackList.insertBefore(feedbackItem, feedbackList.firstChild)
    feedbackInput.value = ""
  }
}

function removeAllFeedback() {
  const feedbackListt = document.getElementById("feedbacks")
  feedbackListt.innerHTML = null
  noFeedbackFallback.innerText = "No feedback yet!"
  if (feedbackListt.childNodes.length < 1) {
    setTimeout(() => {
      removeAllBtn.style.display = "none"
    }, 2000)
  }
  //   const allFeedBacks = feedbackListt.childNodes
  //   console.log(allFeedBacks)
  //   allFeedBacks.forEach(function (node, index) {
  //     console.log(node, index)
  //     feedbackListt.removeChild(node)
  //     console.log("child removed")
  //   })
}

const starRating = document.getElementById("starRating")

function addStartRating() {
  for (let i = 0; i < 3; i++) {
    let star = document.createElement("img")
    star.src = "star-outline.svg"
    star.alt = "starimg"
    star.classList.add("outline")
    starRating.appendChild(star)
  }
}
// addStartRating()
