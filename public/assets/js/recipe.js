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

    $('#exampleModal').on('shown.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever')
        // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var data = recipient.split("%");  
//        console.log(data);
        var modal = $(this)
        modal.find('.modal-header').text("Recipe!")
        modal.find('.modal-body').text("")
        modal.find('.modal-body').append(makeUL(data))
        modal.find('.modal-body input').val(recipient)
    })

    
        function makeUL(array) {
            var list = document.createElement('ul');
            for (var i = 0; i < array.length; i++) {
                var item = document.createElement('li');         item.appendChild(document.createTextNode(array[i]));
                list.appendChild(item);
            }
            return list;

        }

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




// :: 5.0 Sliders Active Code
// if ($.fn.owlCarousel) {
//     var welcomeSlide = $('.hero-slides');
//     var receipeSlide = $('.receipe-slider');

//     welcomeSlide.owlCarousel({
//         items: 1,
//         margin: 0,
//         loop: true,
//         nav: true,
//         navText: ['Prev', 'Next'],
//         dots: true,
//         autoplay: true,
//         autoplayTimeout: 5000,
//         smartSpeed: 1000
//     });

//     welcomeSlide.on('translate.owl.carousel', function () {
//         var slideLayer = $("[data-animation]");
//         slideLayer.each(function () {
//             var anim_name = $(this).data('animation');
//             $(this).removeClass('animated ' + anim_name).css('opacity', '0');
//         });
//     });

//     welcomeSlide.on('translated.owl.carousel', function () {
//         var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
//         slideLayer.each(function () {
//             var anim_name = $(this).data('animation');
//             $(this).addClass('animated ' + anim_name).css('opacity', '1');
//         });
//     });

//     $("[data-delay]").each(function () {
//         var anim_del = $(this).data('delay');
//         $(this).css('animation-delay', anim_del);
//     });

//     $("[data-duration]").each(function () {
//         var anim_dur = $(this).data('duration');
//         $(this).css('animation-duration', anim_dur);
//     });

//     var dot = $('.hero-slides .owl-dot');
//     dot.each(function () {
//         var index = $(this).index() + 1 + '.';
//         if (index < 10) {
//             $(this).html('0').append(index);
//         } else {
//             $(this).html(index);
//         }
//     });

//     receipeSlide.owlCarousel({
//         items: 1,
//         margin: 0,
//         loop: true,
//         nav: true,
//         navText: ['Prev', 'Next'],
//         dots: true,
//         autoplay: true,
//         autoplayTimeout: 5000,
//         smartSpeed: 1000
//     });
// }

