// 读配置项
loadasEX();


// 选择档数
function selectEx(object){

	

	var selectMap ={};
	selectMap["一档"] = "1";
	selectMap["二档"] = "2";
	selectMap["三档"] = "3";
	selectMap["四档"] = "4";
	selectMap["五档"] = "5";
	selectMap["六档"] = "6";

	var select = object.attr("type");

	$(".一档").attr("type","0");
	$(".二档").attr("type","0");
	$(".三档").attr("type","0");
	$(".四档").attr("type","0");
	$(".五档").attr("type","0");
	$(".六档").attr("type","0");
	$(".一档").css("background",' url(img/select_0.png)  no-repeat center center');
	$(".二档").css("background",' url(img/select_0.png)  no-repeat center center');
	$(".三档").css("background",' url(img/select_0.png)  no-repeat center center');
	$(".四档").css("background",' url(img/select_0.png)  no-repeat center center');
	$(".五档").css("background",' url(img/select_0.png)  no-repeat center center');
	$(".六档").css("background",' url(img/select_0.png)  no-repeat center center');

	//if(select == "0"){
		object.attr("type","1");
		object.css("background",' url(img/select_1.png)  no-repeat center center');
	//}
	//else{
		//object.attr("type","0");
		//object.css("background",' url(img/select_0.png)  no-repeat center center');
	//}
	saveasEX("档数",selectMap[object.attr("class")]);
	
}

// 选择窗口大小
function selectView(object){

	var select = object.attr("type");

	$(".窗口大小一").attr("type","0");
	$(".窗口大小二").attr("type","0");
	$(".窗口大小一").css("background",' url(img/select_0.png)  no-repeat center center');
	$(".窗口大小二").css("background",' url(img/select_0.png)  no-repeat center center');


	//if(select == "0"){
		object.attr("type","1");
		object.css("background",' url(img/select_1.png)  no-repeat center center');
	//}
	//else{
		//object.attr("type","0");
		//object.css("background",' url(img/select_0.png)  no-repeat center center');
	//}
	saveasEX("窗口大小",object.attr("class"));
	
}

// 选择字体
function selectFont(object){

	var select = object.attr("type");

	$(".字体粗").attr("type","0");
	$(".字体细").attr("type","0");
	$(".字体粗").css("background",' url(img/select_0.png)  no-repeat center center');
	$(".字体细").css("background",' url(img/select_0.png)  no-repeat center center');


	//if(select == "0"){
		object.attr("type","1");
		object.css("background",' url(img/select_1.png)  no-repeat center center');
	//}
	//else{
		//object.attr("type","0");
		//object.css("background",' url(img/select_0.png)  no-repeat center center');
	//}
	saveasEX("字体",object.attr("class"));
	
}

// 选择微端
function selectServer(object){

	var select = object.attr("type");

	$(".微端一").attr("type","0");
	$(".微端二").attr("type","0");
	$(".微端一").css("background",' url(img/select_0.png)  no-repeat center center');
	$(".微端二").css("background",' url(img/select_0.png)  no-repeat center center');


	//if(select == "0"){
		object.attr("type","1");
		object.css("background",' url(img/select_1.png)  no-repeat center center');
	//}
	//else{
		//object.attr("type","0");
		//object.css("background",' url(img/select_0.png)  no-repeat center center');
	//}
	saveasEX("微端",object.attr("class"));
	
}


function loadExWait(a1,a2,a3,a4,a5,a6,a7,a8,a9){
	if(a1 == 0){
		$(".窗口模式").attr("type","0");
		$(".窗口模式").css("background",' url(img/btn1.png)  no-repeat center center');
	}
	else{
		$(".窗口模式").attr("type","1");
		$(".窗口模式").css("background",' url(img/btn2.png)  no-repeat center center');
	}

	if(a2 == 0){
		$(".关闭音效").attr("type","0");
		$(".关闭音效").css("background",' url(img/btn1.png)  no-repeat center center');
	}
	else{
		$(".关闭音效").attr("type","1");
		$(".关闭音效").css("background",' url(img/btn2.png)  no-repeat center center');
	}

	if(a3 == 0){
		$(".关闭音乐").attr("type","0");
		$(".关闭音乐").css("background",' url(img/btn1.png)  no-repeat center center');
	}
	else{
		$(".关闭音乐").attr("type","1");
		$(".关闭音乐").css("background",' url(img/btn2.png)  no-repeat center center');
	}

	if(a4 == 0){
		$(".老板键").attr("type","0");
		$(".老板键").css("background",' url(img/btn1.png)  no-repeat center center');
	}
	else{
		$(".老板键").attr("type","1");
		$(".老板键").css("background",' url(img/btn2.png)  no-repeat center center');
	}

	if(a5 >= 0){
		if (a5 == 1){
			
			$(".一档").attr("type","1");
			$(".一档").css("background",' url(img/select_1.png)  no-repeat center center');
		}
		if (a5 == 2){
			$(".二档").attr("type","1");
			$(".二档").css("background",' url(img/select_1.png)  no-repeat center center');
		}
		if (a5 == 3){
			$(".三档").attr("type","1");
			$(".三档").css("background",' url(img/select_1.png)  no-repeat center center');
		}
		if (a5 == 4){
			$(".四档").attr("type","1");
			$(".四档").css("background",' url(img/select_1.png)  no-repeat center center');
		}
		if (a5 == 5){
			$(".五档").attr("type","1");
			$(".五档").css("background",' url(img/select_1.png)  no-repeat center center');
		}
		if (a5 == 6){
			$(".六档").attr("type","1");
			$(".六档").css("background",' url(img/select_1.png)  no-repeat center center');
		}

	}

	if(a6 == 0){
		selectView($(".窗口大小一"));
	}
	else{
		selectView($(".窗口大小二"));
	}

	
	if(a7 == 0){
		selectFont($(".字体粗"));
	}
	else{
		selectFont($(".字体细"));
	}

	if(a8 == 0){
		selectServer($(".微端一"));
	}
	else{
		selectServer($(".微端二"));
	}

	if(a9 == 0){
		$(".开启跳帧").attr("type","0");
		$(".开启跳帧").css("background",' url(img/btn1.png)  no-repeat center center');
	}
	else{
		$(".开启跳帧").attr("type","1");
		$(".开启跳帧").css("background",' url(img/btn2.png)  no-repeat center center');
	}
}


