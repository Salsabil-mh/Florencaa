var allProducts = document.querySelectorAll(".container .row .card .card-body .add-btn")
var addedProduct = document.querySelector("#Added-product")
var btn = document.querySelector("#total-btn")
var showTotal = document.querySelector(".show-total")
var totalPrice = 0
var cartContainer = document.querySelector(".cart-container")
allProducts.forEach(function (product){
    product.onclick = function (){
        totalPrice += +(product.getAttribute("price"))
        addedProduct.innerHTML += product.textContent + " - Price: " + product.getAttribute("price") + "$" + "<br>"
        if (addedProduct.innerHTML != "" ){
            btn.style.display="inline-block"
        }
        if (btn.style.display="inline-block"){
            cartContainer.style.display="block"
        }
    }
})
btn.onclick = function (){
showTotal.innerHTML = "Total: " + (totalPrice) + "$"
}