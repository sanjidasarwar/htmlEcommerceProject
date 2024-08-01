$(document).ready(function() {

    /*show input field*/

    $('#search').click(function () {

        $(".search-box").show();


    });

    $('#cancel').click(function () {

        $(".search-box").hide();

    });

    /*Slider*/

    $('.carousel').carousel({
        interval: 1500
    })


// Scroll Naviagation Background Change with Sticky Navigation


    $(".main-nav").sticky({topSpacing: 0});


    /*JS for Product Action*/

    $(document).ready(function () {
        $('#qty_input_1').prop('disabled', true);
        $('#plus-btn_1').click(function () {
            $('#qty_input_1').val(parseInt($('#qty_input_1').val()) + 1);
        });
        $('#minus-btn_1').click(function () {
            $('#qty_input_1').val(parseInt($('#qty_input_1').val()) - 1);
            if ($('#qty_input_1').val() == 0) {
                $('#qty_input_1').val(1);
            }

        });

        $('#qty_input_2').prop('disabled', true);
        $('#plus-btn_2').click(function () {
            $('#qty_input_2').val(parseInt($('#qty_input_2').val()) + 1);
        });
        $('#minus-btn_2').click(function () {
            $('#qty_input_2').val(parseInt($('#qty_input_2').val()) - 1);
            if ($('#qty_input_2').val() == 0) {
                $('#qty_input_2').val(1);
            }

        });

        $('#qty_input_3').prop('disabled', true);
        $('#plus-btn_3').click(function () {
            $('#qty_input_3').val(parseInt($('#qty_input_3').val()) + 1);
        });
        $('#minus-btn_3').click(function () {
            $('#qty_input_3').val(parseInt($('#qty_input_3').val()) - 1);
            if ($('#qty_input_3').val() == 0) {
                $('#qty_input_3').val(1);
            }

        });

        /*List View Grid View Js*/

        $('#list').click(function (event) {
            event.preventDefault();
            $('.product_list .card-deck').addClass('list-view-card-deck');
            $('.product_list .card').addClass('list-view-card');
            $('.product_catagories_top a.view').addClass('list-view-view');
        });

        $('#grid').click(function (event) {
            event.preventDefault();
            $('.product_list .card-deck').removeClass('list-view-card-deck');
            $('.product_list .card').removeClass('list-view-card');
            $('.product_catagories_top a.view').removeClass('list-view-view');

        });


        /* Magnify image js*/

        $('#zoom_01').elevateZoom({});

        $('#zoom_02').elevateZoom({});

        $('#zoom_03').elevateZoom({});

        /* Row of Table in Cart remove Js*/


        $('.remove-icon').click(function () {
            $(this).closest('tr').remove();
        });


        $('.clear-btn').click(function () {
            $("table").find("tbody").remove();
        });


    });


    /* Row of Table in Cart remove Js*/


    $('.remove-icon').click(function () {
        $(this).closest('tr').remove();
    });


})