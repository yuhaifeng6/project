define(['jquery'], function($){
	function right_suspend(){
		$(".suspand").find(".su_left").find(".le").find(".item").mouseover(function(){
			$(".suspand").find(".su_left").find(".le").find(".item").eq($(this).index()).attr("style", "background:#ff3333;"
	);
			$(".suspand").find(".su_right").find(".ri").find(".item1").eq($(this).index()).stop().animate({marginLeft:"-107px",});
		})
		$(".suspand").find(".su_left").find(".le").find(".item").mouseout(function(){
			$(".suspand").find(".su_left").find(".le").find(".item").eq($(this).index()).attr("style", "background:#2d2d2d"
	);
			$(".suspand").find(".su_right").find(".ri").find(".item1").eq($(this).index()).stop().animate({marginLeft:"0",});
		})
	}
	return{
		right_suspend:right_suspend
	}
})