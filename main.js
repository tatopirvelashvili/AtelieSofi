$(document).ready(function() {
    const banner = $(".banner")
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 520) {
            $(".scrollOfHeader").css("color", "#000")
            $("#headerOfScroll").css("color", "#000")
            $(".header-container").css("background", "#fff")
            $(".header-container").css("transition", "0.2s")
            $(".header-container").css("box-shadow", " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)")
            $(".scrollOfHeader").css("transition", "0s")
            $(".dropbtn").css("color", "#000")
            $(".responsive-li").css("color", "#fff")
            $(".responsive-li").css("background", "#fff")
            $(".responsive-article").css("background", "#fff")
            $(".responsive-a").css("color", "#000")
            $(".burger-btn").css("color", "#000")
        } else {
            $('.header-container').attr('style', '');
            $(".scrollOfHeader").attr('style', '');
            $("#headerOfScroll").attr('style', '');
            $(".dropbtn").attr('style', '');
            $(".scrollOfHeader").css("transition", "0s")
            $(".responsive-li").css("color", "#fff")
            $(".responsive-li").css("background", "transparent")
            $(".responsive-article").css("background", "transparent")
            $(".responsive-a").css("color", "#fff")
            $(".burger-btn").css("color", "#fff")
        }
    });
});

var counter = 0
var burgerBtn = document.querySelector(".burger-btn")
var headerConteiner = document.querySelector(".header-container")
var responsiveArticle = document.querySelector(".responsive-article")
burgerBtn.addEventListener("click", function() {
    responsiveArticle.style.display = "flex"
    headerConteiner.style.height = "170px"
    counter++
    if (counter > 1) {
        responsiveArticle.style.display = "none"
        headerConteiner.style.height = "95px"
        counter = 0
    }
})

var productArray = new Array()

class Product {
    Category;
    Name;
    Color;
    Url;
    Price;
    DisplayPrice;
    Size;
    BgColor;

    constructor(category, name, color, url, price, disprice, bgcolor, size) {
        this.Category = category;
        this.Name = name;
        this.Color = color;
        this.Url = url;
        this.Price = price;
        this.DisplayPrice = disprice;
        this.BgColor = bgcolor;
        this.Size = size;

        productArray.push(this)
    }
}

