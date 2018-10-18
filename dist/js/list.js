console.log("加载完成");
require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"buyer":"buyer",
		"city":'city',
		"phone_shop":"phone-shop",
		"connect":"connect",
		"side":"side",
		"right_suspend":"right_suspend",
		"mouse_data":"mouse_data",
		"hover_sale":"hover_sale",
		"show_more":"show_more",
		"list_ajax":"list_ajax",
	}
})
	require(["show_more", 'buyer', 'city', 'phone_shop', 'connect', 'side', 'right_suspend', "mouse_data", "hover_sale", "list_ajax"], function(show_more, buyer, city, phone_shop, connect, side, right_suspend, mouse_data, hover_sale, list_ajax){
		show_more.show_more();
		buyer.buyer();
		city.city();
		phone_shop.phone_shop();
		connect.connect();
		side.side();
		right_suspend.right_suspend();
		mouse_data.mouse_data();
		hover_sale.hover_sale();
		list_ajax.list_ajax();
})


