$(function(){
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

	// 鼠标经过套装
	$(".color-suits .suits #official").mouseover(function(){
		$(".color-suits .suits .suit-details").attr("style", "display: block");
	})
	$(".color-suits .suits #official").mouseout(function(){
		$(".color-suits .suits .suit-details").attr("style", "display: none");
	})

	// 读取cookie
	var arr = $.cookie("goods");
	arr = eval(arr);
	for(var i = 0; i < arr.length; i++){
		var html = "";
		html += `<tr>
								<td class="cell-1">
									<div class="goods-info">
										<a href="" class="pic">
											<span>
												<img src="images/Cg-4WVU2BAGIPZBRAAIpNMAv7r4AAB_KgFFL8oAAilM284.jpg" alt="">
											</span>
										</a>
										<span class="title"><a href="">Canon佳能 EOS-1D X(单机)全画幅单反相机、佳能1DX单反相机、更完善的售后服务、被信任是一种快乐！</a></span>
										<div class="color-suits">
											<dl class="color">
												<dt class="lable">颜色：</dt>
												<dd>
													黑色
												</dd>
											</dl>
											<dl class="suits">
												<dt class="label">套装：</dt>
												<dd>
													<span id="official">官方标配</span>
													<div class="suit-details" style="display: none">
														<i class="ico"></i>
														<p>套装详情：</p>
														<p>按宝贝出厂装箱单为准【顺丰包邮】</p>
													</div>
												</dd>
											</dl>
										</div>
										<a href="" class="safeguard"><img src="images/1.png" alt=""></a>
										<a href="" class="safeguard"><img src="images/2.png" alt=""></a>
										<a href="" class="safeguard"><img src="images/3.png" alt=""></a>
										<a href="" class="safeguard"><img src="images/4.png" alt=""></a>
										<a href="" class="safeguard1">z+服务保障</a>
									</div>
								</td>
								<td class="cell-2">¥30999.00</td>
								<td class="cell-3">${arr[i].num}</td>
								<td class="cell-4">--</td>
								<td class="cell-5">¥30999.00</td>
				</tr>`;
		$("#test").prev().html(html);
	}
	total();
	function total(){
		var sum = 0;
		var total = 1;
		for(var i = 0; i < arr.length; i++){
			sum += arr[i].num;
		}
		total = 30999 * sum;
		$(".submit .sub_price .price").find("em").html("￥" + total);
	}
})
