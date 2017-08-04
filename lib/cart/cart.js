//全选的实现
	var chk =document.getElementById("chk");
	var all =document.getElementById("all");
	var input =document.getElementsByTagName("input");
	var isChk =false;
	//上面的全选
	chk.onclick=function(){
		isChk = !isChk;
		for (var i = 0; i < input.length; i++) {
			input[i].checked =isChk;
		};
	}
	//下面的全选
	all.onclick=function(){
		isChk = !isChk;
		for (var i = 0; i < input.length; i++) {
			input[i].checked =isChk;
		};	
	}