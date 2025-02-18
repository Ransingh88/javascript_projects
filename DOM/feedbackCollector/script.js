const feedbackInput = document.getElementById('feedback_input')
const submitBtn = document.getElementById('submit_btn')
const removeAllBtn = document.getElementById('removeAll_btn')
const feedbackList = document.getElementById('feedbacks')

submitBtn.addEventListener('click', () => {
    submitFeedback()
    console.log(feedbackList)
})
removeAllBtn.addEventListener('click', () => {
    removeAllFeedback()
})

function submitFeedback() {
    const inputValue = feedbackInput.value

    if (!inputValue) {
        alert('feedback can not be empty')
    } else {
        const feedbackItem = document.createElement('li')
        feedbackItem.innerText = inputValue

        feedbackList.appendChild(feedbackItem)
        feedbackInput.value = ''
    }
}

function removeAllFeedback() {
const feedbackListt = document.getElementById('feedbacks')
    const allFeedBacks = feedbackListt.childNodes
    console.log(allFeedBacks)
    allFeedBacks.forEach(function (node, index) {
        console.log(node, index)
        feedbackListt.removeChild(node)
        console.log('child removed')
    })
}