// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow");    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/study.jpg", 
	 		 "images/study1.jpg",
			 "images/study2.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})