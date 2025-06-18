
var a = [
    {
        icon: `<i class="fa-solid fa-car-side text-white fs-1"></i>`,
        text: "Free Shipping",
        content: "Free on order over $300"
    },
    {
        icon: `<i class="fa-solid fa-user-shield text-white fs-1"></i>`,
        text: "Security Payment",
        content: "100% security payment"
    },
    {
        icon: `<i class="fa-solid fa-arrow-right-arrow-left text-white fs-1"></i>`,
        text: "30 Day Return",
        content: "30 day money guarantee"
    },
    {
        icon: `<i class="fa-solid fa-phone text-white fs-1"></i>`,
        text: "24/7 Support",
        content: "Support every time fast"
    },
]

const ship = document.querySelector(".shippings");

a.forEach(e => {
    ship.innerHTML +=
        ` <div class="col">
                        <div class="card  p-5 ">
                            <div class="box aaa">
                                ${e.icon}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${e.text}</h5>
                                <p class="card-text">${e.content}</p>
                            </div>
                        </div>
                    </div>`
})
const tab = [
    {
        img: `https://themewagon.github.io/fruitables/img/fruite-item-5.jpg`,
        text: "Grapes",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.",
        gia: "4.99/kg",
        button: "Add to cart",
        icon : `<i class="fa-solid fa-bag-shopping "></i>`
    },
    {
        img: `https://themewagon.github.io/fruitables/img/fruite-item-5.jpg`,
        text: "Grapes",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.",
        gia: "4.99/kg",
        button: "Add to cart",
        icon : `<i class="fa-solid fa-bag-shopping "></i>`,
        icon : `<i class="fa-solid fa-bag-shopping "></i>`
    },
    {
        img: `https://themewagon.github.io/fruitables/img/fruite-item-5.jpg`,
        text: "Raspberries",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.",
        gia: "4.99/kg",
        button: "Add to cart",
        icon : `<i class="fa-solid fa-bag-shopping "></i>`
    },
    {
        img: `https://themewagon.github.io/fruitables/img/fruite-item-5.jpg`,
        text: "Grapes",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.",
        gia: "4.99/kg",
        button: "Add to cart"
    },
    {
        img: `https://themewagon.github.io/fruitables/img/fruite-item-5.jpg`,
        text: "Grapes",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.",
        gia: "4.99/kg",
        button: "Add to cart",
        icon : `<i class="fa-solid fa-bag-shopping "></i>`
    },
    {
        img: `https://themewagon.github.io/fruitables/img/fruite-item-5.jpg`,
        text: "Grapes",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.",
        gia: "4.99/kg",
        button: "Add to cart",
        icon : `<i class="fa-solid fa-bag-shopping "></i>`
    },
    {
        img: `https://themewagon.github.io/fruitables/img/fruite-item-5.jpg`,
        text: "Grapes",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.",
        gia: "4.99/kg",
        button: "Add to cart",
        icon : `<i class="fa-solid fa-bag-shopping "></i>`
    },
    {
        img: `https://themewagon.github.io/fruitables/img/fruite-item-5.jpg`,
        text: "Grapes",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.",
        gia: "4.99/kg",
        button: "Add to cart",
        icon : `<i class="fa-solid fa-bag-shopping "></i>`
    }

]
let b = document.querySelector(".Grapes")
tab.forEach(e => {
    b.innerHTML +=
        `<div class="col-xl-3 col-md-6">
                            <div class="card border-warning ca">
                                <div class="box-img">
                                    <img src="${e.img}"
                                        class="card-img-top" alt="...">
                                </div>
                                <div class="card-body text-center">
                                    <h3>${e.text}</h3>
                                    <p class="card-text">${e.content}</p>
                                    <div class="cost d-flex justify-content-between align-items-center ">
                                        <h4>${e.gia}</h4>
                                        <button type="button"
                                            class="btn btn-outline-warning d-flex align-items-center  gap-2 rounded-pill button ">
                                            ${e.icon}
                                            <span>${e.button}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>`
});