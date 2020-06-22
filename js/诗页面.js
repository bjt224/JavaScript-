$(document).ready(function() {
	
	$("#tocomment").click(function(){
		$("html,body").animate({
			scrollTop:$("#left_footer").offset().top
		},500);
	});
	
	$("#explain").click(function() {
		$("#translation").show();
		$("#poem").hide();
	});

	$("#poem_btn").click(function() {
		$("#poem").show();
		$("#translation").hide();
	});

	$("#text").each(function() {
		var $defaultVal = this.value;
		$(this).focus(function() {
			if(this.value == $defaultVal) {
				this.value = "";
				$(this).css("color", "#000");
				$("#left_footer var").text(150);
			}
		});
		$(this).blur(function() {
			if(this.value == "") {
				this.value = $defaultVal;
				$(this).css("color", "#bbb");
				$("#left_footer var").text(141);
			}
		});
	});

	$("#comment_btn").click(function() {
		$("#left_footer var").text(141);
		$("#text").prop("readonly",false);
		var $p = $("#text").val();
		var $count = $("#count").html();
		if($p != "客官，请说点什么吧") {
			$("<p>" + $p + "</p>").appendTo("#new_comment");
			$count++;
			$("#count").html($count);
			$("#text").val("客官，请说点什么吧");
			$("#text").css("color", "#bbb");
		}
	});
	
	$("#translation p:odd").css("color","cornflowerblue");
	var $len1 = $("#poem p").length;
	var $len2 = $("#translation p").length;
	if($len1 > 4){
		$("#poem p:gt(3)").hide();
		$("<p><a href='#'>展开</a></p>").appendTo("#poem");
		$("#poem p:last").css("font","normal bold 18px '楷体'");
		$("#poem p:last a").css("color","darkred");
	}
	if($len2 > 4){
		$("#translation p:gt(3)").hide();
		$("<p><a href='#'>展开</a></p>").appendTo("#translation");
		$("#translation p:last").css("font","normal bold 18px '楷体'");
		$("#translation p:last a").css("color","darkred");
	}
	$("#poem").on("click","p a",function(){
		var $content = $("#poem p:gt(3):not(:last)");
		if($content.is(":visible")){
			$content.hide();
			$(this).html("展开");
		}
		else{
			$content.show();
			$(this).html("收起");
		}
	});
	$("#translation").on("click","p a",function(){
		var $content = $("#translation p:gt(3):not(:last)");
		if($content.is(":visible")){
			$content.hide();
			$(this).html("展开");
		}
		else{
			$content.show();
			$(this).html("收起");
		}
	});
	
	
	var $text = $("#text").val();
	var $counter = $text.length;
	$("#left_footer var").text(150-$counter);
	$(document).keyup(function(){
		var $text = $("#text").val();
		var $counter = $text.length;
		if($counter >= 150)
		{
			$("#left_footer var").text(0);
			$("#text").prop("readonly",true);
		}
		else{
			$("#left_footer var").text(150-$counter);
		}
	});
});
