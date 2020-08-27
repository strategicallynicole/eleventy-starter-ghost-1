/*
<<<<<<< HEAD
    Theme Name: Delas - Responsive Ghost Blogging Theme
=======
    Theme Name: Delas - Modern and Minimal HTML5 Blog Template
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
    Author: ElectronThemes
    Author URI: http://electronthemes.com
    Version: 1.0.0
*/
/**---------------------------------------*/
/**           Table Of contents          **/
/**---------------------------------------*/
/**
 * 0. Preloader
<<<<<<< HEAD
 * 1. Animation JS
 * 2. Post Grid
 * 3. Sticky Menu
 * 4. Scroll Top
 * 5. OWL Carousel Sliders
 * 6. Top Author Hover
 * 7. Menu JS
 * 8. Search form
 * 9. FAQ
 * 10. Fitvids
 * 11. Medium Zoom
 */

////////////////////////////////// 0. Preloader JS /////////////////////////
$(window).on('load', function() {
=======
 * 1. AOS Initialization
 * 2. Homepage news grid
 * 3. Stticky Menu
 * 4. Scroll to top
 * 5. OWL Carousel Sliders
 * 6. FLIP Card JS
 * 7. Spacing Class
 * 8. Menu JS
 * 9. Google Map
 * 10. Counter JS
 */

$(window).on('load', function() {
    ////////////////////////////////// 0. Preloader JS /////////////////////////
    $('body').removeClass('overflow-hidden')
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
    $('body').imagesLoaded(function() {
        $('.preloader-wave').fadeOut()
        $('#preloader')
            .delay(200)
            .fadeOut('slow')
            .remove()
    })

<<<<<<< HEAD
    ////////////////////////// 1. Animation JS ////////////////////////
=======
    $('body').imagesLoaded(function() {
        $('.loader').fadeOut()
        $('.site-preloader')
            .delay(200)
            .fadeOut('slow')
            .remove()
    })

    //////////////////////////// 1. AOS Initialization /////////////////////
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
    if ($('[data-aos]').length) {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
        })
    }

<<<<<<< HEAD
    /////////////////////////// 2. Post Grid /////////////////////////

    // Homepage news grid
=======
    //////////////////////// 2. Homepage news grid ////////////////////////
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
    var $grid = $('.news-grid').imagesLoaded(function() {
        $grid.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            },
        })
    })
<<<<<<< HEAD

    // Blog Grip
    var $bloggrid = $('.blog-grid').imagesLoaded(function() {
        $bloggrid.isotope({
            itemSelector: '.col-lg-4',
            percentPosition: true,
            masonry: {
                columnWidth: '.col-lg-4',
            },
        })
    })
=======
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
})

