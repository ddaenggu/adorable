$(document).ready(function(){
	$('.triangle, .sublist').hide();
	$('.mainlist > li > a.ml1, .tri1, .sb1').hover(function(){
		$('.tri1, .sb1').show();
		$('.mainlist > li > a.ml1').css('color','#C6B8F3');
	}, function(){
		$('.tri1, .sb1').hide();
		$('.mainlist > li > a.ml1').css('color','#4B4B4B');
	});
	$('.mainlist > li > a.ml2, .tri2, .sb2').hover(function(){
		$('.tri2, .sb2').show();
		$('.mainlist > li > a.ml2').css('color','#C6B8F3');
	}, function(){
		$('.tri2, .sb2').hide();
		$('.mainlist > li > a.ml2').css('color','#4B4B4B');
	});
	$('.mainlist > li > a.ml3, .tri3, .sb3').hover(function(){
		$('.tri3, .sb3').show();
		$('.mainlist > li > a.ml3').css('color','#C6B8F3');
	}, function(){
		$('.tri3, .sb3').hide();
		$('.mainlist > li > a.ml3').css('color','#4B4B4B');
	});
	$('.mainlist > li > a.ml4, .tri4, .sb4').hover(function(){
		$('.tri4, .sb4').show();
		$('.mainlist > li > a.ml4').css('color','#C6B8F3');
	}, function(){
		$('.tri4, .sb4').hide();
		$('.mainlist > li > a.ml4').css('color','#4B4B4B');
	});
	$('.mainlist > li > a.ml5, .tri5, .sb5').hover(function(){
		$('.tri5, .sb5').show();
		$('.mainlist > li > a.ml5').css('color','#C6B8F3');
	}, function(){
		$('.tri5, .sb5').hide();
		$('.mainlist > li > a.ml5').css('color','#4B4B4B');
	});
	$('.mainlist > li > a.ml6').hover(function(){
		('.mainlist > li > a.ml6').css('color','#C6B8F3');
	},function(){
		('.mainlist > li > a.ml6').css('color','#4B4B4B');
	});
	$('.mainlist > li > a.ml7').hover(function(){
		('.mainlist > li > a.ml7').css('color','#C6B8F3');
	},function(){
		('.mainlist > li > a.ml7').css('color','#4B4B4B');
	});

});
