$(function(){
	$(".right").find(".login_body").find(".button").click(function(){
		if ($('.right').find(".login_body").find("#text").val() == null || $('.right').find(".login_body").find("#pwd") == null) {
			$(".right").find(".warn").attr("style", "dislay:block");
		}else{
			$(".right").find(".warn").attr("style", "dislay:none");
		}
	})
})