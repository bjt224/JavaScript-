$(document).ready(function() {

				//隐藏回到顶部的按钮
				$("#totop").hide();

				//页面滚动时
				$(window).scroll(function() {  

					//页面滚动一定距离后回到顶部按钮出现
					if($(window).scrollTop() > 100) {
						$("#totop").fadeIn();
					} else {
						$("#totop").fadeOut();
					}

					//当页面滚动一段距离后隐藏的#menu菜单出现
					if($(window).scrollTop() > 70) {
						$("#menu").fadeIn("fast");
					} else {
						$("#menu").fadeOut("fast");
					}      

					//使#menu菜单随着页面滚动    
					$offset = $('#placeholder').offset(); //不能用自身的div，不然滚动起来会很卡      
					if($(window).scrollTop() > $offset.top) {     
						$('#menu').css({     
							'position': 'fixed',
							'top': '0px',
							'left': $offset.left + 'px',
							'z-index': '999',
							'height': '60px'      
						});         
					} else {      
						$('#menu').removeAttr('style');      
					}

					//当页面滚动到某个item时使对应的#menu变色
					var items = $("#middle").find(".item");
					var menu = $("#menu");
					var top = $(window).scrollTop();
					var currentId = ""; //滚动条现在所在位置的item id
					items.each(function() {
						var m = $(this);
						//m.offset().top代表每一个item的顶部位置
						if(top > m.offset().top - 100) {
							currentId = m.attr("id");
						} else {
							return false;
						}
					});
					var currentLink = menu.find(".toitem1");
					if(currentId && currentLink.attr("name") != currentId) {
						currentLink.removeClass("toitem1");
						menu.find("[name=" + currentId + "]").addClass("toitem1"); 
					}

				});

				//点击回到顶部，以动画效果回到顶部，下面click函数同理
				$("#totop").click(function() {
					$("body,html").animate({
						scrollTop: 0
					}, 500);
				});

				//点击思慕
				$(".toitem1").click(function() {
					$("body,html").animate({
						scrollTop: $("#item1").offset().top
					}, 500);
				});

				////点击互表心意
				$(".toitem2").click(function() {
					$("body,html").animate({
						scrollTop: $("#item2").offset().top
					}, 500);
				});

				//点击悲情
				$(".toitem3").click(function() {
					$("body,html").animate({
						scrollTop: $("#item3").offset().top
					}, 500);
				});
				
				//隐藏与显示
				$("#middle>div").each(function(){
					var $content = $(this).find("p:gt(4)");
					$content.hide();
					$(this).find(".btn a").click(function(){
						if($content.is(":visible")){
							$content.hide();
							$(this).html("更多");
							$("div.btn img").attr("src","img/down.gif");
						}
						else{
							$content.show();
							$(this).html("收起");
							$("div.btn img").attr("src","img/up.gif");
						}
					})
				});


			});