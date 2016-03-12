$(document).ready(function(){

	var $this = $(this);
	$(".heroes").hide();

		$(".container").mouseenter(function(){

			jQuery(".photo", this).toggle();
			jQuery(".heroes", this).fadeToggle("300");

		});

		$(".container").mouseleave(function(){

			jQuery(".photo", this).fadeToggle("300");
			jQuery(".heroes", this).toggle();

		});

});
