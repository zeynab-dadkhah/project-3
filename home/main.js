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



let fetchData = async () => {
    let res = await fetch("http://localhost:3000/categories");
    let data = await res.json();
    let categories = document.querySelector(".Categories ul");

    data.forEach((elem) => {

        categories.innerHTML += `
            <li class="flex h-6 items-center px-12 first:pl-0 last:pr-0 not-first:border-l not-first:border-(--sep)">
                <a href="${elem.href}" class="flex items-center gap-2 hover:text-(--barhv)">
                    <i class="${elem.icon} text-xl"></i>
                    ${elem.title}
                </a>
            </li>
        `;

    });

};

fetchData();


let fetchBrowse = async () => {

    let resBrowse = await fetch("http://localhost:3000/browseCategories");
    let dataBrowse = await resBrowse.json();

    let browseCategories = document.querySelector(".browse swiper-container");

    dataBrowse.forEach((elem) => {

        browseCategories.innerHTML += `
            <swiper-slide>
                <a href="${elem.href}" class="item flex h-32 flex-col items-center justify-center gap-3 rounded-xl bg-(--item) text-sm text-(--tx)">
                    <i class="${elem.icon} text-4xl"></i>
                    ${elem.title}
                </a>
            </swiper-slide>
        `;

    });

};

fetchBrowse();


//  کارت ها شدن عوض
let newBtn = document.querySelector(".newBtn")
let bestBtn = document.querySelector(".bestBtn")
let newList = document.querySelector(".newList")
let bestList = document.querySelector(".bestList")

newBtn.addEventListener("click", function () {
    newList.classList.remove("hide")
    bestList.classList.add("hide")
    newBtn.classList.add("on")
    bestBtn.classList.remove("on")
})

bestBtn.addEventListener("click", function () {
    bestList.classList.remove("hide")
    newList.classList.add("hide")
    bestBtn.classList.add("on")
    newBtn.classList.remove("on")
})


