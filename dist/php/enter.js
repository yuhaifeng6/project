$(function(){
	$("#btn").click(function(){
		if ($('.right').find(".login_body").find("#enter").val() == "" || $('.right').find(".login_body").find("#pwd").val() == "") {
			$(".right").find(".warn").attr("style", "display:block");
		}else{
			$(".right").find(".warn").attr("style", "display:none");
		}

		var str = `phone_number=${$("input[name='phone_number']").val()}&password=${$("input[name='pwd']").val()}`;
		$.ajax({
			method:"post",
			url:"reg_log.php?type=login",
			data:str,
			success:function(data){
				alert(data);
			},
			error:function(msg){
				alert(msg);
			}
		})
	})
})