$(document).ready(function(){



	$(".窗口模式").click(function(){ //	
		if($(".窗口模式").attr("type") == 0){
			$(".窗口模式").attr("type","1");
			$(".窗口模式").css("background",' url(img/btn2.png)  no-repeat center center');
		}else{
			$(".窗口模式").attr("type","0");
			$(".窗口模式").css("background",' url(img/btn1.png)  no-repeat center center');
		}
		saveasEX("窗口模式",$(".窗口模式").attr("type"));
	})
	
	$(".关闭音效").click(function(){ //	
		if($(".关闭音效").attr("type") == 0){
			$(".关闭音效").attr("type","1");
			$(".关闭音效").css("background",' url(img/btn2.png)  no-repeat center center');
		}else{
			$(".关闭音效").attr("type","0");
			$(".关闭音效").css("background",' url(img/btn1.png)  no-repeat center center');
		}
		saveasEX("关闭音效",$(".关闭音效").attr("type"));
	})
	
	$(".关闭音乐").click(function(){ //	
		if($(".关闭音乐").attr("type") == 0){
			$(".关闭音乐").attr("type","1");
			$(".关闭音乐").css("background",' url(img/btn2.png)  no-repeat center center');
		}else{
			$(".关闭音乐").attr("type","0");
			$(".关闭音乐").css("background",' url(img/btn1.png)  no-repeat center center');
		}
		saveasEX("关闭音乐",$(".关闭音乐").attr("type"));
	})
	
	$(".开启跳帧").click(function(){ //	
		if($(".开启跳帧").attr("type") == 0){
			$(".开启跳帧").attr("type","1");
			$(".开启跳帧").css("background",' url(img/btn2.png)  no-repeat center center');
		}else{
			$(".开启跳帧").attr("type","0");
			$(".开启跳帧").css("background",' url(img/btn1.png)  no-repeat center center');
		}
		saveasEX("开启跳帧",$(".开启跳帧").attr("type"));
	})
	
	$(".一档").click(function(){ //	
		selectEx($(".一档"));
	})
	
	$(".二档").click(function(){ //	
		selectEx($(".二档"));
	})
	$(".三档").click(function(){ //	
		selectEx($(".三档"));
	})
	$(".四档").click(function(){ //	
		selectEx($(".四档"));
	})
	$(".五档").click(function(){ //	
		selectEx($(".五档"));
	})
	$(".六档").click(function(){ //	
		selectEx($(".六档"));
	})
	
	$(".窗口大小一").click(function(){ //	
		selectView($(".窗口大小一"));
	})
	
	$(".窗口大小二").click(function(){ //	
		selectView($(".窗口大小二"));
	})
	
	$(".字体粗").click(function(){ //	
		selectFont($(".字体粗"));
	})
	
	$(".字体细").click(function(){ //	
		selectFont($(".字体细"));
	})
	
	$(".微端一").click(function(){ //	
		selectServer($(".微端一"));
	})
	
	$(".微端二").click(function(){ //	
		selectServer($(".微端二"));
	})
	
	$(".老板键").click(function(){ //	
		if($(".老板键").attr("type") == 0){
			$(".老板键").attr("type","1");
			$(".老板键").css("background",' url(img/btn2.png)  no-repeat center center');
		}else{
			$(".老板键").attr("type","0");
			$(".老板键").css("background",' url(img/btn.png)  no-repeat center center');
		}

		saveasEX("老板键",$(".老板键").attr("type"));
	})


	

});
