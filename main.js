$(function() {

	$('#map').click(function(e) {
		var newImage = $('<img id="marker" src="marker.png">');
		$('#main').append(newImage);
		var evt = e ? e:window.event;
		var clickX=0, clickY=0;
		if (evt.pageX || evt.pageY) {
			clickX = evt.pageX;
			clickY = evt.pageY;
		}
		
		console.log(clickX, clickY);
	});



















});