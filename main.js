window.addEventListener("load", () => {
  setTimeout(() => {
    let temp = document.querySelector(".intro")
    document.querySelector(".start").style.display = "block"
    temp.style.transform = "scale(0%)"
    setTimeout(() => {
      temp.remove()
    }, 1050)
  }, 5000)
})
let text = document.querySelector(".text")
let n = 0
let num = 1
let str = ["python", "css", "html", "javascript"]
let rev = false
setInterval(() => {
  let temp = str[n]
  num++
  if (!rev) {
    text.innerText = temp.slice(0, num)
    if (num == temp.length) {
      rev = true
      num = 0
    }
  } else {
    text.innerText = temp.slice(0, -num)
    if (num == temp.length) {
      rev = false
      num = 0
      n++
      n = n % str.length
    }
  }
}, 300)
let styltext = document.querySelectorAll(".styl-text")
let img = document.querySelectorAll(".img-div")
let height = window.innerHeight
let val = window.innerHeight > window.innerWidth ? 93 : 83

let font_style = document.querySelector(".font-wrap").getAttribute("data-text")
for (let i of font_style) {
  let node = document.createElement("span")
  node.classList.add("font-span")
  node.textContent = i
  document.querySelector(".font-wrap").appendChild(node)
}
let span = document.querySelectorAll(".font-span")
let run = true
window.addEventListener("scroll", () => {
  for (let i = 0; i < styltext.length; i++) {
    let text_dist = styltext[i].getBoundingClientRect().top
    let per = Math.floor((text_dist * 100) / height)
    if (per < val) {
      styltext[i].style.gridTemplateColumns = "1fr "
      img[i].style.gridTemplateColumns = "1fr"
    } else {
      styltext[i].style.gridTemplateColumns = "0fr"
      img[i].style.gridTemplateColumns = "0fr"
    }
  }
  let font_count = 0

  let font_dist = document
    .querySelector(".font-wrap")
    .getBoundingClientRect().top
  if (Math.floor((font_dist * 100) / height) < 70 && run) {
    const flick = setInterval(() => {
      let rand = Math.floor(Math.random() * span.length)
      if (!span[rand].classList.contains("on") && font_count < 50) {
        span[rand].classList.add("on")
      } else {
        if (font_count < 50) {
          span[rand].classList.remove("on")
          span[rand].classList.remove("white")
        } else {
          span[rand].classList.add("white")
          span[rand].classList.remove("on")
        }
      }
      if (font_count > 150) {
        run = false
        clearInterval(flick)
      }
      font_count++
    }, 80)
  }
  let svg = document.querySelector(".svg")
  let svg_top = svg.getBoundingClientRect().top
  if ((svg_top * 100) / height < 85) {
    console.log("hi")
    svg.style.width = "100%"
  } else {
    svg.style.width = "0"
  }
})
const chn = () => {
  setTimeout(() => {
    for (let i = 0; i < styltext.length; i++) {
      let text_dist = styltext[i].getBoundingClientRect().top
      let per = Math.floor((text_dist * 100) / height)
      if (per < val) {
        styltext[i].style.gridTemplateColumns = "1fr "
        img[i].style.gridTemplateColumns = "1fr"
      } else {
        styltext[i].style.gridTemplateColumns = "0fr"
        img[i].style.gridTemplateColumns = "0fr"
      }
    }
  }, 600)
}
