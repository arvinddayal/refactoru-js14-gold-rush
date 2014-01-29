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
		prompt("Ahoy matey!  Scribe ye notes 'bout the ghastly Kraken!");
		var newImage = $('<img class="marker" src="marker.png">').css({"left": clickX-16, "top": clickY-4});
		$('body').prepend(newImage);
	});


// removes markers when clicked
	$(document).on("click",".marker",function() {
	$(this).remove();
	});







});