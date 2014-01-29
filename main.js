$(function() {


// gets x/y position
	var getPos = function(e){
		var clickX=0;
		var clickY=0;
		if (e.pageX || e.pageY) {
			clickX = e.pageX;
			clickY = e.pageY;
		}
		return {
			x: clickX,
			y: clickY,
		};
	};


	// creates div with img and text box, gets x/y from getPos
	var createMark = function(pos) {
		var infoPrompt = prompt("Ahoy matey!  Scribe ye notes 'bout the ghastly Kraken!");
		var textBox = $('<div class="info-box">').text(infoPrompt);
		var newImage = $('<img class="marker" src="marker.png">');
		var newMark = $('<div class="new-mark">').css({"left": pos.x-95, "top": pos.y-4}).append(newImage).append(textBox);
		return newMark;
	};


	// places div on click
	var makeMark = $('#map').click(function(e) {
		var pos = getPos(e);
		$('.main').append(createMark(pos));
	});





		




	// changes info-box display to visible
	$(document).on("mouseenter", '.marker', function() {
		$(this).next('.info-box').toggle('display');
	});

	// changes info-box display to none
	$(document).on("mouseleave", '.marker', function() {
		$(this).next('.info-box').toggle('display');
	});

	// removes markers/text box when clicked
	$(document).on("click",'.marker',function() {
		$(this).next('.info-box').remove();
		$(this).remove();
	});







});