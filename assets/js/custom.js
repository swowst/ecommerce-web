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




const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const countInput = document.getElementById('count');

    decreaseButton.addEventListener('click', () => {
      const currentValue = parseInt(countInput.value, 10);
      if (currentValue > 0) {
        countInput.value = currentValue - 1;
      }
    });

    increaseButton.addEventListener('click', () => {
      const currentValue = parseInt(countInput.value, 10);
      if (currentValue < 999) {
        countInput.value = currentValue + 1;
      }
    });



    $(document).ready(function() {
      $('.btn-close-item').click(function() {
        $(this).closest('.card-item').remove();
      });
    });
    