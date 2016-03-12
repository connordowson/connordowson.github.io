$(document).ready(function(){

	var $this = $(this);
	$(".heroes").hide();

		$(".container").mouseenter(function(){

			jQuery(".photo", this).hide();
			jQuery(".heroes", this).fadeIn("300");

		});

		$(".container").mouseleave(function(){

			jQuery(".photo", this).fadeIn("300");
			jQuery(".heroes", this).hide();

		});

});
