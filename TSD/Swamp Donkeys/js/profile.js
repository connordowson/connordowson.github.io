$(document).ready(function(){

	$(".heroes").hide();

	$(".container").mouseenter(function(){

		$(".photo").hide();
		$(".heroes").fadeIn("300");

	})

	$(".container").mouseleave(function(){

		$(".photo").fadeIn("300");
		$(".heroes").hide();

	})

});