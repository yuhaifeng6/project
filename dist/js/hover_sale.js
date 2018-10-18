define(["jquery"], function($){
	function hover_sale(){
		// 鼠标悬停发货地
		$(".top").find(".toolbar").find("#place").mouseover(function(){
			$(this).attr("class", "place place_hover");
			$(this).find(".city").attr("style", "display:block");
			$(this).find(".city").attr("class", "city city_hover");
		})
		$(".top").find(".toolbar").find("#place").mouseout(function(){
			$(this).find(".city").attr("style", "display:none");
			$(this).attr("class", "place");
			$(this).find(".city").attr("class", "city");
		})
	}
	return {
		hover_sale:hover_sale
	}
})