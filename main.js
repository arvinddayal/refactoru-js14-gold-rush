$(function() {


// gets x/y position and assigns that to marker/text box upon click
	$('#map').click(function(e) {
		var evt = e ? e:window.event;
		var clickX=0;
		var clickY=0;
		if (evt.pageX || evt.pageY) {
			clickX = evt.pageX;
			clickY = evt.pageY;
		}
		var newImage = $('<img class="marker" src="marker.png">').css({"left": clickX-16, "top": clickY-4});
		var infoPrompt = prompt("Ahoy matey!  Scribe ye notes 'bout the ghastly Kraken!");
		var textBox = $('<div class="info-box">').text(infoPrompt).css({"left": clickX+15, "top": clickY-5});
		$('.main').append(textBox);
		$('.main').append(newImage);

	});



	// changes info-box display to visible
	$(document).on("mouseenter", '.marker', function() {
		$(this).prev('.info-box').toggle('display');
	});
	// changes info-box display to none
	$(document).on("mouseleave", '.marker', function() {
		$(this).prev('.info-box').toggle('display');
	});	



// removes markers/text box when clicked
	$(document).on("click",'.marker',function() {
	$(this).prev('.info-box').remove();
	$(this).remove();
	});







});