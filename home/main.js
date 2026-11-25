let body = document.querySelector("body")

let defBtn = document.querySelector(".defBtn")
let blueBtn = document.querySelector(".blueBtn")
let greenBtn = document.querySelector(".greenBtn")

defBtn.addEventListener("click", function () {
    body.classList.remove("blue")
    body.classList.remove("green")
})

blueBtn.addEventListener("click", function () {
    body.classList.add("blue")
    body.classList.remove("green")
})

greenBtn.addEventListener("click", function () {
    body.classList.add("green")
    body.classList.remove("blue")
})

