define(["jquery"], function($){
	function phone_shop(){
		$(".zc-mobile").mouseover(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd zc-hd-hover")
			$(this).find("#zc-mobile-bd").attr("style", "display: block");
		})
		$(".zc-mobile").mouseout(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd")
			$(this).find("#zc-mobile-bd").attr("style", "display: none");
		})
	}
	return {
		phone_shop:phone_shop
	}
})