// Element , tìm được elemnt
// tìm theo id , class, tag name 
// query css ( dùng nhiều nhất )

// atribute

var a = document.querySelectorAll(".abc .col img");

a.forEach((e,i) => {
    e.setAttribute("src","https://img.freepik.com/premium-photo/broccoli-paprika-chicken-stir-fry-chinese-cuisine-white-background-isolate_233226-1746.jpg?ga=GA1.1.1237201776.1723113473&semt=ais_hybrid&w=740")
})

let b = document.querySelectorAll(".qqq .bbb .litext")


// text
//  innerText ,textContent , innerHTML

b.forEach((e,i)=>{
   e.innerText = "<h1>Hung</h1>"
})



