$(function() {

	$('#map').click(function(e) {
		var evt = e ? e:window.event;
		var clickX=0;
		var clickY=0;
		if (evt.pageX || evt.pageY) {
			clickX = evt.pageX;
			clickY = evt.pageY;
		}
		var newImage = $('<img id="marker" src="marker.png">').css({"left": clickX-16, "top": clickY-4});
		$('body').prepend(newImage);
		console.log(clickX, clickY);
	});

	$(document).on("click","#marker",function() {
	$(this).remove();
	});







});