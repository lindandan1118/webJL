/*头部图片*/
	var jEvent=document.getElementById("J_event");
	var tDiv=jEvent.children[0];
	var tClose=tDiv.children[1];
	tClose.onclick=function(){
		console.log("x");
		jEvent.style.display="none";
	}
/*右侧边栏*/
	$(document).ready(function() {
		$(".ico>li").hover(function() {
			$(this.children[1]).stop().animate({"width":65},200);
		}, function() {
			$(this.children[1]).stop().animate({"width":0},200);
		});
		$(".fixed>li").hover(function() {
			$(this.children[1]).stop().animate({"width":65},200);
		}, function() {
			$(this.children[1]).stop().animate({"width":0},200);
		});
	});
/*登录*/
	var a1 =document.getElementById("a1");
	var box =document.getElementById("loginbox");
	a1.onclick=function(){
		box.style.display="none";
	}
	var btn = document.getElementById("btn");
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var log=document.getElementById("log");
	var display = false;
	log.onclick=function(){
		box.style.display="block";
	}
	btn.onclick = function(){
		//当显示情况互换时
		display = !display;
		//当显示情况为真时
		if(display){
		//点击事件执行显示方块
		one.style.display="none";
		two.style.display="block";
		//按钮显示点击消失
		btn.style.backgroundImage="images/pass_login_icons_7c6e14d.png";
		btn.style.backgroundPosition="-0px -86px";
		}
		//否则
		else {
			//点击事件执行不显示方块
			
			one.style.display="block";
			two.style.display="none";
			btn.style.backgroundImage="images/pass_login_icons_7c6e14d.png";
			btn.style.backgroundPosition="-46px -86px";
			//按钮显示显示文本
			// btn.value="显示文本";
		}
	}
/**/
	var adsbox = document.getElementById("big-ads");
		// 1.2找到所需的两个按钮元素
		var chil1=adsbox.children[0];
		var chil2=chil1.children[0];
		var iconUl = chil2.children[0];
		var indicatorUl = chil2.children[1];
		var indicatorLis = indicatorUl.children;
		// 1.3 准备一个下标，用于保存当前的广告页的索引位置
		var index = 0;
		// 2. 设定box的鼠标事件
		adsbox.onmouseover = function(){
			clearInterval(timer);
		}
		adsbox.onmouseleave = function(){
			timer = setInterval(autoPlay,3000);
		}
		// 3. 开始对于iconUl的left值的自动更换-->自动切换广告的功能
		var timer = setInterval(autoPlay,3000);
		// 3.1鼠标触摸到小白点时，广告要进行对应的切换
		for(var i=0;i<indicatorLis.length;i++){
			indicatorLis[i].index = i;
			indicatorLis[i].onmouseover = function(){
				index = this.index;
				switchWP(this.index);
				anim(iconUl,{"left":-790*index});
			}
		}
		// 准备一个函数，就是用来切换iconUl的left值
		function autoPlay(){
			index ++;
			index %= iconUl.children.length;
			switchWP(index);
			anim(iconUl,{"left":-790*index});
		}
		// 准备一个函数，用于实现小白点的切换
		function switchWP(i){
			for(var j=0;j<indicatorLis.length;j++){
				indicatorLis[j].className="";
			}
			indicatorLis[i].className="on";
		}