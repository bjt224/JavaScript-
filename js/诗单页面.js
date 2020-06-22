$(document).ready(function() {
	
	$("#tocomment").click(function(){
		$("html,body").animate({
			scrollTop:$("#left_footer").offset().top
		},500);
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