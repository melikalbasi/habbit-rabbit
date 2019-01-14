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
        var data = recipient.split(",");  
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