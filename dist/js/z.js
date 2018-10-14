define(['jquery'], function($){
	function z(){
		var zBtns = $('#z-choose').find('.focus-tab').find('li');
		var zUl = $('#z-choose').find('.focus-list');
		var zLis = zUl.find('li');

		var z_timer = null;
		var zNow = 6;

		zBtns.click(function(){
			zNow = 5 - $(this).index();
			z_tab()
		})
		z_timer = setInterval(function(){
			zNow--;
			z_tab();
		},3000)
		$('#z-choose').hover(function(){
			clearInterval(z_timer)
		},function(){
			z_timer = setInterval(function(){
				zNow--;
				z_tab();
			},3000)
		})
		
		function z_tab(){
			zBtns.attr('class','').eq(5 - zNow).attr('class','active')
			if (zNow == zLis.size() - 6) {
				zBtns.eq(0).attr('class','active');
			}
			zUl.stop().animate({
				bottom:235 * zNow 
			}, 1500, function(){
				if (zNow == zLis.size() - 6) {
					zUl.css('bottom',1175);
					zNow = 6;
				}
			})
		}
	}
	return{
		z:z
	}
})