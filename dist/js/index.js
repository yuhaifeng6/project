console.log("加载完成");

require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"jqueryCookie":"jquery.cookie",
		"buyer":"buyer",
		"phone_shop":"phone-shop",
		"connect":"connect",
		"carousel":"carousel",
		"ajax":"ajax",
		"happy":"happy",
		"navigation_bar":"navigation_bar",
		"z":"z",
		"right_suspend":"right_suspend",
		"top_fix":"top_fix"
	}
})
require(['buyer','phone_shop','connect', 'city', 'carousel', 'ajax', "happy", "navigation_bar", "z", "right_suspend", "top_fix"], function(buyer, phone_shop, connect, city, carousel, ajax, happy, navigation_bar, z, right_suspend, top_fix){
	buyer.buyer();
	phone_shop.phone_shop();
	connect.connect();
	city.city();
	carousel.carousel();
	ajax.ajax();
	happy.happy();
	navigation_bar.navigation_bar();
	z.z();
	right_suspend.right_suspend();
	top_fix.top_fix();
})
	

// 	// 弹层
// 	$(document).ready(function(){
// 	    $(document).scroll(function(){
// 	        var top = $(document).scrollTop();
// 	        if(top < 590){
// 	        	$("#searchfix").attr("style", "display: none");
// 	        }else{
// 	        	$("#searchfix").attr("style", "display: block");	        	
// 	        }
// 	   	});
// 	});
// })