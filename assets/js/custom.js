var basket = document.querySelector(".basket")

document.querySelector(".basket-container").addEventListener("click", function(){
    if(basket.classList.contains("d-none")){
        basket.classList.remove("d-none")
        basket.classList.add("d-block")
    }else{
        basket.classList.remove("d-block")
        basket.classList.add("d-none")
    }
})