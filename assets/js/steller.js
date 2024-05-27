
// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});
// create page
document.getElementById('togglePortfolio').addEventListener('click', function() {
    var portfolioSection = document.getElementById('portfolio');
    if (portfolioSection.style.display === 'none') {
        portfolioSection.style.display = 'block'
    } else {
        portfolioSection.style.display = 'none'
    }
});