const newQuoteBtn = document.getElementById("newQuoteBtn")
const quoteContainer = document.getElementById("quote")
const author = document.getElementById("author")
const copyBtn = document.getElementById("copy")
const categoryTags = document.getElementById("tags")
var randomQuoteUrl = "https://api.freeapi.app/api/v1/public/quotes/quote/random"

newQuoteBtn.addEventListener("click", () => {
  quoteContainer.classList.remove("animateText")
  getRandomQuote(randomQuoteUrl)
})

copyBtn.addEventListener("click", () => {
  copyToClipboard()
})

const getRandomQuote = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)

  quoteContainer.innerText = data.data.content
  quoteContainer.classList.add("animateText")
  author.innerText = `${data.data.author}`
  categoryTags.innerText = `${
    data.data.tags.length > 0 ? data.data.tags[0] : "general"
  }`
}
getRandomQuote(randomQuoteUrl)

const copyToClipboard = async () => {
  const qcontainer = document.getElementById("quote")
  console.log("qcontainer", qcontainer.innerText)

  navigator.clipboard.writeText(qcontainer.innerText)
}
