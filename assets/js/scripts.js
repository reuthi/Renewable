$(window).on("load", function () {
    "use strict";



    $(".features-dv form ul li input:checkbox").on("click", function () {
        return false;
    });

    $(".rtl-select").on("click", function () {
        window.location.href = "17_Features_Example_Alt_Titlebar.rtl.html"
    });
    $(".eng-select").on("click", function () {
        window.location.href = "17_Features_Example_Alt_Titlebar.html"
    });

    /*==============================================
                      Custom Dropdown
    ===============================================*/

    $('.drop-menu').on('click', function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropeddown').slideToggle(300);
    });
    $('.drop-menu').on("focusout", function () {
        $(this).removeAttr('tabindex', 1).focus();
        $(this).removeClass('active');
        $(this).find('.dropeddown').slideUp(300);
    });
    $('.drop-menu .dropeddown li').on('click', function () {
        $(this).parents('.drop-menu').find('span').text($(this).text());
        $(this).parents('.drop-menu').find('span').addClass("selected");
        $(this).parents('.drop-menu').find('input').attr('value', $(this).attr('id'));
    });


    /*==============================================
                      POPUP FUNCTIONS
    ===============================================*/

    $(".signin-op").on("click", function () {
        $("#sign-popup").toggleClass("active");
        $("#register-popup").removeClass("active");
        $(".wrapper").addClass("overlay-bgg");
    });
    $("html").on("click", function () {
        $("#sign-popup").removeClass("active");
        $(".wrapper").removeClass("overlay-bgg");
    });
    $(".signin-op, .popup").on("click", function (e) {
        e.stopPropagation();
    });

    $(".reg-op").on("click", function () {
        $("#register-popup").toggleClass("active");
        $(".wrapper").addClass("overlay-bgg");
        $("#sign-popup").removeClass("active");
    });
    $("html").on("click", function () {
        $("#register-popup").removeClass("active");
        $(".wrapper").removeClass("overlay-bgg");
    });
    $(".reg-op, .popup").on("click", function (e) {
        e.stopPropagation();
    });



    /*==============================================
                FEATURES TOGGLE FUNCTION
    ===============================================*/


    $(".more-feat > h3").on("click", function () {
        $(".features_list").slideToggle();
    });


    /*==============================================
                    HALF MAP POSITIONING
    ===============================================*/


    var hd_height = $("header").innerHeight();
    $(".half-map-sec #map-container.fullwidth-home-map").css({
        "top": hd_height
    });
    $(".half-map-sec").css({
        "margin-top": hd_height
    });



    /*==============================================
        SETTING POSITION ACRD TO CONTAINER
    ===============================================*/


    var offy = $(".container").offset().left;
    $(".banner_text").css({
        "left": offy
    });

    $(".banner_text.fr").css({
        "right": offy
    });


    if ($(window).width() > 768) {
        var aprt_img = $(".apartment-sec .card_bod_full").innerHeight();
        $(".apartment-sec .img-block").css({
            "height": aprt_img
        });
    };

    $(".close-menu").on("click", function () {
        $(".navbar-collapse").removeClass("show");
        return false;
    });




    /*==============================================
                      SETTING HEIGHT OF DIVS
    ===============================================*/

    var ab_height = $(".agent-info").outerHeight();
    $(".agent-img").css({
        "height": ab_height
    });


    /*==============================================
                    SMOOTH SCROLLING
    ===============================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /*==============================================
                      DROPDOWN EFFECT
    ===============================================*/


    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });


    /*==============================================
                      ALERT FUNCTIONS
    ===============================================*/



    $(".popular-listing .card .card-footer a .la-heart-o").on("click", function () {
        $(".alert-success").addClass("active");
        return false;
    });
    $(".popular-listing .card .card-footer a .la-heart-o, .alert-success").on("click", function (e) {
        e.stopPropagation();
    });

    $(".close-alert").on("click", function () {
        $(".alert-success").removeClass("active");
        return false;
    });


    /*==============================================
                      POPULAR LISTING HOME PAGE
    ===============================================*/

    const div = document.createElement('div');
    div.className = 'row'
    properties.slice(0, 3).forEach(property => {
        div.innerHTML +=
            `<div class="col-lg-4 col-md-6">
        <div class="card">
<a href="" title="">
    <div class="img-block">
        <div class="overlay"></div>
        <img src="${property.Picture}" alt="" class="img-fluid">
        <div class="rate-info">
            <h5>${property.SalesPrice}</h5>
            <span>${property.AssetStatus}</span>
        </div>
    </div>
</a>
<div class="card-body">
    <a href="" title="">
        <h3>${property.Name}</h3>
        <p> <i class="la la-map-marker"></i>${property.Country}</p>
    </a>
    <ul>
        <li>${property.MW} MV</li>
        <li>${property.PropertyType}</li>
        <li>${property.Percent}</li>
    </ul>
</div>
<div class="card-footer">
    <a href="#" class="pull-left">
        <i class="la la-heart-o"></i>
    </a>
</div>
<a href="" title="" class="ext-link"></a>
</div>  </div>`
    })
    const container = document.getElementsByClassName('listing-row')[0];
    if (container) {
        container.appendChild(div)
    }
});
