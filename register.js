// 手机号验证
window.onload = function(){
	btnClick();
	var oPhone = document.getElementById('p_num');
  	var oPhone_span = document.getElementById('p_warn');
  	oPhone.onclick = function(){
  		oPhone.setAttribute("style", "border:1px solid #cc0000");
  	}
  	oPhone.onblur = function(){
  		oPhone.setAttribute("style", "border:1px solid #ccc")
  		if (oPhone.value.length == 11 && /^1[34578]\d{9}$/.test(oPhone.value)) {
  			var isnum1 = true;
  			for(i = 0; i < oPhone.value.length; i++){
  				if (!/\d/.test(oPhone.value[i])) {
  					isnum1 = false;
  					break;
  				}
  			}
  		}else{
  			oPhone_span.innerHTML = "请输入正确的手机号";  			
  		}
  		if (isnum1) {
  			oPhone_span.innerHTML = "";
  		}else{
  			oPhone_span.innerHTML = "请输入正确的手机号";
  		}
  	}
  // 验证码
  	var oYzm = document.getElementById('yzm');
  	var oYzm_i = document.getElementById('yzm_i');
  	var oImg = document.getElementById('img');
  	var oDiv1 = document.getElementById('div1');
  	oImg.onclick = function(){
  		var oDiv = document.getElementById("div1");
  		oDiv.innerHTML = testCodeWithStr(5);
  	}
  	oDiv1.onclick = function(){
  		var oDiv = document.getElementById("div1");
  		oDiv.innerHTML = testCodeWithStr(5);	
  	}
  	function btnClick(){
		var oDiv = document.getElementById("div1");
		oDiv.innerHTML = testCodeWithStr(5);
		return code;
	}
	oYzm.onclick = function(){
		oYzm.setAttribute("style", "border:1px solid #cc0000");
	}
  	oYzm.onblur = function(){
		oYzm.setAttribute("style", "border:1px solid #ccc"); 		
  		if ((oYzm.value.toLowerCase() != code.toLowerCase()) || oYzm.value == null) {
  			oYzm_i.innerHTML = "请输入正确的验证码";
  		}else{
  			oYzm_i.setAttribute("style", "background:none");
  			oYzm_i.innerHTML = "√";
  		}
  	}
  
// 判断密码
	var oPas = document.getElementById('password');
 	var oPas_span = document.getElementById('password_i');
 	oPas.onblur = function (){
 		if (oPas.value.length < 6 || oPas.value.length > 16) {
 			oPas_span.innerHTML = "密码长度应为6~16个字符";
 		}else{
 			oPas_span.setAttribute("style", "background:none");
 			oPas_span.innerHTML = "√";
 		}
 	}

// 确认密码
  	var oPas2 = document.getElementById('sure_password');
  	var oPas_span2 = document.getElementById('sure_i');
  	oPas2.onblur = function(){
  		if (oPas.value != oPas2.value || oPas2.value.length == 0) {
  			oPas_span2.innerHTML = "两次输入的密码不一致";
  		}else{
  			oPas_span2.setAttribute("style", "background:none");
  			oPas_span2.innerHTML = "<font color = 'green'>√</font>";
  		}
  	}
}
	var code = null;
	function testCodeWithStr(n){
		var arr = [];
		for(var i = 0; i < n; i++){
			var num = parseInt(Math.random() * 100);
			if(num >= 0 && num <= 9){
				arr.push(num);
			}else if(num >= 65 && num <= 90){
				var str = String.fromCharCode(num);
				arr.push(str);
			}else if(num >= 17 && num <= 42){
				var str = String.fromCharCode(num + 80);
				arr.push(str);
			}else{
				i--;
			}
		}
		code = arr.join("");
		return code;
	}