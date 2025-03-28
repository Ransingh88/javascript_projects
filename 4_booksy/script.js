const baseUrl = "https://api.freeapi.app/api/v1/public/books"
let booksData
let allBookData
let page = 1
let pageLimit = 20

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

fetchDataFromAPI(`${baseUrl}?page=${page}&limit=${pageLimit}`)
  .then((data) => {
    console.log("Fetched data:", data)
    booksData = data.data
    renderBooks(booksData.data, "bookresult")
  })
  .catch((error) => {
    console.error("Error occurred:", error)
  })

fetchDataFromAPI(`${baseUrl}?limit=999`)
  .then((data) => {
    console.log("Fetched data:", data)
    allBookData = data.data
    // renderBooks(allBookData, "bookresult")
  })
  .catch((error) => {
    console.error("Error occurred:", error)
  })

const renderBooks = (data, containerId) => {
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
    document.getElementById(
      "pageInfo"
    ).innerText = `${page}/${booksData.totalPages}`

}

const updateData = () => {
  document.getElementById("bookresult").innerHTML = null
  renderBooks(booksData.data, "bookresult")
}

const pagination = () => {
  fetchDataFromAPI(`${baseUrl}?page=${page}&limit=${pageLimit}`)
    .then((data) => {
      console.log("Fetched data:", data)
      booksData = data.data
      // renderBooks(booksData.data, "bookresult")
    })
    .catch((error) => {
      console.error("Error occurred:", error)
    })
}

const serachbox = document.getElementById("serachbox")
const searchFilter = () => {
  const datToBeFiltered = serachbox.value ? allBookData : booksData.data
  const filteredData = datToBeFiltered.filter(
    (item) =>
      item.volumeInfo.title.toLowerCase().includes(serachbox.value) ||
      (item.volumeInfo?.authors &&
        item.volumeInfo?.authors[0].toLowerCase().includes(serachbox.value))
  )

  console.log("filter", filteredData)
  return filteredData
}

serachbox.addEventListener("keyup", () => {
  const fd = searchFilter()
  document.getElementById("bookresult").innerHTML = null
  renderBooks(fd, "bookresult")
})

document.getElementById("prevBtn").addEventListener("click", () => {
  if (booksData.previousPage) {
    page -= 1
    pagination()
    updateData()
  }
})

document.getElementById("nextBtn").addEventListener("click", () => {
  if (booksData.nextPage) {
    page += 1
    pagination()
    document.getElementById("pageInfo").innerText = `${page}/${booksData.totalPages}`
    updateData()
  }
})
