$(function(){

// 侧边导航栏
	$(".nav-classify").find(".nav-classify-header").hover(function(){
		$(".nav-classify").find(".nav-classify-body").attr("style", "display:block");
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
		$(".nav-classify-header").mouseout(function(){
			$(".nav-classify").find(".nav-classify-body").attr("style", "display:none");			
		})
		$("#side").mousemove(function(){
			$(".nav-classify").find(".nav-classify-body").attr("style", "display:block");
		})

		$("#side").mouseout(function(){
			$(".nav-classify").find(".nav-classify-body").attr("style", "display:none");
		})
		$(".nav-items-hide").mouseover(function(){
			$(".nav-classify").find(".nav-classify-body").attr("style", "display:block");
		})
		$("#side").find(".item").mouseout(function(){
			$("#side").find(".item").eq($(this).index()).attr("class", "item");
			$(".nav-classify-body").find(".nav-items-hide").attr("style", "display: none");
			$(".nav-classify-body").find(".nav-items-hide").find(".hide").eq($(this).index()).attr("style", "display: none");				
		})
		$(".nav-classify-body").find(".nav-items-hide").find(".hide").mouseout(function(){
			$(".nav-classify").find(".nav-classify-body").attr("style", "display:none");
			$("#side").find(".item").eq($(this).index()).attr("class", "item");
			$(".nav-classify-body").find(".nav-items-hide").attr("style", "display: none");
			$(".nav-classify-body").find(".nav-items-hide").find(".hide").eq($(this).index()).attr("style", "display: none");				
		})
	});
// 右边悬浮
		$(".suspand").find(".su_left").find(".le").find(".item").mouseover(function(){
			$(".suspand").find(".su_left").find(".le").find(".item").eq($(this).index()).attr("style", "background:#ff3333;");
			$(".suspand").find(".su_right").find(".ri").find(".item1").eq($(this).index()).stop().animate({marginLeft:"-107px",});
		})
		$(".suspand").find(".su_left").find(".le").find(".item").mouseout(function(){
			$(".suspand").find(".su_left").find(".le").find(".item").eq($(this).index()).attr("style", "background:#2d2d2d");
			$(".suspand").find(".su_right").find(".ri").find(".item1").eq($(this).index()).stop().animate({marginLeft:"0",});
		}) 



})



