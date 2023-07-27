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