$(document).ready(function() {
    'use strict'
<<<<<<< HEAD

    /////////////////////////// 3. Sticky Menu /////////////////////////
=======
    ///////// Switcher //////////////
    $('.gear-sliders').on('click', function() {
        $('.delas-switcher').toggleClass('active')
    })

    $('.onoffswitch-checkbox').on('click', function() {
        if ($('.onoffswitch-checkbox').is(':checked')) {
            $(this)
                .attr('checked', 'checked')
                .parents('body')
                .addClass('light-mode')
            localStorage.setItem('lightMode', 1)
        } else {
            $(this)
                .removeAttr('checked', 'checked')
                .parents('body')
                .removeClass('light-mode')
            localStorage.setItem('lightMode', 0)
        }
    })

    // Set data to localstorage
    if (localStorage.getItem('lightMode') == 1) {
        $('body').addClass('light-mode')
        $('.onoffswitch-checkbox').attr('checked', 'checked')
    } else {
        $('body').removeClass('light-mode')
        $('.onoffswitch-checkbox').removeAttr('checked', 'checked')
    }

    /////////////////////////////// 3. Stticky Menu ////////////////////////////
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
    var header = $('.header-area'),
        $window = $(window)
    $window.on('scroll', function() {
        if ($window.scrollTop() > 200) {
            header.addClass('sticky-menu')
        } else {
            header.removeClass('sticky-menu')
        }
    })

<<<<<<< HEAD
    ////////////////////////// 4. Scroll Top ////////////////////////
    $('body').prepend(
=======
    /////////////////////////////// 4. Scroll to top ////////////////////////////
   /*  $('body').prepend(
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
        '<div class="go-top"><span id="top"><i class="fa fa-long-arrow-up"></i></span></div>'
    )
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.go-top').fadeIn()
        } else {
            $('.go-top').fadeOut()
        }
    })
    $('#top').click(function() {
        $('body, html').animate({ scrollTop: 0 }, 1100)
<<<<<<< HEAD
    })

    ////////////////////////// 5. OWL Carousel Sliders ////////////////////////
=======
    }) */

    ////////////////////////// 5. OWL Carousel Sliders ////////////////////////

>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
    // Featured slider

    $('.featured-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        smartSpeed: 900,
        responsiveClass: true,
        autoHeight: true,
    })
    var i = 1
    $('.featured-slider .owl-dot').each(function() {
        if (i < 10) $(this).text('0' + i)
        else $(this).text(i)
        i++
    })

    // latest news slider
    $('.ln-carousel').owlCarousel({
        smartSpeed: 500,
        nav: true,
        navText: [
            '<img src="assets/img/icon/long-arrow-right.png" class="fa fa-rotate-180" alt="Prev">',
            '<img src="assets/img/icon/long-arrow-right.png" alt="Next">',
        ],
<<<<<<< HEAD
        margin: 30,
        responsiveClass: true,
        autoHeight: true,
=======
        margin: 90,
        responsiveClass: false,
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
<<<<<<< HEAD
                items: 3,
=======
                items: 2,
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
            },
        },
    })

    // twitter feed slider
    $('.tf-carousel').owlCarousel({
        items: 1,
        smartSpeed: 500,
    })

    // another post carousel
    $('.ap-carousel').owlCarousel({
        smartSpeed: 500,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
        },
    })

    // Top author carousel
    $('.ta-carousel').owlCarousel({
        smartSpeed: 500,
        margin: 30,
        responsiveClass: true,
<<<<<<< HEAD
        nav: true,
=======
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
        navText: [
            '<img src="assets/img/icon/long-arrow-right.png" class="fa fa-rotate-180" alt="Prev">',
            '<img src="assets/img/icon/long-arrow-right.png" alt="Next">',
        ],
<<<<<<< HEAD
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 5,
=======
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
            },
        },
    })

