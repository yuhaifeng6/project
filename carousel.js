define(['jquery'], function($){
	function carousel(){
		var oBtns = $('#box').find('ol').find('li');
		var oUl = $('#box').find('ul');
		var oLis = oUl.find('li');

		var timer = null;
		var iNow = 0;

		oBtns.click(function(){
			iNow = $(this).index();
			tab()
		})
		timer = setInterval(function(){
			iNow++;
			tab();
		},4000)
		$('#box').hover(function(){
			clearInterval(timer)
		},function(){
			timer = setInterval(function(){
				iNow++;
				tab();
			},4000)
		})
		
		function tab(){
			oBtns.attr('class','').eq(iNow).attr('class','active')
			if (iNow == oLis.size() - 1) {
				oBtns.eq(0).attr('class','active');
			}
			oUl.stop().animate({
				left:-1900 * iNow 
			}, 1500, function(){
				if (iNow == oLis.size() - 1) {
					oUl.css('left',0);
					iNow = 0;
				}
			})
		}
	}
	return{
		carousel:carousel
	}
})