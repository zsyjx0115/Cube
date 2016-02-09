$(document).ready(function(){
	var $cube = $(".cube");

	var $up = $(".up");
	var updeg = 0, leftdeg = 0, selfdeg = 0;
	$up.on("click",function(){
		updeg += 90;
		$cube.css({
			"-webkit-transform": "rotateX("+ updeg+"deg) rotateY("+ leftdeg +"deg) rotateZ("+ selfdeg+"deg)"
		});
	});

	var $down = $(".down");
	$down.on("click",function(){
		updeg -= 90;
		$cube.css({
			"-webkit-transform": "rotateX("+ updeg+"deg) rotateY("+ leftdeg +"deg) rotateZ("+ selfdeg+"deg)"		
		});
	});

	var $left = $(".left");
	$left.on("click",function(){
		leftdeg  -= 90;
		$cube.css({
			"-webkit-transform": "rotateX("+ updeg+"deg) rotateY("+ leftdeg +"deg) rotateZ("+ selfdeg+"deg)"		
		});
	});

	var $right = $(".right");
	$right.on("click",function(){
		leftdeg  += 90;
		$cube.css({
			"-webkit-transform": "rotateX("+ updeg+"deg) rotateY("+ leftdeg +"deg) rotateZ("+ selfdeg+"deg)"		
		});
	});

	var $clockwise = $(".clockwise");
	$clockwise.on("click",function(){
		selfdeg += 90;
		$cube.css({
			"-webkit-transform": "rotateX("+ updeg+"deg) rotateY("+ leftdeg +"deg) rotateZ("+ selfdeg+"deg)"		
		});
	});
	var $anticlockwise = $(".anticlockwise");
	$anticlockwise.on("click",function(){
		selfdeg -= 90;
		$cube.css({
			"-webkit-transform": "rotateX("+ updeg+"deg) rotateY("+ leftdeg+"deg) rotateZ("+ selfdeg+"deg)"		
		});
	});
});