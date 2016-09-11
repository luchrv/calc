/***************
 * SCRIPT CALC *
 ***************/
$(document).ready(function() {
	$('#0,#1,#2,#3,#4,#5,#6,#7,#8,#9').click(function(event) {
		var a = $('#dato').val();
		var b = $(this).attr('id');
		$('#dato').val( a + b).focus();
	});
	$('#limpiar,#iniciar,#retroceso,#divide,#multiplica,#resta,#suma,#coma,#igual').click(function(event) {
		var id = $(this).attr('id');
		var op = $('#dato').val();
		switch (id) {
			case 'divide':
				op += '/';
				break;
			case 'multiplica':
				op += '*';
				break;
			case 'resta':
				op += '-';
				break;
			case 'suma':
				op += '+';
				break;
			case 'coma':
				console.log(op.indexOf('.'));
				if (op.indexOf('.') < 0){
					op += '.';
				}
				break;
			case 'igual':
				op = evaluar( $('#dato').val() );
				break;
			case 'limpiar':
				op = '0';
				break;
			case 'retroceso':
				if (op !== ''){
					var sd = parseInt(op.length - 1);
					op = op.substr(0, sd);
				} else {
					op = 0;
				}
				break;
		}
		$('#dato').val(op).focus();
	});
	// Capturamos las teclas presionadas
	$(document).on("keydown", keycalc);
});

var total = 0;
var operador = null;

/**
 * Definimos las acciones para las teclas permitidas
 */
function keycalc(e) {
	var teclasPermitidas = [8,13,27,96,97,98,99,100,101,102,103,104,105,106,107,109,110,111];
	if ($.inArray((e.which || e.keyCode), teclasPermitidas) < 0) {
		e.preventDefault();
	} else {
		switch (e.which || e.keyCode) {
			case 13: // ENTER
				var valor = evaluar( $('#dato').val() );
				$('#dato').val(valor);
				break;
			case 27: // ESCAPE
				$('#dato').val(0);
				break;
		}
	}
	console.log(e.which || e.keyCode);
}

function evaluar(fn) {
	return new Function('return ' + fn)();
}
