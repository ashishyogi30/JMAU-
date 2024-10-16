// JavaScript to add interactivity to the page

// Add click event listeners to buttons
document.getElementById('enrollButton').addEventListener('click', function() {
    alert('Enroll Now button clicked!');
});

document.getElementById('emailButton').addEventListener('click', function() {
    alert('JMAU Email button clicked!');
});

document.getElementById('loginButton').addEventListener('click', function() {
    alert('ERP Login button clicked!');
});


// image slide show
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//marquee tag
const marqueeContent = document.querySelector('.marquee-content');

marqueeContent.addEventListener('mouseover', () => {
    marqueeContent.style.animationPlayState = 'paused'; // Pause scrolling
});

marqueeContent.addEventListener('mouseout', () => {
    marqueeContent.style.animationPlayState = 'running'; // Resume scrolling
})