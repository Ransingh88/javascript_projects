let booksData
const url = "https://api.freeapi.app/api/v1/public/books?limit=999"

async function fetchDataFromAPI(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

fetchDataFromAPI(url)
  .then((data) => {
    console.log("Fetched data:", data)
    booksData = data.data.data
    renderTitlesToContainer(booksData, "bookresult")
  })
  .catch((error) => {
    console.error("Error occurred:", error)
  })

function renderTitlesToContainer(data, containerId) {
  const container = document.getElementById(containerId)
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`)
    return
  }

  data.forEach((item) => {
    if (item.volumeInfo.title) {
      const paragraph = document.createElement("p")
      paragraph.textContent = `${item.volumeInfo.title} - ${
        item.volumeInfo?.authors && item.volumeInfo?.authors[0]
      }`
      container.appendChild(paragraph)
    }
  })
}

const serachbox = document.getElementById("serachbox")
const search = () => {
  const filteredData = booksData.filter(
    (item) =>
      item.volumeInfo.title.toLowerCase().includes(serachbox.value) ||
      (item.volumeInfo?.authors &&
        item.volumeInfo?.authors[0].toLowerCase().includes(serachbox.value))
  )

  console.log("filter", filteredData)
  return filteredData
}

serachbox.addEventListener("keyup", () => {
  const fd = search()
  document.getElementById("bookresult").innerHTML = null
  renderTitlesToContainer(fd, "bookresult")
})
