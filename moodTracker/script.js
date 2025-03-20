const moods_container = document.getElementById("moods_container")
const data = document.getElementById("data")

const moods = [
  {
    moodType: "happy",
    imoji: "😊",
  },
  {
    moodType: "excited",
    imoji: "🤗",
  },
  {
    moodType: "sad",
    imoji: "😌",
  },
  {
    moodType: "angry",
    imoji: "😡",
  },
  {
    moodType: "calm",
    imoji: "🙂",
  },
  {
    moodType: "surprised",
    imoji: "😮",
  },
  {
    moodType: "confused",
    imoji: "🙄",
  },
  {
    moodType: "sleepy",
    imoji: "😴",
  },
  {
    moodType: "grateful",
    imoji: "😘",
  },
]
let monthCalender = []
const now = new Date()
const currentYear = now.getFullYear()
const currentMonth = now.getMonth()
const fullMonthDates = getFullMonthDates(currentYear, currentMonth)

window.onload = () => {
  const data = JSON.parse(localStorage.getItem("moodTrack"))
  const toDay = new Date().toLocaleDateString()
  data.forEach((moodItem) => {
    if (
      moodItem.fullDate == now.toLocaleDateString() &&
      !moodItem.isSubmitted
    ) {
      renderMoods()
    } else {
      console.log(JSON.stringify(data))
      data.forEach((data) => {
        const aaa = document.createElement("p")
        aaa.innerText = `${data.fullDate} - ${data.dataValue}`

        data.appendChild(aaa)
      })
    }
  })
  console.log("object", data)
  console.log("object", toDay)
}

const renderMoods = () => {
  moods.forEach((m) => {
    const emotionBtn = document.createElement("button")
    emotionBtn.classList.add("moodbtn")
    emotionBtn.id = m.moodType
    emotionBtn.setAttribute("name", m.moodType)
    emotionBtn.innerText = m.moodType + m.imoji
    moods_container.appendChild(emotionBtn)
  })
}
// renderMoods()
const moodbtn = document.querySelectorAll(".moodbtn")
moodbtn.forEach((button) => {
  button.addEventListener("click", () => {
    monthCalender = monthCalender.map((date) => {
      if (date.dataValue) {
        console.log("you have already submitted")
        // alert("you have already submitted")
        return date
      } else {
        return date.fullDate == now.toLocaleDateString()
          ? { ...date, dataValue: button.name, isSubmitted: true }
          : date
      }
    })
    console.log(monthCalender)
    localStorage.setItem("moodTrack", JSON.stringify(monthCalender))
  })
})

function getFullMonthDates(year, month) {
  const dates = []
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
    dates.push(new Date(year, month, day))
  }
  return dates
}

fullMonthDates.forEach((date) => {
  monthCalender.push({
    fullDate: date.toLocaleDateString(),
    date: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    dataValue: "",
    isSubmitted: false,
  })
})
