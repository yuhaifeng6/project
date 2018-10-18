$(function(){
	// 计算购物车内商品总量
	sc_car();
	// 计算购物车内的总价
	total();
	// 买家中心
	$(".zc-my-center").mouseover(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd zc-hd-hover")
			$(this).find("#zc-my-center-bd").attr("style", "display: block");
		})
		$(".zc-my-center").mouseout(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd")
			$(this).find("#zc-my-center-bd").attr("style", "display: none");
		})
	// 手机商城
	$(".zc-mobile").mouseover(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd zc-hd-hover")
			$(this).find("#zc-mobile-bd").attr("style", "display: block");
		})
		$(".zc-mobile").mouseout(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd")
			$(this).find("#zc-mobile-bd").attr("style", "display: none");
		})
	// 联系客服
	$(".lianxikefu").mouseover(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd zc-hd-hover")
			$(this).find("#lianxikefu").attr("style", "display: block");
		})
		$(".lianxikefu").mouseout(function(){
			$(this).find('.zc-hd').attr("class", "zc-hd")
			$(this).find("#lianxikefu").attr("style", "display: none");
		})
	// city
	$(".city").mouseover(function(){
			$(this).find(".city-list").attr("style", "display: block");
		})
		$(".city").mouseout(function(){
			$(this).find(".city-list").attr("style", "display: none");
		})
	// 全部分类
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
	// 右边侧边栏
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
	$("#car").click(function(ev){
		preDef(ev);
		$(".su_left").stop().animate({marginLeft: "-240"});
		$(".su_center").stop().animate({marginLeft: "-203"});
		if ($.cookie("goods")) {
			sc_msg();
		}else{
			return false;
		}
	})
	$(".close").click(function(){
		$(".su_left").stop().animate({marginLeft: "0"});
		$(".su_center").stop().animate({marginLeft: "37"});
	})

	// 实现放大镜
	var q = $(".big-pic").find(".big-img").find("img");
	$("#down_pic, .small-box").mouseover(function(){
		$(".magnify").css("display", "block");
		$(".small-box").css("display", "block");
	})
	$("#down_pic, .small-box").mousemove(function(ev){
		// 获取最大边界
		var maxW = q.width() - $(".small-box").width();
		var maxH = q.height() - $(".small-box").height();

		// 获取小框位置
		var smallW = ev.pageX - q.offset().left - $(".small-box").width()/2;
		var smallH = ev.pageY - q.offset().top - $(".small-box").height()/2;
		
		if (smallW <= 0) {
			smallW = 0;
		}
		if (smallW >= maxW) {
			smallW = maxW;
		}
		if (smallH <= 0) {
			smallH = 0;
		}
		if (smallH >= maxH) {
			smallH = maxH;
		}
		// 鼠标移动获取小框移动距离
		$('.small-box').css({left:smallW + 'px',top:smallH + 'px'});
		var lw = $(".small-box").position().left;
		var lh = $(".small-box").position().top;
		var super_w = -lw * 2;
		var super_h = -lh * 2;
		$(".magnify img").css({left:super_w + "px",top:super_h + "px"});
	})
	$("#down_pic, .small-box").mouseout(function(){
		$(".magnify").css("display", "none");
		$(".small-box").css("display", "none");
	})

	// 鼠标经过配送
	$(".distribution .city").mouseover(function(){
		$(".distribution .city_list").attr("style", "display:block");
	})
	$(".distribution").mouseout(function(){
		$(".distribution .city_list").attr("style", "display:none");
	})

	// 点击颜色类别
	var color = false;
	$(".color_class .sort").click(function(){
		if (!color) {
			$(this).attr("class", "no_sort");
			$(".color_class").find("i").attr("class", "");
			color = true;
		}else{
			$(this).attr("class", "sort");
			$(".color_class").find("i").attr("class", "black");
			color = false;
		}
	})
	// 点击套装
	var suit = false;
	$(".suit .official").click(function(){
		if (!suit) {
			$(this).attr("class", "no_official");
			$(".suit .bp").attr("class", "");
			suit = true;
		}else{
			$(this).attr("class", "official");
			$(".suit").find("i").attr("class", "bp");
			suit = false;
		}
	})

	// 点击购买数量
	var num = $(".number .need").val();
	$(".number .decrease").click(function(){
		num--;
		if (num <= 0) {
			num = 1;
			return false;
		}
		$(".number .need").val(num);
	})
	$(".number .increase").click(function(){
		
		if (num >= 20) {
			return false;
		}
		num++;
		$(".number .need").val(num);
	})


	// 点击加入购物车
	$(".quick .join").click(function(){
		var first = $.cookie("goods") == null ? true : false;
		if (first) {
			$.cookie("goods", '[{id:1,num:1}]', {
				raw: true
			});
		}else{
			//2、判断之前是否添加过商品
			var cookieStr = $.cookie("goods");
			var arr = eval(cookieStr);  //eval(必须是外层是数组，元素是对象) 和 JSON.parse()
			var same = false; //假设没有添加过
			for(var i = 0; i < arr.length; i++){
				if(arr[i].id == 1){
					//3、之前存储过数量+1
					arr[i].num++;
					same = true;
					break;
				}
			}
			if(!same){
				//4、没有相同的
				var obj = {id: 2, num: 1};
				arr.push(obj);
			}
			$.cookie("goods", JSON.stringify(arr), {
				expires: 7,
				raw: true
			});
		}
		sc_msg();
		sc_car();
		total();
	})
	function preDef(e){
		if(e.preventDefault){
			e.preventDefault();
		}else{
			e.returnValue = false;
		}
	}
	function sc_msg(){
		var sc_arr = eval($.cookie("goods"));
		var sc_html = '';
		for(var i = 0; i < sc_arr.length; i++){
			sc_html += `<li>
				<div class="shop_name">
					<a href="">华晨数码专营店</a>
				</div>
				<div class="zp_pic">
					<img src="images/Cg-4WVU2BAGIPZBRAAIpNMAv7r4AAB_KgFFL8oAAilM284.jpg" alt="" width="40" height="40">
					<div class="zp_num">
						<em class="decrease1">-</em>
						<input type = "text" value = "${sc_arr[i].num}" class = "buy_num">
						<em class="increase1">+</em>
					</div>
				</div>
				<div class="zp_price">
					¥30999
				</div>
			</li>`;
		}
		$(".cart_list").html(sc_html);
	}
	// 购物车内购买数量
	// sc_msg();
	// var num_t = $(".cart_list .zp_pic .zp_num .buy_num").val();
	// $(".cart_list .zp_pic .zp_num .decrease1").click(function(){
	// 	alert(0);
	// 	num_t--;
	// 	if (num_t <= 0) {
	// 		num_t = 1;
	// 		return false;
	// 	}
	// 	var total = 30999.00;
	// 	total = total * num_t;
	// 	$(".plugin_bd .all_price").find("span").html("￥" + total);
	// })
	// $(".zp_pic .zp_num .increase1").click(function(){
	// 	var num_t = $(".cart_list .zp_pic .zp_num .buy_num").val();
	// 	alert(num_t);
	// 	if (num_t >= 20) {
	// 		return false;
	// 	}
	// 	num_t++;
	// 	var total = 30999.00;
	// 	total = total * num_t;
	// 	$(".plugin_bd .all_price").find("span").html("￥" + total);
	// })

	//购物车内商品数量
	function sc_car(){
		var sc_str = $.cookie("goods");
		if(sc_str){
			var sc_arr = eval(sc_str);
			var sum = 0;
			for(var i = 0; i < sc_arr.length; i++){
				sum += sc_arr[i].num;
			}
			$(".su_left .le #car .zero").html(sum);
		}
	}
	function total(){
		var sc_price = $.cookie("goods");
		if (sc_price) {
			var sc_arr = eval(sc_price);
			var sum = 0;
			var total = 30999.00;
			for(var i = 0; i < sc_arr.length; i++){
				sum += sc_arr[i].num;
			}
			total = total * sum;
			$(".plugin_bd .all_price").find("span").html("￥" + total);
		}
	}

})
