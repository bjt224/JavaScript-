$(document).ready(function() {
	$("#text").each(function() {
		var $defaultVal = this.value;
		$(this).focus(function() {
			if(this.value == $defaultVal) {
				this.value = "";
				$(this).css("color", "#000");
			}
		});
		$(this).blur(function() {
			if(this.value == "") {
				this.value = $defaultVal;
				$(this).css("color", "#bbb");
			}
		});
	});

	$("#comment_btn").click(function() {
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
});