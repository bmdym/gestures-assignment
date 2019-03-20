var x = 0
var y = 0

$("#gestureArea").mousedown(function(event) {
  $("#gestureResult").text("The mouse is down.")
  x = (event.pageX)
	y = (event.pageY)
})

$("#gestureArea").mouseup(function(event) {
	upX = (event.pageX)
	upY = (event.pageY)
	if (upX < x) {
		$("#gestureResult").text("You have swiped left.");
	} else if (upX > x) {
		$("#gestureResult").text("You have swiped right.");
	} else if (upX == x) {
		$("#gestureResult").text("The mouse is up.");
	}
})
