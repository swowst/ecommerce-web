function handleBasketToggle(basket, toggleButton) {
  try {
    document.addEventListener("click", function (event) {
      var isBasketVisible = basket.classList.contains("d-block");
      var isClickInsideBasket = basket.contains(event.target) || toggleButton.contains(event.target);

      if (isBasketVisible && !isClickInsideBasket && !event.target.closest(".btn-close-item")) {
        basket.classList.remove("d-block");
        basket.classList.add("d-none");
      }
    });
  } catch (e) {

  }

  try {
    toggleButton.addEventListener("click", function () {
      if (basket.classList.contains("d-none")) {
        basket.classList.remove("d-none");
        basket.classList.add("d-block");
      } else {
        basket.classList.remove("d-block");
        basket.classList.add("d-none");
      }
    });
  } catch (e) { }
}



$(document).ready(function () {

  var basketNormal = document.querySelector(".basket");
  var toggleButtonNormal = document.querySelector(".toggle-div");

  handleBasketToggle(basketNormal, toggleButtonNormal);
});


$('.number-btn').on('click', function () {
  $('.pop-up-container').css('display', 'none');
  localStorage.setItem('popupShown', 'true');
});








$(document).ready(function () {
  const isPopupShown = localStorage.getItem('popupShown');

  if (isPopupShown !== 'true') {
    $('.pop-up-container').fadeIn();
    $('body').css('overflow', 'hidden');


    $('.close-pop-up').on('click', function () {
      $('html, body').animate({ scrollTop: $(".featured-products").offset().top });

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



// DEGISIKLIK BURADA


$(document).ready(function () {
  $(".close-pop-up").click(function () {
    $(".pop-up-container").hide();
  });

  $(".contact-text").click(function () {
    $(".pop-up-container").css("display", "flex");
    $(".pop-up-container").show();
  });

 
  
});




$(document).ready(function () {
  $('.decrease').click(function () {
    const inputField = $(this).siblings('.number-qty');
    const currentValue = parseInt(inputField.val(), 10);
    if (currentValue > 1) {
      inputField.val(currentValue - 1);
    }
  });

  $('.increase').click(function () {
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






function checkBasketEmpty() {
  const $basket = $('.basket');
  const $emptyBasketMessage = $('<p class="empty_basket_message btn btn-success btn-outline btn-radius">Səbətiniz boşdur!</p>');

  if ($basket.find('.card-item').length === 0) {
    $basket.append($emptyBasketMessage);
  } else {
    $emptyBasketMessage.remove();
  }
}




$(document).ready(function () {

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




$(document).ready(function () {

  const productsCount = $('.product-slider').length;
  console.log(productsCount);

  for (i = 1; i <= productsCount; i++) {
    $('.product-slider-'+i).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-slider-nav-'+i
    });
    $('.product-slider-nav-'+i).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.product-slider-'+i,
      dots: true,
      focusOnSelect: true,
      arrows: false,
      accessibility: true,
      onAfterChange: function (slide, index) {
        $('.current-slide').removeClass('current-slide');
        $(this.$slides.get(index)).addClass('current-slide');
      },
      onInit: function (slick) {
        $(slick.$slides.get(0)).addClass('current-slide');
      }
    });
  }
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
      slidesToShow: 4,
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

