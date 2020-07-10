loadConfig();
function loadConfig(){
	loadCMD("graphicbin:66 graphicinfobin:66 animebin:4 animeinfobin:4 graphicbinex:5 graphicinfobinex:5 animebinex:1 animeinfobinex:1 graphicbinv3:19 graphicinfobinv3:19 animebinv3:8 animeinfobinv3:8 graphicbin_puk2:2 graphicinfobin_puk2:2 animebin_puk2:4 animeinfobin_puk2:4 graphicbin_puk3:1 graphicinfobin_puk3:1 animebin_puk3:2 animeinfobin_puk3:2 coordinatebinv3:10 coordinateinfobinv3:10 graphicbin_joy:54 graphicinfobin_joy:54 animebin_joy:34 animeinfobin_joy:34 graphicinfobin_joy_ex:9 graphicbin_joy_ex:9 animebin_joy_ex:9 animebin_joy_ex:9 graphicinfobin_joy_ch:1 graphicbin_joy_ch:1 animebin_joy_ch:1 animebin_joy_ch:1 ");
	loadIP("IP:0:106.14.174.94:9900");
	loadName("smml");

	loadserver(1,"https://gaduan.oss-cn-hangzhou.aliyuncs.com/cgdev/r%1/");
	loadserver(2,"https://gaduan.oss-cn-hangzhou.aliyuncs.com/cgdev/r%1/");


	loadbin(390628876,1000,"https://gaduan.oss-cn-hangzhou.aliyuncs.com/cgdev/smml.zip");
	loaddlq(3975018,1000,"https://gaduan.oss-cn-hangzhou.aliyuncs.com/cgdev/dlq.zip");
	
}
function loadDownload(Exp){
	$(".banner").show();
	var p = 398 * Exp / 100;
	$(".banner").css("width",p + 'px');
	$(".textbanner").text("加载中 " + Exp + "%");
	
	if (Exp == 100){
		$(".textbanner").text("解压中，请等待 ");
		
	}
	if (Exp == -1){
		$(".textbanner").text("加载完成，请进入神馬魔力！ ");
		
	}

}


$(document).ready(function(){

	$(".luntan").click(function(){ //	
		openurl("http://bbs.smmoli.com/");
	})
	$(".zhuce").click(function(){ //	
		openurl("http://bbs.smmoli.com/reg/");
	})
	$(".chongzhi").click(function(){ //	
		openurl("http://bbs.smmoli.com/pay/");
	})
	$(".kefu").click(function(){ //	
		openurl("http://wpa.qq.com/msgrd?v=3&uin=1726590854&site=qq&menu=yes");
	})
	$(".shouye").click(function(){ //	
		url("http://www.smmoli.com/test/index.html");
		//htmlfile("test\\index.html");
	})
	$(".shezhi").click(function(){ //	
		url("http://www.smmoli.com/test/peizhi.html");
		//htmlfile("test\\peizhi.html");
	})
	$(".cunchu").click(function(){ //	
		openquick();
	})
	
	$(".startgame").click(function(){ //	
		startgame();
		// loadDownload(70);
	})

	
	
	$(".gb").click(function(){ // 关闭		
		win_gb();
	})
	$(".min").click(function(){ // 最小化
		win_min();
	})
	

});