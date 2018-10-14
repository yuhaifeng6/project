define(['jquery'], function(){
	function connect(){
		$(".lianxikefu").mouseover(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd zc-hd-hover")
			$(this).find("#lianxikefu").attr("style", "display: block");
		})
		$(".lianxikefu").mouseout(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd")
			$(this).find("#lianxikefu").attr("style", "display: none");
		})
	}
	return {
		connect:connect
	}
})