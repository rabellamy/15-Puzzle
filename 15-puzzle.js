
var board = {

// For each array element, the value is the number tile currently in that slot.
// The value 0 represents the blank slot.
	state: [ null, 15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 1],

	renderTiles: function () {
		$('td').each ( 
			function renderOneSlot () {
				var id = $(this).attr('id');
				var idNum = id.substring(5);
				var tile = board.state[idNum];
				if (tile == 0) {  // It's the blank slot.
					$(this).addClass('blank');
				}
				else {
					$(this).removeClass('blank');
				  	$(this).text(tile);			  	
				}
			}
		);
	},
}

$(document).ready(board.renderTiles);