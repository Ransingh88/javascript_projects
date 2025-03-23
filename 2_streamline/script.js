const container = document.getElementById("container")
const content__body = document.getElementById("content__body")
const searchbarInput = document.getElementById("searchbar")

const url = "https://api.freeapi.app/api/v1/public/youtube/videos"

const fetchVideos = async () => {
  const response = await fetch(url)
  const data = await response.json()
  videoData = data?.data
  let filteredData
  filteredData = filterData(videoData.data, searchbarInput.value)
  filteredData.map((videoDetails) => renderVideos(videoDetails))

  searchbarInput.addEventListener("keyup", () => {
    filteredData = filterData(videoData.data, searchbarInput.value)
    content__body.innerHTML = null
    filteredData.map((videoDetails) => renderVideos(videoDetails))
  })
}

const filterData = (data, filterKey) => {
  return data.filter(({ items }) =>
    items.snippet.title.toLowerCase().includes(filterKey)
  )
}

const videoCard = (datainfo) => {
  const hrefLink = document.createElement("a")
  hrefLink.href = `https://www.youtube.com/watch?v=${datainfo.items.id}`
  hrefLink.setAttribute("target", "_blank")

  const itemCard = document.createElement("div")
  itemCard.classList.add("itemCard")

  const imgBox = document.createElement("div")
  imgBox.classList.add("imgBox")
  const img = document.createElement("img")
  img.src = datainfo.items.snippet.thumbnails.standard.url
  imgBox.appendChild(img)

  const contentBox = document.createElement("div")
  contentBox.classList.add("contentBox")
  const videoTitle = document.createElement("h5")
  videoTitle.innerText = truncateString(datainfo.items.snippet.title, 70)
  const channelName = document.createElement("p")
  channelName.innerText = datainfo.items.snippet.channelTitle
  contentBox.appendChild(videoTitle)
  contentBox.appendChild(channelName)

  itemCard.appendChild(imgBox)
  itemCard.appendChild(contentBox)

  hrefLink.appendChild(itemCard)

  return hrefLink
}

const truncateString = (str, maxLength) => {
  return str.length > maxLength ? `${str.slice(0, maxLength - 3)}...` : str
}

const renderVideos = (vdetails) => {
  const card = videoCard(vdetails)
  content__body.appendChild(card)
}

fetchVideos()
