define(['jquery'], function($){
	function top_fix(){
		$(document).ready(function(){
		    $(document).scroll(function(){
		        var top = $(document).scrollTop();
		        if(top < 590){
		        	$("#searchfix").attr("style", "display: none");
		        }else{
		        	$("#searchfix").attr("style", "display: block");	        	
		        }
		   	});
		});
	}
	return{
		top_fix:top_fix
	}
})