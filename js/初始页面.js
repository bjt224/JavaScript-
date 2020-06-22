$(document).ready(function(){
	
	//点击菜单切换内容
	$("#menu ul li:not(:first) a").addClass("fontColor");
	$("#menu ul li").each(function(){
		$(this).click(function(){
			var $index = $(this).index();
			$(".item" + ($index+1)).show().siblings().hide();
			$(this).children().removeClass("fontColor");
			$(this).siblings().children().addClass("fontColor");
		});
	});
	
	//广告窗口
	var $screenwidth,$screenheight,$mytop,$getPosLeft,$getPosTop,$getPosRight;
	$screenwidth = $(window).width();
	$screenheight = $(window).height();
	$mytop = $(document).scrollTop();
	$getPosRight = 0;
	$getPosTop = $screenheight-200;
	$("#adv").css({
		"right":$getPosRight,
		"top":$getPosTop+$mytop
	});
	$(window).resize(function(){
		$screenwidth = $(window).width();
		$screenheight = $(window).height();
		$mytop = $(document).scrollTop();
		$getPosRight = 0;
		$getPosTop = $screenheight-200;
		$("#adv").css({
			"right":$getPosRight,
			"top":$getPosTop+$mytop
		});
		
	});
	$(window).scroll(function(){
		$screenwidth = $(window).width();
		$screenheight = $(window).height();
		$mytop = $(document).scrollTop();
		$myRight = $(document).scrollLeft();
		$getPosRight = 0;
		$getPosTop = $screenheight-200;
		$("#adv").css({
			"right":$getPosRight-$myRight,
			"top":$getPosTop+$mytop
		});
	});
	
	//关闭广告窗口
	$("#closeAdv a").click(function(){
		$("#adv").fadeOut("slow");
	});
	
});
