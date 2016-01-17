
var board = {

	// For each array element, the value is the number tile currently in that slot.
	// The value 0 represents the blank slot.
	state: [ null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0 ],

	// For each array element, the value is a subarray that lists the adjacent slots.
	adjacent: [null, 
					 [2,5], [1,3,6], [2,4,7], [3,8],
			         [1,6,9], [2,5,7,10], [3,6,8,11], [4,7,12],
			         [5,10,13], [6,9,11,14], [7,10,12,15], [8,11,16],
			         [9,14], [10,13,15], [11,14,16], [12,15]
			  ],

	blankSlot: null,  // Will be set to a slot number from 1 to 16.

	renderTiles: function () {
		$('td').each ( 
			function renderOneSlot () {
				var id = $(this).attr('id');
				var idNum = id.substring(5);  // Strip off the leading "slot-" to extract just the number.
				var tile = board.state[idNum];
				if (tile === 0) {  // It's the blank slot.
					$(this).addClass('blank');
					$(this).text('');
					board.blankSlot = idNum;
				}
				else {
					$(this).removeClass('blank');
				  	$(this).text(tile);			  	
				}
			}
		);

		board.makeSlotsClickable(board.blankSlot);
	},

	makeSlotsClickable: function(idNum){

		var movableSlots = board.adjacent[idNum];
		var selector = "";
		for(var i = 0; i < movableSlots.length; i++){
			selector += ", #slot-" + movableSlots[i];
		}
		selector = selector.substring(2);  // Strip off the leading ", ".
		$(selector).wrapInner('<a href="#"></a>');
	}
};


$(document).ready(board.renderTiles);
