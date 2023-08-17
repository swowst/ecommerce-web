
function handleBasketToggle(basket, toggleButton) {
  document.addEventListener("click", function (event) {
      var isBasketVisible = basket.classList.contains("d-block");
      var isClickInsideBasket = basket.contains(event.target) || toggleButton.contains(event.target);

      if (isBasketVisible && !isClickInsideBasket && !event.target.closest(".btn-close-item")) {
          basket.classList.remove("d-block");
          basket.classList.add("d-none");
      }
  });

  toggleButton.addEventListener("click", function () {
      if (basket.classList.contains("d-none")) {
          basket.classList.remove("d-none");
          basket.classList.add("d-block");
      } else {
          basket.classList.remove("d-block");
          basket.classList.add("d-none");
      }
  });
}

var basketRespo = document.querySelector(".basket-respo");
var toggleButtonRespo = document.querySelector(".toggle-div-respo");

var basketNormal = document.querySelector(".basket");
var toggleButtonNormal = document.querySelector(".toggle-div");

handleBasketToggle(basketRespo, toggleButtonRespo);
handleBasketToggle(basketNormal, toggleButtonNormal);






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

    
    



    $(document).ready(function () {
      function changeProductImage(event) {
          var newImageUrl = $(this).attr("src");
          var productDetailImage = $(this).closest(".row.mb-4").find(".card-img");
          productDetailImage.attr("src", newImageUrl);
      }

      $(".row.mb-4 .image_list li img").on("click", changeProductImage);
  });
  





  $(document).ready(function() {
    const $basket = $('.basket-respo');
    const $emptyBasketMessage = $('<p class="empty_basket_message">Səbətiniz boşdur!</p>');
  
    function checkBasketEmpty() {
      if ($basket.find('.card-item').length === 0) {
        $basket.append($emptyBasketMessage);
      } else {
        $emptyBasketMessage.remove();
      }
    }
  
    checkBasketEmpty(); 
  
    $('.btn-close-item').click(function() {
      $(this).closest('.card-item').remove();
      checkBasketEmpty();
    });
  
    $('.checkout-button').click(function() {
      checkBasketEmpty();
    });
  });
  




  $(document).ready(function() {
    $(".slider-nav2 img").on("click", function() {
        var newImageSrc = $(this).attr("src");
        
        $(this).closest(".product-section").find(".order-main-img img").attr("src", newImageSrc);
    });
});







$(document).ready(function() {
  const $basket = $('.basket');
  const $emptyBasketMessage = $('<p class="empty_basket_message">Səbətiniz boşdur!</p>');

  function checkBasketEmpty() {
    if ($basket.find('.card-item').length === 0) {
      $basket.append($emptyBasketMessage);
    } else {
      $emptyBasketMessage.remove();
    }
  }

  checkBasketEmpty(); 

  $('.btn-close-item').click(function() {
    $(this).closest('.card-item').remove();
    checkBasketEmpty();
  });

  $('.checkout-button').click(function() {
    checkBasketEmpty();
  });
});




 $(document).ready( function () {

 $('.js-items-slider-container .slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.js-items-slider-container .slider-nav'
 });
 $('.js-items-slider-container .slider-nav').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.js-items-slider-container .slider-for',
     dots: true,
     focusOnSelect: true,
     arrows: false,
     accessibility: true,
     onAfterChange: function (slide, index) {
       console.log("slider-nav change");
       console.log(this.$slides.get(index));
       $('.current-slide').removeClass('current-slide');
       $(this.$slides.get(index)).addClass('current-slide');
     },
     onInit: function (slick) {
       $(slick.$slides.get(0)).addClass('current-slide');
     }
 });
});




$(document).ready(function () {
  $('.js-items-slider-container2 .slider-for2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      draggable: true, 
      asNavFor: '.js-items-slider-container2 .slider-nav2'
  });
  $('.js-items-slider-container2 .slider-nav2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.js-items-slider-container2 .slider-for2',
      dots: true,
      focusOnSelect: true,
      arrows: false,
      accessibility: true,
      draggable: true, 

      vertical: true,
      customPaging: function(slider, i) {
          if (i < 4) {
              return '<button type="button" data-role="none">' + (i + 1) + '</button>';
          }
          return '';
      },
      onAfterChange: function (slide, index) {
          console.log("slider-nav change");
          console.log(this.$slides.get(index));
          $('.current-slide2').removeClass('current-slide2');
          $(this.$slides.get(index)).addClass('current-slide2');
      },
      onInit: function (slick) {
          $(slick.$slides.get(0)).addClass('current-slide2');
      }
  });
});
