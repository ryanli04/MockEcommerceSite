const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 120.00,
        desc: "The Air Force 1 Mid LV8 'Overbranding' is everything you know best: crisp overlays, bold accents and the perfect amount of flash to let you shine. The padded, mid-cut collar with the classic hook-and-loop closure adds the heritage b-ball comfort while perforations on the toe keep you cool.",
        colors: [
            {
                code: "black",
                img: "./Images/air.png",
            },
            {
                code: "darkblue",
                img: "./Images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 140.00,
        desc: "The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh look with a familiar feel. Premium materials with new colours and textures give modern expression to an all-time favourite.",
        colors: [
            {
                code: "lightgray",
                img: "./Images/jordan.png",
            },
            {
                code: "green",
                img: "./Images/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 130.00,
        desc: "In the '70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid '77 Vintage—classic since the beginning.",
        colors: [
            {
                code: "lightgray",
                img: "./Images/blazer.png",
            },
            {
                code: "green",
                img: "./Images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 110.00,
        desc: "Nike Crater Impact is part of our sustainability journey to transform trash into shoes that tread a little lighter. Made from at least 25% recycled material by weight, it brings in unique design choices that reduces waste when compared with traditional methods––like an embroidered swoosh, efficient overlays and of course its Crater foam midsole.",
        colors: [
            {
                code: "black",
                img: "./Images/crater.png",
            },
            {
                code: "lightgray",
                img: "./Images/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 110.00,
        desc: "Space Hippie is a story of trash transformed. From the upper to the outsole, Space Hippie 04 is made of at least 25% recycled material by weight. Not only is it the most lightweight silhouette within the collection, its ‘Space Waste Yarn’ upper includes recycled content—made from recycled plastic bottles, t-shirts and yarn scraps—for a lower carbon footprint. A soft, Crater Foam midsole combines Nike grind with a blend of foams for stability and a unique aesthetic.",
        colors: [
            {
                code: "gray",
                img: "./Images/hippie.png",
            },
            {
                code: "black",
                img: "./Images/hippie2.png",
            },
        ],
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");



menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100*index}vw)`;

        chosenProduct = products[index]

        currentProductTitle.textContent = chosenProduct.title
        currentProductDesc.textContent = chosenProduct.desc
        currentProductPrice.textContent = "$" + chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img

        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.borderColor= "grey"
        });
        size.style.borderColor= "black"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display="flex"
})

close.addEventListener("click", ()=>{
    payment.style.display="none"
})