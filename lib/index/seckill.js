setInterval(countDown, 1000);
function countDown(){
	//1.1先获取当前时间(毫秒)
	var nowTime = new Date();
	//1.2设定目标时间
	var targetTime = new Date("2017/11/11 00:00:00");
	// var targetTime = new Date("2017/5/1 00:00:00");
	//2.1两个时间距离多长时间（毫秒转换为秒）		
	var distance=parseInt((targetTime.getTime() - nowTime.getTime())/1000);
	//2.2两个时间距离多长时间（转换为天数60秒/60分/24小时）
	var day =parseInt(distance/60/60/24);
	// console.log("还有" + day + "天");
	//2.2两个时间距离多长时间（转换为小时60秒/60分）-每天的24小时
	var hour =parseInt(distance/60/60) - 24*day;
	// console.log("还有" + hour + "小时");
	//2.2两个时间距离多长时间（转换为分钟60秒）-每小时的60分钟
	var min = parseInt(distance/60)- day*24*60 - hour*60;
	// console.log("还有" + min + "分钟");
	//2.2两个时间距离多长时间（转换为秒）除60取余
	var sec = distance%60;
	// console.log("还有" + sec + "秒");
	var d=document.getElementById("day");
	d.innerHTML =day;
	
	var h=document.getElementById("hour");
	if(hour<10){
		h.innerHTML="0"+hour;
	}else{
		h.innerHTML=hour;
	}

	var m=document.getElementById("min");
	if(min<10){
		m.innerHTML="0"+min;
	}
	else{
		m.innerHTML=min;
	}
	
	var s=document.getElementById("sec");
	if(sec<10){
		s.innerHTML="0"+sec;
	}
	else{
		s.innerHTML=sec;
	}
}