sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$('#slider>img#1').fadeIn(300);

	startSlider();
});

function startSlider(){
	count = $('#slider img').size();

	loop = setInterval(function(){
		 $('#slider img').fadeOut(300);
		 $('#slider img#' + sliderNext).fadeIn(300);

		 sliderInt = sliderNext;
		 sliderNext += 1;

		 if(sliderNext > count){
		sliderNext = 1;
		sliderInt = 1;
	}

	}, 3000)
};

function prev(){
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next(){
	newSlide = sliderInt + 1;
	showSlide(newSlide);

}

function stopLoop(){
	clearInterval(loop);
}

function showSlide(id){
	stopLoop();

	if(id > count){
		id = 1;
	}
	else if(id < 1){
		id = count;
	}

	console.log(id)

		 $('#slider>img').fadeOut(300);
		 $('#slider>img#' + id).fadeIn(300);

		 sliderInt = id;
		 sliderNext = id + 1;

	startSlider();
}

$('#slider img').hover(
	function(){
		stopLoop();
	},
	function(){startSlider();
}
)