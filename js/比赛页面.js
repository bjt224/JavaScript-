window.onload = function(){
   	var demo = document.getElementById("timer");
   	var endTime = new Date("2019/1/10 00:00:00"); // 最终时间
   	setInterval(clock,1000); // 开启定时器
   	function clock(){
    	var nowTime = new Date(); // 一定是要获取最新的时间
    	// console.log(nowTime.getTime()); 获得自己的毫秒
    	var second = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
    	// 用将来的时间毫秒 - 现在的毫秒 / 1000 得到的 还剩下的秒 可能处不断 取整
    	// console.log(second);
     	// 一小时 3600 秒
    	// second / 3600 一共的小时数 /24 天数
    	var d = parseInt(second / 60 / 60 / 24); //天数
    	//console.log(d);
    	var h = parseInt(second / 60 / 60 % 24) // 小时
    	// console.log(h);
    	var m = parseInt(second / 60 %60 );
    	//console.log(m);
    	var s = parseInt(second % 60); // 当前的秒
    	console.log(s);
    	/* if(d<10)
    	{
    		 d = "0" + d;
   		}*/
    	d<10 ? d="0"+d : d;
    	h<10 ? h="0"+h : h;
    	m<10 ? m="0"+m : m;
    	s<10 ? s="0"+s : s;
    	demo.innerHTML = "距离截至报名时间还剩: "+d+"天 "+h+"小时 "+m+"分钟 "+s+"秒";
   	}
}