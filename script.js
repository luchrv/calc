/* SCRIPT CALC */
$(document).ready(function() {
	$('#0,#1,#2,#3,#4,#5,#6,#7,#8,#9').click(function(event) {
		var a = $('#dato').val();
		var b = $(this).attr('id');
		if( (a === '' && b === '0') || (a === '0' && b === '0') ) {
			$('#dato').val('0').focus();
		} else {
			$('#dato').val(a + b).focus();
		}
	});
	$(document).on("keydown", keycalc);
});

function keycalc(e) {
	var teclasPermitidas = [8,13,27,96,97,98,99,100,101,102,103,104,105,106,107,109,110,111];
	if ($.inArray((e.which || e.keyCode), teclasPermitidas) < 0) {
		e.preventDefault();
	} else {
		switch (e.which || e.keyCode) {
			case 13: // ENTER
				break;
			case 27: // ESCAPE
				$('#dato').val(0);
				break;
			case 106: // MULTIPLICA
				break;
			case 107: // SUMA
				break;
			case 109: // RESTA
				break;
			case 111: // DIVIDE
				break;
		}
	}
	console.log(e.which || e.keyCode);
}
