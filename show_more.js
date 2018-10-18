define(["jquery"], function($){
	// 鼠标点击更多选项
	function show_more(){
		var mouse_more = false;
		$(".selectbox").find(".select").find(".show_more").click(function(){
			if (!mouse_more) {
				$(".selectbox").find(".select").find(".brand1").attr("style", "display:block");
				$(".selectbox").find(".select").find(".show_more").html("收起");
				mouse_more = true;
			}else{
				$(".selectbox").find(".select").find(".brand1").attr("style", "display:none");
				$(".selectbox").find(".select").find(".show_more").html("更多选项");
				mouse_more = false;
			}
		})
	}
	return {
		show_more:show_more
	}
})