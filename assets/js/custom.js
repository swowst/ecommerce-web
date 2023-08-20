
function handleBasketToggle(basket, toggleButton) {
  try{
   document.addEventListener("click", function (event) {
     var isBasketVisible = basket.classList.contains("d-block");
     var isClickInsideBasket = basket.contains(event.target) || toggleButton.contains(event.target);
 
     if (isBasketVisible && !isClickInsideBasket && !event.target.closest(".btn-close-item")) {
         basket.classList.remove("d-block");
         basket.classList.add("d-none");
     }
 });
  }catch(e){
 
  }
 
 try{
   toggleButton.addEventListener("click", function () {
     if (basket.classList.contains("d-none")) {
         basket.classList.remove("d-none");
         basket.classList.add("d-block");
     } else {
         basket.classList.remove("d-block");
         basket.classList.add("d-none");
     }
 });
 }catch(e){}
 }
 
 var basketRespo = document.querySelector(".basket-respo");
 var toggleButtonRespo = document.querySelector(".toggle-div-respo");
 
 var basketNormal = document.querySelector(".basket");
 var toggleButtonNormal = document.querySelector(".toggle-div");
 
 handleBasketToggle(basketRespo, toggleButtonRespo);
 handleBasketToggle(basketNormal, toggleButtonNormal);
 
 
 
 
 
 
 
 
 
 $(document).ready(function() {
  const isPopupShown = localStorage.getItem('popupShown');

  if (isPopupShown !== 'true') {
      $('.pop-up-container').fadeIn();
      $('body').css('overflow', 'hidden'); 

      $('.close-pop-up').on('click', function() {
          $('.pop-up-container').fadeOut();
          localStorage.setItem('popupShown', 'true');
          $('body').css('overflow', 'visible'); 
      });
  } else {
      $('.pop-up-container').css('display', 'none');
  }

  const isFirstVisit = localStorage.getItem('firstVisit'); 
  if (!isFirstVisit) {
      $('.pop-up-container').css('display', 'flex'); 
      localStorage.setItem('firstVisit', 'true'); 
  }
});

 
 

$(document).ready(function() {
  $(".close-pop-up").click(function() {
      $(".pop-up-container").hide();
      $('html, body').animate({ scrollTop: $(".featured-products").offset().top }, 1000);
  });

  $(".contact-text").click(function() {
    $(".pop-up-container").show();
  });
});

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
 
 
 
 $(document).ready(function () {
   $('.card-close-btn').on('click', function (e) {
       e.stopPropagation(); 
       $(this).closest('.card-item').remove();
 
       checkBasketEmpty()
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
   
 
 
 
   function checkBasketEmpty() {
     const $basket = $('.basket');
     const $emptyBasketMessage = $('<p class="empty_basket_message btn btn-success btn-outline btn-radius">Səbətiniz boşdur!</p>');
 
     if ($basket.find('.card-item').length === 0) {
       $basket.append($emptyBasketMessage);
     } else {
       $emptyBasketMessage.remove();
     }
   }
 
 
 
 
   $(document).ready(function() {
   
     checkBasketEmpty(); 
     checkBasketEmptyFor(); 
   
   });
   
 
   function checkBasketEmptyFor() {
     const $basket = $('.basket-respo');
     const $emptyBasketMessage = $('<p class="empty_basket_message btn btn-success">Səbətiniz boşdur!</p>');
   
     if ($basket.find('.cart-item-up').length === 0) {
       $basket.append($emptyBasketMessage);
     } else {
       $emptyBasketMessage.remove();
     }
   }
 
 
 
   $(document).ready(function() {
     $(".slider-nav2 img").on("click", function() {
         var newImageSrc = $(this).attr("src");
         
         $(this).closest(".product-section").find(".order-main-img img").attr("src", newImageSrc);
     });
 });
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 // YENI DEGISIKLIKLER
 
 
 
 $(document).ready(function () {
   if ($('.card-item').length === 0) {
       $('.empty-basket-message').show();
   }
 
   $('.card-close-btn').on('click', function () {
       $(this).closest('.card-item').remove();
 
       if ($('.card-item').length === 0) {
           $('.empty-basket-message').show();
       }
   });
 });
 
 
 
 
 $(document).ready(function() {
  $(".close-pop-up").click(function() {
      $(".pop-up-container").hide();
  });

  $(".contact-text").click(function() {
    $(".pop-up-container").css("display", "flex"); 
    $(".pop-up-container").show();
  });
});

 
 
 
 
 
 
 
 
 
$(document).ready(function () {

  var galleryContainers = $('.gallery-container');

  galleryContainers.each(function () {
      var $this = $(this);

      // Mevcut galeri konteynerı içindeki slaytı seç ve etkinleştir
      $this.find('.js-items-slider-container .slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: $this.find('.js-items-slider-container .slider-nav')
      });

      $this.find('.js-items-slider-container .slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: $this.find('.js-items-slider-container .slider-for'),
          dots: true,
          centerMode: false,
          focusOnSelect: true,
          arrows: false,
          accessibility: true,
          // ... diğer ayarlarınız ...
      });

  });
});

 
 
 
 