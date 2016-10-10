console.log('\'Allo \'Allo!');

$(function(){

	// $(".linkpost").click(function(){$(".content").load("./components/post.html");});
	$(".link0").click(function(){$(".content").load("./components/mainpage.html");});
	$(".link11").click(function(){$(".content").load("./components/centersituation.html");});
	$(".link12").click(function(){$(".content").load("./components/centeroriganiation.html");});
	$(".link13").click(function(){$(".content").load("./components/centerqa.html");});
	$(".link21").click(function(){$(".content").load("./components/researchdirection.html");});
	$(".link22").click(function(){$(".content").load("./components/researchproject.html");});
	$(".link23").click(function(){$(".content").load("./components/researchachievement.html");});
	$(".link24").click(function(){$(".content").load("./components/researchplatform.html");});
	$(".link31").click(function(){$(".content").load("./components/groupteam.html");});
	$(".link32").click(function(){$(".content").load("./components/groupmember.html");});
	$(".link41").click(function(){$(".content").load("./components/degreepd.html");});
	$(".link42").click(function(){$(".content").load("./components/degreedoc.html");});
	$(".link43").click(function(){$(".content").load("./components/degreemaster.html");});
	$(".link51").click(function(){$(".content").load("./components/exchangecourse.html");});
	$(".link52").click(function(){$(".content").load("./components/exchangemeeting.html");});
	$(".navbar-inverse .dropdown").click(function(){
		
		     // $(this).addClass('ban');

	});
	var links = true;
	$('.links .topic').click(function(){
	
	        if(links){
		$('.links').animate({marginTop:'-350px'},600);
		links = !links;
	         }else{
	         	$('.links').animate({marginTop:'-50px'},600);
	         	links = !links;
	         }
	});
});