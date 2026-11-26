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


//  عوض شدن کارت ها
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


let fetchNewProducts = async () => {

    let resNew = await fetch("http://localhost:3000/newProducts");
    let dataNew = await resNew.json();

    let newList = document.querySelector(".newList");

    dataNew.forEach((elem) => {

        newList.innerHTML += `
            <div class="card relative h-108 w-67 bg-(--card) pb-7 shadow-none">
                <label class="like absolute top-7 right-6 cursor-pointer text-xl">
                    <input type="checkbox" class="peer hidden">
                    <i class="bi bi-heart text-(--sub) peer-checked:hidden"></i>
                    <i class="bi bi-heart-fill hidden text-red-500 peer-checked:block"></i>
                </label>

                <figure class="mx-auto mt-16 mb-5 h-40 w-40">
                    <img src="${elem.image}" alt="${elem.title}" class="pic h-40 w-40 object-contain">
                </figure>

                <div class="card-body items-center gap-0 p-0">
                    <h2 class="name h-12 w-64 text-center text-base leading-6 text-(--tx)">${elem.title}</h2>
                    <p class="price mt-3 text-2xl font-medium text-(--tx)">${elem.price}</p>

                    <div class="card-actions mt-[19px]">
                        <button class="btn buy h-12 w-45.75 rounded-lg border-0 bg-(--buy) text-sm font-medium text-white shadow-none">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;

    });

};

fetchNewProducts();


let fetchBestProducts = async () => {

    let resBest = await fetch("http://localhost:3000/bestProducts");
    let dataBest = await resBest.json();

    let bestList = document.querySelector(".bestList");

    dataBest.forEach((elem) => {

        bestList.innerHTML += `
            <div class="card relative h-108 w-67 bg-(--card) pb-7 shadow-none">
                <label class="like absolute top-7 right-6 cursor-pointer text-xl">
                    <input type="checkbox" class="peer hidden">
                    <i class="bi bi-heart text-(--sub) peer-checked:hidden"></i>
                    <i class="bi bi-heart-fill hidden text-red-500 peer-checked:block"></i>
                </label>

                <figure class="mx-auto mt-16 mb-5 h-40 w-40">
                    <img src="${elem.image}" alt="${elem.title}" class="pic h-40 w-40 object-contain">
                </figure>

                <div class="card-body items-center gap-0 p-0">
                    <h2 class="name h-12 w-64 text-center text-base leading-6 text-(--tx)">${elem.title}</h2>
                    <p class="price mt-3 h-8 text-2xl font-medium text-(--tx)">${elem.price}</p>

                    <div class="card-actions mt-[19px]">
                        <button class="btn buy h-12 w-45.75 rounded-lg border-0 bg-(--buy) text-sm font-medium text-white shadow-none">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;

    });

};

fetchBestProducts();



let fetchFeature = async () => {

    let resFeature = await fetch("http://localhost:3000/featureProducts");
    let dataFeature = await resFeature.json();

    let feature = document.querySelector(".feat");

    dataFeature.forEach((elem) => {

        feature.innerHTML += `
            <article class="tile relative isolate flex flex-col items-start overflow-hidden pt-[382px] pl-8"
                style="background: ${elem.background}">

             ${elem.image1 ? `
            <img src="${elem.image1}" alt="${elem.title}" class="pic absolute top-0 left-0 -z-10 w-90">
             <img src="${elem.image2}" alt="${elem.title}" class="pic absolute top-14 left-[117px] -z-10 w-70">
           ` : elem.title === "Macbook Pro" ? `
             <img src="${elem.image}" alt="${elem.title}" class="pic absolute top-[35px] right-0 -z-10 h-80 w-[400px] object-contain object-right">
             ` : `
              <img src="${elem.image}" alt="${elem.title}" class="pic absolute top-0 left-[35px] -z-10 h-84 w-[400px] object-contain object-left">
              `}

                <h2 class="ttl text-[33px] leading-10 font-light ${elem.titleColor}">
                    ${elem.title}
                </h2>

                <p class="txt mt-4 h-18 max-w-72 text-sm leading-6 ${elem.textColor}">
                    ${elem.description}
                </p>

                <button class="btn mt-6 h-14 w-46 cursor-pointer rounded-lg border border-(--act) text-base text-(--act) shadow-none">
                    Shop Now
                </button>

            </article>
        `;

    });

};

fetchFeature();


let fetchDiscount = async () => {

    let resDiscount = await fetch("http://localhost:3000/discountProducts");
    let dataDiscount = await resDiscount.json();

    let deals = document.querySelector(".deals");

    dataDiscount.forEach((elem) => {

        deals.innerHTML += `
            <div class="card deal relative h-108 w-67 bg-(--card) pb-7 shadow-none">

                <label class="heart absolute top-7 right-6 cursor-pointer text-xl">
                    <input type="checkbox" class="peer hidden">
                    <i class="bi bi-heart text-(--sub) peer-checked:hidden"></i>
                    <i class="bi bi-heart-fill hidden text-red-500 peer-checked:block"></i>
                </label>

                <figure class="mx-auto mt-16 mb-5 h-40 w-40">
                    <img src="${elem.image}" alt="${elem.title}" class="photo h-40 w-40 object-contain">
                </figure>

                <div class="card-body items-center gap-0 p-0">
                    <h2 class="tit h-12 w-64 text-center text-base leading-6 text-(--tx)">
                        ${elem.title}
                    </h2>

                    <p class="cost mt-3 text-2xl font-medium text-(--tx)">
                        ${elem.price}
                    </p>

                    <div class="card-actions mt-[19px]">
                        <button class="btn get h-12 w-45.75 rounded-lg border-0 bg-(--buy) text-sm font-medium text-white shadow-none">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
        `;

    });

};

fetchDiscount();




