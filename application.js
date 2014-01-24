$(document).ready(function() {

$('#list-items').keypress(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		}
	});

//creates a list item, when click on add button and removes input value
$('#add').click(function() {
		var item = $('#list-items').val();
		$('#list-items').val('');
		$('<li class="items"></li>').appendTo('ul').html('<img id="check" src="images/check.png">' + item + '<img id="x-mark" src="images/x-mark.png">');   
	});
		
});

//creates a strike-through on text of the selected list item, when click check img
$(document).on("click", "#check", function() {
	$(this).closest('li').toggleClass("strike")
});

//removes the selected list item, when click on the x-mark img
$(document).on("click", "#x-mark", function(){
    $(this).closest('li').fadeOut(400);
});
