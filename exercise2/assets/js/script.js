$(document).ready(function(){
	

	$('#print').click(function() { 
		
		var value = $('input[name=yes]:checked').val();

		if (value == 'yes') {
			$('body').append('<div class="break">y</div><div class="break">e</div><div class="break">s</div>');
		} else {
			$('body').append('<div class="break">h</div><div class="break">a</div>');
		}

		window.print();  
	    return false;  

	});


});