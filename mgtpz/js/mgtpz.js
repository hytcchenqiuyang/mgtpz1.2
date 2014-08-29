$(function(){
	
	$("#navfouce").hover(function(){
		$(".box").slideDown();
	},function(){
		$(".box").slideUp();
	});
	$(".box").hover(function(){
		$(".box").slideDown();
	},function(){
		$(".box").slideUp();
	});

	$("#navfouce1").hover(function(){
		$("#navbox1").show();
		$("#navbox2").hide();
		$("#navbox3").hide();
		$("#navbox4").hide();
		
	},function(){

	});	

	$("#navfouce2").hover(function(){
		$("#navbox1").hide();
		$("#navbox2").show();
		$("#navbox3").hide();
		$("#navbox4").hide();
		
	},function(){

	});	

	$("#navfouce3").hover(function(){
		$("#navbox1").hide();
		$("#navbox2").hide();
		$("#navbox3").show();
		$("#navbox4").hide();
		
	},function(){

	});	

	$("#navfouce4").hover(function(){
		$("#navbox1").hide();
		$("#navbox2").hide();
		$("#navbox3").hide();
		$("#navbox4").show();
	},function(){

	});	

	$("#control1").click(function(){
		$("#picture1").show();
		$("#picture2").hide();
		$("#picture3").hide();
	
	});	
	$("#control2").click(function(){
		$("#picture1").hide();
		$("#picture2").show();
		$("#picture3").hide();
	

	});	

	$("#control3").click(function(){
		$("#picture1").hide();
		$("#picture2").hide();
		$("#picture3").show();


	});	

	

	
});




