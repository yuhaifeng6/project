define(['jquery'], function($){
	function navigation_bar(){
		$("#side").find(".item").mouseover(function(){
		$("#side").find(".item").eq($(this).index()).attr("class", "item item_hover");
		$(".nav-classify-body").find(".nav-items-hide").attr("style", "display: block");
		$(".nav-classify-body").find(".nav-items-hide").find(".hide").eq($(this).index()).attr("style", "display: block");		
		$(".nav-classify-body").find(".nav-items-hide").find(".hide").mouseover(function(){
			$("#side").find(".item").eq($(this).index()).attr("class", "item item_hover");
			$(".nav-classify-body").find(".nav-items-hide").attr("style", "display: block");
			$(".nav-classify-body").find(".nav-items-hide").find(".hide").eq($(this).index()).attr("style", "display: block");		
		});
	})

		$("#side").find(".item").mouseout(function(){
			$("#side").find(".item").eq($(this).index()).attr("class", "item");
			$(".nav-classify-body").find(".nav-items-hide").attr("style", "display: none");
			$(".nav-classify-body").find(".nav-items-hide").find(".hide").eq($(this).index()).attr("style", "display: none");				
		})
		$(".nav-classify-body").find(".nav-items-hide").find(".hide").mouseout(function(){
			$("#side").find(".item").eq($(this).index()).attr("class", "item");
			$(".nav-classify-body").find(".nav-items-hide").attr("style", "display: none");
			$(".nav-classify-body").find(".nav-items-hide").find(".hide").eq($(this).index()).attr("style", "display: none");				
		})
	}
	return{
		navigation_bar:navigation_bar
	}
})