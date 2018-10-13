$(function(){

	// 头部买家中心
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

	// 城市
	$(".city").mouseover(function(){
		$(this).find(".city-list").attr("style", "display: block");
	})
	$(".city").mouseout(function(){
		$(this).find(".city-list").attr("style", "display: none");
	})
	// 轮播图
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

	$.ajax({
		url: '../data/data.json',
		type: "GET",
		async: false,
		success: function(res){
			//将数据通过循环遍历，添加到页面上
			var relaxed_r = "";
			// 轻松购
			var q =res.xxx;
			for(var i = 0; i < q.length; i++){
				relaxed_r += `<li class="item">
						<a href="" class="pic"><img src="${q[i].rimg}" alt=""></a>
						<div class="up_hover">
							<p class="refer_price">电商参考价：<b>￥2099.00</b></p>
							<p class="detail">
								<a href="">评测</a>
								<span class="line">|</span>
								<a href="">视频</a>
								<span class="line">|</span>
								<a href="">点评</a>
							</p>
						</div>
						<div class="word-info">
							<p class="name"><a href="">${q[i].rtitle}</a></p>
							<p class="price">${q[i].rprice}</p>
							<p class="time">剩余：
								<span class="red-color">11</span>天
								<span class="red-color">12</span>时
								<span class="red-color">47</span>分
								<span class="red-color">13</span>秒
							</p>
						</div>
					</li>`;
				}
				$(".center-relaxed-center").html(relaxed_r);

				var relaxed_r_r = "";
				var p = res.yyy;
				for(var i = 0; i < p.length; i++){
					relaxed_r_r += `<li class="item">
						<a href="" class="pic">
							<img src="${p[i].rrimg}" alt="">
							<span class="icon">仅限到店</span>
						</a>
						<div class="info">
							<p class="name">
								<a href="">${p[i].rrname}</a>
							</p>
							<p class="price">
								<span class="rmb">￥</span>--
							</p>
							<div class="group">
								<span class="icon">${p[i].rricon}</span>
							</div>
							<span class="btn">到店团</span>
						</div>
					</li>`;
				}
			$(".center-relaxed-right").html(relaxed_r_r);

			// 同城购
			var same_pic = "";
			var same = res.same_city;
			for(var i = 0; i < same.length; i++){
					same_pic += `<li><a href=""><img src="${same[i].redpic}" alt=""></a></li>`;
				}
			$(".city-list1").html(same_pic);

			var city_wide = "";
			var same_wide = res.city_wide;
			for(i = 0; i < same_wide.length; i++){
				city_wide += `<li>
						<a href="" class="pic">
							<img src="${same_wide[i].img}" alt="">
						</a>
						<p class="name">
							<a href="" target="_blank">${same_wide[i].name}</a>
						</p>
						<p class="msg">
							${same_wide[i].msg}
						</p>
						<span class="price">${same_wide[i].price1}</span>
						<div class="info">
							<span style="color:#999;">电商参考价:</span>${same_wide[i].info_price}
						</div>
						<div class="detail">
							<a href="" class="item">
								商品评价
								<div class="hid">
									<p class="con">商品评价</p>
								</div>
							</a>
							<a href="" class="item">商品视频
								<div class="hid">
									<p class="con">商品视频</p>
								</div>
							</a>
							<a href="" class="item">网友点评
							<div class="hid">
									<p class="con">网友点评</p>
							</div>
							</a>
						</div>
					</li>`;
			}
			$(".city-list2").html(city_wide);

			// 智选
			var direct_pic = "";
			var direct = res.direct;
			for(var i = 0; i < direct.length; i++){
					direct_pic += `<li>
								<img src="${direct[i].img}" alt="">
								<div class="mark">
									<div class="name">
										漫步者R102V音箱
									</div>
									<div class="price">
										¥159
									</div>
									<div class="btn">
										<a href="">查看详情</a>
									</div>
									<div class="detail">
										<a href="">评测</a>
										<a href="">视频</a>
										<a href="">点评</a>
									</div>
									<div class="refer-price">
										电商参考价：¥暂无
									</div>
								</div>
							</li>`;
				}
			$(".pro-list").html(direct_pic);

			// 品牌精选
			var brand_pic = "";
			var brand = res.brand;
			for(i = 0; i < brand.length; i++){
				brand_pic += `
					<li class="item">
						<a href="" class="pic">
							<img src="${brand[i].img}" alt="">
							<p class="name">
								<a href="">王俊凯 戴尔DELL游匣G3</a>
							</p>
							<p class="price">
								RMB
								<span>7,499</span>
							</p>
						</a>
					</li>
				`;
			}
			$('.second').html(brand_pic);

			// 家电狂欢
			var happy_pic = "";
			var happy = res.happy;
			for(i = 0; i < happy.length; i++){
				happy_pic += `
					<li class="item">
						<span class="line"></span>
						<a href="">
							<img src="${happy[i].img}" alt="">
						</a>
					</li>
				`;
			}
			$(".region .list").html(happy_pic);
			var happy_r = "";
			var happy_r_t = res.happy_r;
			for(i = 0; i < happy_r_t.length; i++){
				happy_r += `
					<li class="btn">${happy_r_t[i].title}</li>
				`;
			}
			$(".head .tab").html(happy_r);

			var happy_r_b = "";
			var happy_r_b1 = "";
			var happy_r_b_pic = res.happy_r_b;
			for(i = 0; i < happy_r_b_pic.length; i++){
				happy_r_b += `
					<li class="ware">
						<div class="up">
							<a href="" class="img">
								<img src="${happy_r_b_pic[i].img}" alt="">
							</a>
						</div>
						<p class="name">
							<a href="">
								创维  32X3  32英寸 窄边蓝光高清节能平板液晶电视机（黑色）
							</a>
						</p>
						<p class="price">
							￥999.00
						</p>
					</li>
				`;
				happy_r_b1 += `
					<li class="ware">
						<div class="up">
							<a href="" class="img">
								<img src="${happy_r_b_pic[i].img_b}" alt="">
							</a>
						</div>
						<p class="name">
							<a href="">
								创维  50M9 50英寸 人工智能HDR 4K超高清 互联网液晶电视机
							</a>
						</p>
						<p class="price">
							￥2499.00
						</p>
					</li>
				`;
			}
			$(".tab1").html(happy_r_b);
			$(".tab2").html(happy_r_b1);
			// 本周热销
			var week = "";
			var week_pic = res.week;
			for(i = 0; i < week_pic.length; i++){
				week += `
					<li class="ware">
						<div class="region">
							<a href="">
								<img src="${week_pic[i].img}" alt="">
							</a>
						</div>
						<p class="name">【顺丰包邮】惠普 PAVILION 15-CK025TX（2UY74PA）15.6英寸电脑</p>
						<p class="price">￥5939.00</p>
					</li>
				`;
			}
			$(".week .list").html(week);
		},
		error: function(msg){
			alert(msg);
		}
	})

	// 家电狂欢轮播
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

	// 侧边导航栏
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

	$("#side").find(".item").mouseout(function(){
		$("#side").find(".item").eq($(this).index()).attr("class", "item");
		$(".nav-classify-body").find(".nav-items-hide").attr("style", "display: none");
		$(".nav-classify-body").find(".nav-items-hide").find(".hide").eq($(this).index()).attr("style", "display: none");				
	})
	$(".nav-classify-body").find(".nav-items-hide").find(".hide").mouseout(function(){
		$("#side").find(".item").eq($(this).index()).attr("class", "item");
		$(".nav-classify-body").find(".nav-items-hide").attr("style", "display: none");
		$(".nav-classify-body").find(".nav-items-hide").find(".hide").eq($(this).index()).attr("style", "display: none");				
	})


	// Z智选
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

	// 右边悬浮导航
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


	// 弹层
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
})