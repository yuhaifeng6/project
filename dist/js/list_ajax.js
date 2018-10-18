define(["jquery"], function($){
	function list_ajax(){
		// 加载数据
		$.ajax({
			url:"../data/list.json",
			type:"GET",
			async: false,
			success:function(res){
				var html = "";
				var commodity_left = res.left;
				for(var i = 0; i < commodity_left.length; i++){
					html += `<li>
					<a href="">
						<img src="${commodity_left[i].img}" alt="" style="width: 200px;height: 200px;">
					</a>
					<p class="title">
						<a href="">${commodity_left[i].title}</a>
					</p>
					<p class="price">${commodity_left[i].price}</p>
					<p class="volume">
						<span class="v-left">
							销售数:${commodity_left[i].sale}
						</span>
						<span class="v-right">
							评价数:${commodity_left[i].evaluate}
						</span>
					</p>
					<div class="shop-info">
						<p class="shop-name">
							<a href="">${commodity_left[i].shop_name}</a>
						</p>
						<p class="shop-volume" style="display: none">
							店铺总成交<em>${commodity_left[i].turnover}</em>笔
						</p>
					</div>
					<div class="attention" style="display: none;">
						+ 关注
					</div>
				</li>`;
				}
				$('.commodity').html(html);

				var com_right = "";
				var commodity_right = res.right;
				for(var i = 0; i < commodity_right.length; i++){
					com_right += `<li>
						<p class="pic">
							<a href="">
								<img src="${commodity_right[i].img}" alt="" width="198" height="198">
							</a>
						</p>
						<p class="title">
							<a href="">${commodity_right[i].title}</a>
						</p>
						<p class="price">
							${commodity_right[i].price}
						</p>
						<p class="shop_name">
							<a href="">	${commodity_right[i].shop_name}
							</a>
						</p>
						<p class="shop_address">
							${commodity_right[i].shop_address}
						</p>
					</li>`;
				}
				$(".local").find(".local_list").html(com_right);
			},
			error:function(msg){
				alert(msg);
			}
		});
	}
	return {
		list_ajax:list_ajax
	}
})