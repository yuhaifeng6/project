define(['jquery'], function($){
	function city(){
		$(".city").mouseover(function(){
			$(this).find(".city-list").attr("style", "display: block");
		})
		$(".city").mouseout(function(){
			$(this).find(".city-list").attr("style", "display: none");
		})
	}
	return{
		city:city
	}
})