  function openModal() {
    document.getElementById("modal-display").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal-display").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    // captionText.innerHTML = slides[slideIndex-1].alt;
  }
  
  $(document).on('click', '#modal-display', function(e){
    if (!(($(e.target).parents('#modal-container').length) || ($(e.target).is('#modal-container'))))   
    { 
      event.stopPropagation();
      closeModal();
    }
  });

var touchstartX = 0;
var touchendX = 0;

var swipeZone = document.getElementById('modal-container');

swipeZone.addEventListener('touchstart', function(event) {
    touchstartX = event.touches[0].screenX;    
}, false);

swipeZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleSwipe();
  }, false); 

function handleSwipe() {
    if (touchendX < touchstartX) {
      plusSlides(1);
    }
    if (touchendX > touchstartX) {
      plusSlides(-1);
    }
}