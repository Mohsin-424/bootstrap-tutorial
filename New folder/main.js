let shop=document.getElementById('shop');
console.log(shop);
 

 let shopItemsData= [{
    id:"MOHisn",
    name:"Casual Shirt",
    price:45,
    disc:"Lore, kjsgsdkdja kjjkl",
    img:"images/img-1.jpg"
 },{ id:"MOHisn",
 name:"Casual Shirt",
 price:45,
 disc:"Lore, kjsgsdkdja kjjkl",
 img:"images/img-1.jpg"},{ id:"MOHisn",
 name:"Casual Shirt",
 price:45,
 disc:"Lore, kjsgsdkdja kjjkl",
 img:"images/img-1.jpg"},{ id:"MOHisn",
 name:"Casual Shirt",
 price:45,
 disc:"Lore, kjsgsdkdja kjjkl",
 img:"images/img-1.jpg"}
];

let generateShop = () => {
    retrun (shop.innerHTML=shopItemsData.map((x)=>{}));
}
generateShop();
