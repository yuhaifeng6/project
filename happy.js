define(['jquery'], function($){
	function happy(){
		// 	// 家电狂欢轮播
		var hUl = $('#jd').find('ul');
		var hLis = hUl.find('li');


		var h_timer = null;
		var hNow = 0;

		h_timer = setInterval(function(){
			hNow++;
			h_tab();
		},4000)
		$('#jd').hover(function(){
			clearInterval(h_timer)
		},function(){
			h_timer = setInterval(function(){
				hNow++;
				h_tab();
			},4000)
		})

		$(".happy-body-right").find(".head").find(".tab").find(".btn").eq(0).attr("class", "btn cur");
		$(".happy-body-right").find(".head").find(".tab").find(".btn").click(function(){
			$(".happy-body-right").find(".head").find(".tab").find(".btn").attr("class", "btn");
			$(".happy-body-right").find(".head").find(".tab").find(".btn").eq($(this).index()).attr("class", "btn cur");
			$(".foot").find(".pic").find(".tab").css("display", "none");
			$(".foot").find(".pic").find(".tab").eq($(this).index()).css("display", "block");
		})

		// 轮播
		function h_tab(){
			hUl.stop().animate({
				left:-594 * hNow 
			}, 2500, function(){
				if (hNow == hLis.size() - 1) {
					hUl.css('left',0);
					hNow = 0;
				}
			})
		}
	}
	return{
		happy:happy
	}
})