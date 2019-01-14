$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        margin:10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },

    })

    $(".favoriteRecipe").on("click", function(){
        var newFave = {};
        newFave.recipe_img = $(".recipeImage").data("image");
        newFave.recipe_name = $(".recipeName").text(); 
        newFave.description = $(".recipeDescription").text();

        console.log(newFave);
        
            $.post("/favrecipes", newFave).then(function(data) {
            //   window.location.replace(data);
              console.log(data);
              // If there's an error, handle it by throwing up a boostrap alert
            }).catch(function(err){
                console.log(err);
            });
       
        
    })


})

// :: 5.0 Sliders Active Code
if ($.fn.owlCarousel) {
    var welcomeSlide = $('.hero-slides');
    var receipeSlide = $('.receipe-slider');

    welcomeSlide.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ['Prev', 'Next'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000
    });

    welcomeSlide.on('translate.owl.carousel', function () {
        var slideLayer = $("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).removeClass('animated ' + anim_name).css('opacity', '0');
        });
    });

    welcomeSlide.on('translated.owl.carousel', function () {
        var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).addClass('animated ' + anim_name).css('opacity', '1');
        });
    });

    $("[data-delay]").each(function () {
        var anim_del = $(this).data('delay');
        $(this).css('animation-delay', anim_del);
    });

    $("[data-duration]").each(function () {
        var anim_dur = $(this).data('duration');
        $(this).css('animation-duration', anim_dur);
    });

    var dot = $('.hero-slides .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1 + '.';
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    receipeSlide.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ['Prev', 'Next'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000
    });
}

