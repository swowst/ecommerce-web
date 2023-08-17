var basket = document.querySelector(".basket")

document.querySelector(".toggle-div").addEventListener("click", function(){
    if(basket.classList.contains("d-none")){
        basket.classList.remove("d-none")
        basket.classList.add("d-block")
    }else{
        basket.classList.remove("d-block")
        basket.classList.add("d-none")
    }
})




$(document).ready(function() {
  $('.decrease').click(function() {
    const inputField = $(this).siblings('.number-qty');
    const currentValue = parseInt(inputField.val(), 10);
    if (currentValue > 1) {
      inputField.val(currentValue - 1);
    }
  });

  $('.increase').click(function() {
    const inputField = $(this).siblings('.number-qty');
    const currentValue = parseInt(inputField.val(), 10);
    if (currentValue < 999) {
      inputField.val(currentValue + 1);
    }
  });
});




    $(document).ready(function() {
      $('.btn-close-item').click(function() {
        $(this).closest('.card-item').remove();
      });
    });
    



    $(document).ready(function() {
      $('.image_list li img').click(function() {
        const imageUrl = $(this).attr('src');
        $('.image_selected img').attr('src', imageUrl);
      });
    });
    





    var splide = new Splide( '.splide', {
      perPage: 3,
      rewind : true,
    } );
    
    splide.mount();