// Fonksiyonu tanımla
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

// Responsiv menü elemanları
var basketRespo = document.querySelector(".basket-respo");
var toggleButtonRespo = document.querySelector(".toggle-div-respo");

// Normal menü elemanları
var basketNormal = document.querySelector(".basket");
var toggleButtonNormal = document.querySelector(".toggle-div");

// Fonksiyonları çağır
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
      // Bu işlev, tıklanan resmi değiştirir
      function changeProductImage(event) {
          var newImageUrl = $(this).attr("src");
          var productDetailImage = $(this).closest(".row.mb-4").find(".card-img");
          productDetailImage.attr("src", newImageUrl);
      }

      // Her ürün divi için tıklama olayını dinleyin ve değiştirme işlevini çağırın
      $(".row.mb-4 .image_list li img").on("click", changeProductImage);
  });
  





  $(document).ready(function() {
    // Sepet kontrolü ve boş mesajını ekleme
    const $basket = $('.basket-respo');
    const $emptyBasketMessage = $('<p class="empty_basket_message">Səbətiniz boşdur!</p>');
  
    function checkBasketEmpty() {
      if ($basket.find('.card-item').length === 0) {
        $basket.append($emptyBasketMessage);
      } else {
        $emptyBasketMessage.remove();
      }
    }
  
    checkBasketEmpty(); // İlk yüklemede sepet durumunu kontrol et
  
    // Ürünü sepetten çıkarma ve sepet durumunu kontrol etme
    $('.btn-close-item').click(function() {
      $(this).closest('.card-item').remove();
      checkBasketEmpty();
    });
  
    // Sepet durumunu kontrol et
    $('.checkout-button').click(function() {
      checkBasketEmpty();
      // İleriye dönük olarak burada ödeme ve sipariş işlemleri gerçekleştirilebilir
    });
  });
  











$(document).ready(function() {
  // Sepet kontrolü ve boş mesajını ekleme
  const $basket = $('.basket');
  const $emptyBasketMessage = $('<p class="empty_basket_message">Səbətiniz boşdur!</p>');

  function checkBasketEmpty() {
    if ($basket.find('.card-item').length === 0) {
      $basket.append($emptyBasketMessage);
    } else {
      $emptyBasketMessage.remove();
    }
  }

  checkBasketEmpty(); // İlk yüklemede sepet durumunu kontrol et

  // Ürünü sepetten çıkarma ve sepet durumunu kontrol etme
  $('.btn-close-item').click(function() {
    $(this).closest('.card-item').remove();
    checkBasketEmpty();
  });

  // Sepet durumunu kontrol et
  $('.checkout-button').click(function() {
    checkBasketEmpty();
    // İleriye dönük olarak burada ödeme ve sipariş işlemleri gerçekleştirilebilir
  });
});
