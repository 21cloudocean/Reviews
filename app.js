// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
//选择elements
//选择item
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById("person-img");
//选择button
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
//选择要显示的item
let selectedItem = 0;
//加载默认显示的item
window.addEventListener("DOMContentLoaded", function () {
  showItem();
});

//添加button的click效果
prevBtn.addEventListener("click", function () {
  selectedItem--;
  if (selectedItem < 0) {
    //这里注意，第一个的prev是最后一个。
    selectedItem = reviews.length - 1;
  }
  console.log(selectedItem);
  showItem();
});
nextBtn.addEventListener("click", function () {
  selectedItem++;
  if (selectedItem > reviews.length - 1) {
    //这里注意，最后一个item的下一个是第一个。
    selectedItem = 0;
  }
  console.log(selectedItem);
  showItem();
});
randomBtn.addEventListener("click", function () {
  selectedItem = Math.floor(Math.random() * reviews.length);
  console.log(selectedItem);
  showItem();
});
//这串代码要重复利用所以做成function
function showItem() {
  const style = reviews[selectedItem];
  author.textContent = style.name;
  job.textContent = style.job;
  img.src = style.img;
  info.textContent = style.text;
}
