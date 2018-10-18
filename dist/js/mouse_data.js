define(['jquery'], function(){
	function mouse_data(){
		// 鼠标经过加载后的数据
		$("#data").find("li").mouseover(function(){
			$(this).attr("class", "li_hover");
			$(this).find(".shop-volume").attr("style", "display:block");
			$(this).find(".attention").attr("style", "display:block");
		})
		$("#data").find("li").mouseout(function(){
			$(this).attr("class", "");
			$(this).find(".shop-volume").attr("style", "display:none");
			$(this).find(".attention").attr("style", "display:none");
		})
	}
	return {
		mouse_data:mouse_data
	}
})