<<<<<<< HEAD
    //FOOTER Tag Slider
    $('.footer-tag').owlCarousel({
=======
    //FOOTER SLIDER
    $('.footer-tag').owlCarousel({
        loop: true,
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
        margin: 20,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    })
<<<<<<< HEAD
    //FLIP JS
    $('.card').flip({
        trigger: 'hover',
    })
    // HERO PAGE SLIDE
    $('.post-page-slide').owlCarousel({
=======

    // About Page Slider
    $('.authors-area').owlCarousel({
        items: 5,
        autoplay: false,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            500: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    })
    //  Single Portfolio Slider
    $('.single-portfolio-slider').owlCarousel({
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
        items: 1,
        autoplay: false,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    })
<<<<<<< HEAD

    ////////////////////////////////// 6. Top Author Hover ////////////////////////////////
=======
    ////////////////////////// 6. FLIP Card JS ////////////////////////////
    $('.card').flip({
        trigger: 'hover',
    })
    ////////////////////////////////// 7. Spacing Class ////////////////////////////////
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
    var ta_carousel = $('.ta-carousel .owl-item')
    ta_carousel
        .first()
        .children('.single-top-author')
        .addClass('active')
    ta_carousel.hover(function() {
        $(this)
            .addClass('active')
            .siblings()
            .children('.single-top-author')
            .removeClass('active')
        $(this)
            .children('.single-top-author')
            .addClass('active')
    })
<<<<<<< HEAD
    ////////////////////////////////// 7. Menu JS ////////////////////////////////

=======

    ////////////////////////////////// 8. Menu JS ////////////////////////////////
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
    $('.menubars').on('click', function(e) {
        e.preventDefault()
        $('.mainmenu-list').toggleClass('active hide-menu')
    })
    $('.close-menu').on('click', function() {
        $('.mainmenu-list')
            .removeClass('active')
            .addClass('hide-menu')
    })
<<<<<<< HEAD

    ////////////////////////////////// 8. Search form ////////////////////////////////
    $('.search-trigger').click(function() {
        $('.expanded-search')
            .addClass('active')
        $('body').addClass('overflow-hidden')
=======
    $('.mainmenu-list > ul > li').each(function() {
        $(this)
            .children('ul')
            .prev('a')
            .append('<span class="fa fa-angle-down ml-1"></span>')
    })
    $('.mainmenu-list ul ul > li').each(function() {
        $(this)
            .children('ul')
            .prev('a')
            .append('<span class="fa fa-angle-right"></span>')
    })
    function mobile_menu_icon() {
        if ($(window).width() <= 991) {
            $('.mainmenu-list ul span.fa').click(function(e) {
                e.preventDefault()
                $(this)
                    .parent()
                    .next()
                    .toggle()
                $(this).toggleClass('fa-angle-down fa-angle-up')
            })
        }
    }
    mobile_menu_icon()

    $(window).resize(function() {
        mobile_menu_icon()
    })

    // Search js
    $('.search-trigger').click(function() {
        $(this)
            .parent('.expanded-search')
            .addClass('active')
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
    })
    $('.search-close-trigger').click(function() {
        $(this)
            .parents('.expanded-search')
            .removeClass('active')
<<<<<<< HEAD
        $('body').removeClass('overflow-hidden')
    })

    /////////////////////////////// 9. FAQ ///////////////////////////////
    $('.faq-qus-title').on('click', function() {
        var $this = $(this)
        $this
            .toggleClass('active')
            .next()
            .slideToggle()
            .parent()
            .siblings()
            .children('.faq-qus-title')
            .removeClass('active')
            .next()
            .slideUp()
    })

    ////////////////////////////// 10. Fitvids /////////////////////////////
    $('.single-post-content').fitVids()

    /////////////////////////////// 11. Medium zoom ///////////////////////////////
    if ($('.kg-image-card, .kg-gallery-card').length) {
        const images = [
            ...document.querySelectorAll('.kg-image-card img'),
            ...document.querySelectorAll('.kg-gallery-card img'),
        ]

        mediumZoom(images)
    }

    // Gallery
    var images = document.querySelectorAll('.kg-gallery-image img');
        images.forEach(function (image) {
            var container = image.closest('.kg-gallery-image');
            var width = image.attributes.width.value;
            var height = image.attributes.height.value;
            var ratio = width / height;
            container.style.flex = ratio + ' 1 0%';
        });
})

//Ghost finder
new GhostFinder({
    input: '#searchInput',
    showResult: '.search-result',
    contentApiKey: window.contentApiKey,
    resultTemplate: `<p>Result matches: ##resultCount</p><ul class="search-results-wrapper">
    ##results
</ul>`,
    singleResultTemplate: `<li class="single-result">
        <h4><a href="##url">##title</a><h4>
    </li>`
})
=======
    })

    ///////////////////////////////// 9. Menu item active ///////////////////////////////
    var url = window.location.href
    url = url.substring(
        0,
        url.indexOf('#') == -1 ? url.length : url.indexOf('#')
    )
    url = url.substring(
        0,
        url.indexOf('?') == -1 ? url.length : url.indexOf('?')
    )
    url = url.substr(url.lastIndexOf('/') + 1)
    if (url == '') {
        url = 'index.html'
    }
    $('.mainmenu-list li').each(function() {
        var href = $(this)
            .find('a')
            .attr('href')
        if (url == href) {
            $(this)
                .addClass('active')
                .parents('li')
                .addClass('active')
                .siblings()
                .removeClass('active')
        }
    })

    ///////////////////////////////// 10. Google Map ///////////////////////////////
    var icon =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAxCAYAAACoJ+s+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOTQxQUZGMDZDRkQxMUU3QkIxM0FFMDE3MzEyMDdBQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOTQxQUZGMTZDRkQxMUU3QkIxM0FFMDE3MzEyMDdBQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5NDFBRkVFNkNGRDExRTdCQjEzQUUwMTczMTIwN0FBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5NDFBRkVGNkNGRDExRTdCQjEzQUUwMTczMTIwN0FBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yEnBUgAAA5tJREFUeNrEmU1ME0EUgN92awlSEEQqUf5FFIiC0Yh60JOYeDIe9eDBiz/xJDHRxATjkZOCiQcNR8+aeBajiSKBgBoERFvkJyLUCt0iLYX1DW7NsmnnZzu7vuS7bGanX2dnZt+8VXRdh1QoigKCkYfsQsoQn3EtgcwgQWRBtEOzz78LKTijDrmLDCBJ0gWFEaQTOSEiuMFJQHAP8hRZY0hl4iNyxglB8tyvG49Ol8AzZJssQRXpliRm5gtSK0PwkQNyKSaNxWVb8KqDcineIl47gtXIkguChJt2BJ+4JEdYNC8aq6CSZqMmG+9nY/Uyw5tXATleH5Tkl4CqqhCOhkGLxyAZ+yayP7cjd9Jt1OkEO5A2HrGG8ibQA60wp2/cNfKVGGyNvoaBsRewEpvgEZxCKv76sQW/GnMw8/utoBbq91+EKaWK+qsFigYLow9gdnaQR/Iw0mcV9Fga1bPkfP5KqG26xpQjsaj7YVNdGxQVN/AInkx30Sp4lPVYD+49DbMQ4J5cSdzraxourN/LiEM8gs20HshiCOYeF01QYBqnV2UJc8T38QjWULOF8mawG4HSI6wmFTyCZdQR9FfZFtR85awmJJ8sZAkW0npYU/22BZfWc1tm5LMEt9Du9qxqtgU3Q4ynmcoSXKbdHddCtgX9iUmeZlGWYIR29+jkoG3Bue+9PM0iLMFp6ggmE1C9/EpYbge+yUJzQVazkHGcoAp+oG66mAD0f3oO2+EHt5yKvxka7uZJHoZ4tpl+Vi8JbQLGhzqhTGfPR5I0JMc64Gd4mOe/9KU9EFmShZ1GZsGVZjViNrMaOAXzevHGBaEsQTFmM4PjPRCPBnkHuwV5x5PNvM/02qHlg4GCAHhUL0Si87C4rInmg2HysiFzkOfgftvFbDrFQ5GUv+4/CB4TPZP0uCg3Yj5eWAU9GeZEF7gX9w1RdqnBPPeRcRdGL2JUyEB0BJPG4cnpuIfEuKtJafIzJ0fxV7r0TrQ2c95BwVsyikdkdfU6IEd28VxZ9cGWLIqWmTgnu8LaJVHuJa2sYleQHEYmJMitII1O1ahbJQi2O1lEJ/E4CzlSRM9xWjDPeHeKysVZVQtZgiSajNOfiOANN76TmOOK4GcHxW1B3vlIPjcUiX4KkyVI3tVvKHK/kQOincoUJFFqVGStcqvIWTsdyhYksZsUDiyCl+x25oRgqvhIzpekunQ5m454PkPYDdUoBKxkK2iOPwIMAA3fAShxN8TYAAAAAElFTkSuQmCC'
    var myCenter = new google.maps.LatLng(23.890699, 89.10994)
    function initialize() {
        var mapProp = {
            center: myCenter,
            scrollwheel: false,
            zoom: 10,
            zoomControl: false,
            mapTypeControl: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: 'administrative',
                    elementType: 'labels.text.fill',
                    stylers: [
                        {
                            color: '#444444',
                        },
                    ],
                },
                {
                    featureType: 'landscape',
                    elementType: 'all',
                    stylers: [
                        {
                            color: '#f2f2f2',
                        },
                    ],
                },
                {
                    featureType: 'poi',
                    elementType: 'all',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
                {
                    featureType: 'road',
                    elementType: 'all',
                    stylers: [
                        {
                            saturation: -100,
                        },
                        {
                            lightness: 45,
                        },
                    ],
                },
                {
                    featureType: 'road.highway',
                    elementType: 'all',
                    stylers: [
                        {
                            visibility: 'simplified',
                        },
                    ],
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'labels.icon',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
                {
                    featureType: 'transit',
                    elementType: 'all',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
                {
                    featureType: 'water',
                    elementType: 'all',
                    stylers: [
                        {
                            color: '#737373',
                        },
                        {
                            visibility: 'on',
                        },
                    ],
                },
            ],
        }
        var map = new google.maps.Map(document.querySelector('.map'), mapProp)
        var image = icon
        var marker = new google.maps.Marker({
            position: myCenter,
            icon: image,
        })
        marker.setMap(map)
    }
    if ($('.map').length) {
        // only load google map when #GoogleMap div will appear
        google.maps.event.addDomListener(window, 'load', initialize)
    }

    //////////////////////////// 11. Medium Zoom ////////////////////////////////////
    const images = [...document.querySelectorAll('.single-post-content img')]

    mediumZoom(images)
    //////////////////////////// 12. Fitvids JS ////////////////////////////////////
    $('body').fitVids()
})
>>>>>>> 8912585b8416651d09a267e34066b2ad651c2bed