var Dress2 = new Product("hoodie", "ჰუდი", "<li class='red'></li><li class='black'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610310/img_2750_upsbz4.jpg", "0-100₾", "40₾", "black", "S , M , L")
var Dress2 = new Product("hoodie", "თეთრი ჰუდი", "<li class='blue'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610313/img_2763_glzccj.jpg", "0-100₾", "40₾", "black", "S , M , L")
var Dress2 = new Product("hoodie", "მწვანე ჰუდი", "<li class='green'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610313/img_3335_vrsxoo.jpg", "0-100₾", "40₾", "black", "S , M , L")
var Dress2 = new Product("hoodie", "ყვითელი ჰუდი", "<li class='yellow'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610313/img_3329_jlends.jpg", "0-100₾", "40₾", "black", "S , M , L")
var Dress2 = new Product("hoodie", "ორეული", "<li class='black'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610311/img_2700_icuxqr.jpg", "0-100₾", "90₾", "black", "S , M , L")
var Dress2 = new Product("hoodie", "იასამნისფერი ჰუდი", "<li class='pink'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610312/img_3331_s3tgit.jpg", "0-100₾", "40₾", "black", "S , M , L")
var Dress2 = new Product("hoodie", "შავი ჰუდი", "<li class='black'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610310/img_0925_ts2bgg.jpg", "0-100₾", "40₾", "black", "S , M , L")
var Dress2 = new Product("hoodie", "ლურჯი ჰუდი", "<li class='blue'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610309/img_0913_ineqjk.jpg", "0-100₾", "40₾", "red", "S , M , L")
var Dress2 = new Product("hoodie", "კრემისფერი ჰუდი", "<li class='white'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610310/img_0924_onwtkk.jpg", "0-100₾", "40₾", "red", "S , M , L")
var Dress2 = new Product("hoodie", "წითელი ჰუდი", "<li class='red'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610309/img_0919_raiuzs.jpg", "0-100₾", "40₾", "red", "S , M , L")
var Dress2 = new Product("dress", "საზაფხულო კაბა", "<li class='black'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610310/black-kaba_vbxrez.jpg", "0-100₾", "100₾", "white", "XL")
var YellowDress = new Product("Dress", "ყვითელი კაბა", "<li class='yellow'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610312/img_3076_tk2aoq.jpg", "0-100₾", "100₾", "yellow", "9 , 10 , 11.")
var Dress1 = new Product("dress", "კაბა", "<li class='green'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610310/yellow_j8mrzx.jpg", "100-200₾", "150₾", "9 , 10 , 11.")
var redCombinizone = new Product("combinizone", "კომბინიზონი", "<li class='red'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610311/img_3117_vahcmh.jpg", "100-200₾", "170₾", "white", "9 , 10 , 11.")
var BlackDress = new Product("dress", "კაბა", "<li class='black'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610315/img_3532_joljqo.jpg", "100-200₾", "140₾", "white", "9 , 10 , 11.")
var all = new Product("pants", "ყველაფერი", "<li class='black'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610314/img_4065_i0aw0j.jpg", "100-200₾", "190₾", "white", "9 , 10 , 11.")
var AllBlack = new Product("pants", "ყველაფერი", "<li class='black'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610313/img_3708_v09nkf.jpg", "100-200₾", "140₾", "white", "9 , 10 , 11.")
var BlackDress = new Product("dress", "კაბა", "<li class='black'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610315/img_3413_hyopjy.jpg", "100-200₾", "175₾", "white", "9 , 10 , 11.")
var brownCombiniozne = new Product("combinizone", "კომბინიზონი", "<li class='brown'></li>", "https://res.cloudinary.com/teenshop/image/upload/v1612610313/img_3267_hfgbz2.jpg", "100-200₾", "170₾", "white", "9 , 10 , 11.")
const container = document.querySelector(".products")

function getInnerHTML(o) {
    return `<div class="container page-wrapper">
    <div class="page-inner">
      <div class="row">
        <div class="el-wrapper">
          <div class="box-up">
          <img class="img" src="${o.Url}" alt="...">
            <div class="img-info">
              <div class="info-inner">
                <span class="p-name">${o.Name}</span>
                <span class="p-company">Teens</span>
              </div>
              <div class="a-size">Available sizes : <span class="size">${o.Size}</span></div>
            </div>
          </div>
  
          <div class="box-down">
            <div class="h-bg">
              <div class="h-bg-inner"></div>
            </div>
  
            <a class="cart" href="#">
              <span class="price">${o.DisplayPrice}</span>
               <span class="add-to-cart">
               <span class="txt"><ul>
               Colors:
               ${o.Color}
                    </ul>
                </span>
               </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`
}

function addInnerHtml(container, o) {
    container.innerHTML += getInnerHTML(o)
}

function filterArray(array, category, price) {
    newArray = array.filter(o => o.Category == category && o.Price == price)

    newArray.forEach(o => {
        addInnerHtml(container, o)
    })
}

var priceContainer = document.querySelector("#price")
var nameContainer = document.querySelector("#name")
var submitBtn = document.querySelector(".btn")

namevalue = "pants"
pricevalue = "0-100₾"

nameContainer.addEventListener("change", function() {
    namevalue = this.value
})

priceContainer.addEventListener("change", function() {
    pricevalue = this.value
})

submitBtn.addEventListener("click", function() {
    container.innerHTML = null
    filterArray(productArray, namevalue, pricevalue)
})

productArray.forEach(o => {
    addInnerHtml(container, o)
})

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));