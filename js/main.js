/*
Copyright (c) 2017
[Master Stylesheet]
Template Name : Drone Page Template
Version    : 1.0
Author     : UISuMo Team
Author URI : https://uisumo.com
Support    : uisumo@gmail.com
*/
/*---------------------------------------------
Table of Contents
-----------------------------------------------
Page Pre Loading
Navbar smooth scroll
Theme color change settings
Scroll To Top
Client slider- Owl corousel
Scroll reveal animations
*/
$(document).ready(function () {
    "use strict";
    var lastScrollTop, navbar, $nav, simpleParallax, back;
    /* Page Pre Loading */
    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
    /* end Page Pre Loading */
    /*nav bar background color change on scroll */
    $(document).on('scroll', function () {
        $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    /*smooth transition of navbar on scroll*/
    var lastScrollTop = 0;
    var navbar = $(".navbar");
    $(window).on("scroll", function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            navbar.addClass("navbar-scroll-custom");
        }
        else {
            navbar.removeClass("navbar-scroll-custom");
        }
        lastScrollTop = st;
    });
    //Smooth Scroll
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    /* Theme color change*/
    var theme_settings = $(".theme-settings").find(".theme-color");
    theme_settings.on('click', function () {
        var val = $(this).attr('data-color');
        $('#style_theme').attr('href', 'css/' + val + '.css');
        console.log(val);
        theme_settings.removeClass('theme-active');
        theme_settings.addClass('theme-active');
        return false;
    });
    $(".theme-click").on('click', function () {
        $("#switcher").toggleClass("active");
        return false;
    });
    /*Scroll To Top*/
    back = $(".back-to-top");
    $(window).scroll(function () {
        $(this).scrollTop() > 50 ? back.fadeIn() : back.fadeOut()
    }), back.click(function () {
        return back.tooltip("hide"), $("body,html").animate({
            scrollTop: 0
        }, 800), !1
    }), back.tooltip("show");
    //scrolls down
    //client Slider
    if ($('.client-slider').length) {
        $(".client-slider").owlCarousel({
            items: 2
            , autoplay: true
            , loop: true
            , nav: false
            , dots: true
            , responsive: {
                0: {
                    items: 1
                }
                , 767: {
                    items: 1
                }
                , 991: {
                    items: 2
                }
            }
        });
    }
    /*client slider*/
    /*popup gallery*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a'
        , type: 'image'
        , tLoading: 'Loading image #%curr%...'
        , mainClass: 'mfp-img-mobile'
        , gallery: {
            enabled: true
            , navigateByImgClick: true
            , preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
        , image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            , titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
    /*popup gallery*/
    /*scroll reveal animations*/
    window.sr = ScrollReveal();
    sr.reveal('.header-buttons ', {
        duration: 4000
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.header-text', {
        origin: 'right'
        , duration: 2500
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.drone-img', {
        origin: 'top'
        , duration: 5000
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.drone-insructor', {
        origin: 'right'
        , duration: 2000
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.dr-map-img', {
        origin: 'bottom'
        , duration: 2000
        , mobile: false // set true if you want  animations in mobile devices
    });
    sr.reveal('.hovereffect', {
        rotate: {
            x: 0
            , y: 100
            , z: 0
        }
        , duration: 2500
        , mobile: false // set true if you want  animations in mobile devices
    });
    /*scroll reveal animations*/
    /* clicking on navlink, nav menu  collapses in pesponsive */
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});