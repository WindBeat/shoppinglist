$(document).ready(function() {

$('#list-items').keypress(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		}
	});

$('#add').click(function() {
		var item = $('#list-items').val();
		$('#list-items').val('');
		$('<li class="items"></li>').appendTo('ul').html('<img id="check" src="images/check.png">' + item + '<img id="x-mark" src="images/x-mark.png">');   
	});
		
});

$(document).on("click", "#check", function() {
	$(this).closest('li').toggleClass("strike")
});

$(document).on("click", "#x-mark", function(){
    $(this).closest('li').fadeOut(400);
});
