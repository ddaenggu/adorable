$(function(){
	$('.triangle, .sublist').hide();
	$('.mainlist > li > a.ml1, .tri1, .sb1').hover(function(){
		$('.tri1, .sb1').show();
	}, function(){
		$('.tri1, .sb1').hide();
	});
	$('.mainlist > li > a.ml2, .tri2, .sb2').hover(function(){
		$('.tri2, .sb2').show();
	}, function(){
		$('.tri2, .sb2').hide();
	});
	$('.mainlist > li > a.ml3, .tri3, .sb3').hover(function(){
		$('.tri3, .sb3').show();
	}, function(){
		$('.tri3, .sb3').hide();
	});
	$('.mainlist > li > a.ml4, .tri4, .sb4').hover(function(){
		$('.tri4, .sb4').show();
	}, function(){
		$('.tri4, .sb4').hide();
	});
	$('.mainlist > li > a.ml5, .tri5, .sb5').hover(function(){
		$('.tri5, .sb5').show();
	}, function(){
		$('.tri5, .sb5').hide();
	});

});