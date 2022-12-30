$(document).ready(function(){
	

		$(".main-container").on("mouseenter click", function(){
			$(".sub-container").stop().slideDown();		
		});
		$(".main-container").on("mouseleave click", function(){
			$(".sub-container").stop().slideUp();		
		});
		$(".sub-container a").click(function(){
			$(".main-container").stop().animate({right:"-110%"});
			$("body").removeClass("srollstop");
			$(".more-btn").removeClass("active");
			i=0;
		});
	
	var $moreBtn = $(".more-btn");
	let i = 0;
		$(".more-btn").click(function(){
		$(this).toggleClass("active");
		i++;
		if(i==1){
			$(".main-container").stop().animate({right:"0"});
			$("body").addClass("srollstop");
		}else if(i==2){
			$(".main-container").stop().animate({right:"-110%"});
			$("body").removeClass("srollstop");
			i=0;
			}
		});
	
	
		
	
	
	setInterval(sliding, 2400);
	let j = 0;
	function sliding(){
		$(".slide-wrap").stop().animate({left:"-1440"}, 1800, function(){
			$(this).append($(this).children().first());
			$(this).css("left", 0);
		j++;
		if(j == 3) {j = 0;}
		$(".circle button").stop().eq(j).addClass("op").siblings().removeClass("op");	
		return;
		});	
		
	}
	
	
	$(".box").click(function(){
		alert("준비중입니다.");
	});
	
	
	
	
});