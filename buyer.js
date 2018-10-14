define(["jquery"], function($){
	function buyer(){
		$(".zc-my-center").mouseover(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd zc-hd-hover")
			$(this).find("#zc-my-center-bd").attr("style", "display: block");
		})
		$(".zc-my-center").mouseout(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd")
			$(this).find("#zc-my-center-bd").attr("style", "display: none");
		})
	}	
	return {
		buyer:buyer
	}
})