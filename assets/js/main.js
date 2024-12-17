$(document).ready(function(){
	$('.block_title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});



//** Скрипты для Slik Slider (Основной)

$(document).ready(function(){
    $('.sliders').slick({
        slidesToShow:5,
        adaptiveHeight:true,
        
         responsive: [
			{
			breakpoint: 767,
			settings: {
			slidesToShow:1,
			slidesToScroll:1,
		    arrows : false,
		    centerMode: true,
		    
		
			}
		   }
		]	
		
    });    
 });
 

//** Из этой серии со скидкой  
 
 $(document).ready(function(){
    $('.slider-sale').slick({
        slidesToShow:3,
        adaptiveHeight:true,
        
         responsive: [
			{
			breakpoint: 767,
			settings: {
			slidesToShow:1,
			slidesToScroll:1,
		    arrows : false,
		    centerMode: true,
		    
		
			}
		   }
		]	
		
    });    
 });




//** Слайдер для заголовка со стрелочками

$(document).ready(function(){
    $('.slider-d9').slick({
        slidesToShow:4,
		appendArrows:$('.arrows'),
        adaptiveHeight:true,
         responsive: [
			{
			breakpoint: 767,
			settings: {
			slidesToShow:1,
			slidesToScroll:1,
		    arrows : false,
		    centerMode: true,
		
			}
		   }
		]	
		
    });    

    
});



//** Слайдер интерьеров

$(document).ready(function(){
    $('.slider-room').slick({
        slidesToShow:1,
		adaptiveHeight:true,
		dots:true,
		 autoplay: true,
        autoplaySpeed: 3000,
         responsive: [
			{
			breakpoint: 767,
			settings: {
			slidesToShow:1,
			slidesToScroll:1,
		    arrows : false,
		    centerMode: true,
		
			}
		   }
		]	
		
    });    

    
});




//** Слайдер в шапке

$(document).ready(function(){
    $('.slider-main').slick({
        slidesToShow:1,
		adaptiveHeight:true,
		autoplay:false,
         responsive: [
			{
			breakpoint: 767,
			settings: {
			slidesToShow:1,
			slidesToScroll:1,
		    arrows : false,
		    centerMode: true,
		
			}
		   }
		]	
		
    });    

    
});



//** В карточке товара 

$(document).ready(function(){
    $('.cart-sliders').slick({
        slidesToShow:5,
        centerPadding:'20px'
    
      
    });    

    
});


//** Скрипты для мобильного меню

$(function() {
    $(document).on("click", ".mobile_menu_container .parent", function(e) {
        e.preventDefault();
        $(".mobile_menu_container .activity").removeClass("activity");
        $(this).siblings("ul").addClass("loaded").addClass("activity");
    });
    $(document).on("click", ".mobile_menu_container .back", function(e) {
        e.preventDefault();
        $(".mobile_menu_container .activity").removeClass("activity");
        $(this).parent().parent().removeClass("loaded");
        $(this).parent().parent().parent().parent().addClass("activity");
    });
    $(document).on("click", ".mobile_menu", function(e) {
        e.preventDefault();
        $(".mobile_menu_container").addClass("loaded");
        $(".mobile_menu_overlay").fadeIn();
    });
    $(document).on("click", ".mobile_menu_overlay", function(e) {
        $(".mobile_menu_container").removeClass("loaded");
        $(this).fadeOut(function() {
            $(".mobile_menu_container .loaded").removeClass("loaded");
            $(".mobile_menu_container .activity").removeClass("activity");
        });
    });
})

/*Прелоадер*/

window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);
}

