<?php 
	header("Content-type:text/html;charset=utf-8");
	/*
		总结：php链接数据的  天龙八部
	*/
	//1、链接数据库
	$link = mysql_connect("localhost", 'root', '123456');
	// var_dump($link)
	//2、判断链接是否成功
	if(!$link){
		echo "链接数据库失败";
		exit; //退出当前程序。
	}

	//3、设置字符集
	mysql_set_charset("utf8");

	//4、选择数据库
	mysql_select_db("project");

	$sql = "insert into account('phone_number', 'password') values()"
 ?>