const title = document.getElementById("name")
const job = document.getElementById("job")
const age = document.getElementById("age")
const bio = document.getElementById("bio")
const out_name = document.getElementById("out_name")
const out_job = document.getElementById("out_job")
const out_age = document.getElementById("out_age")
const out_bio = document.getElementById("out_bio")

title.addEventListener("keydown", () => {
  out_name.innerText = title.value
})
job.addEventListener("keydown", () => {
  out_job.innerText = job.value
})
age.addEventListener("keydown", () => {
  out_age.innerText = age.value
})
bio.addEventListener("keydown", () => {
  out_bio.innerText = bio.value
})

