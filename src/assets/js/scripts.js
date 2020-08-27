/*
    Theme Name: Delas - Responsive Ghost Blogging Theme
    Author: ElectronThemes
    Author URI: http://electronthemes.com
    Version: 1.0.0
*/
/**---------------------------------------*/
/**           Table Of contents          **/
/**---------------------------------------*/
/**
 * 0. Preloader
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
    $('body').imagesLoaded(function() {
        $('.preloader-wave').fadeOut()
        $('#preloader')
            .delay(200)
            .fadeOut('slow')
            .remove()
    })

    ////////////////////////// 1. Animation JS ////////////////////////
    if ($('[data-aos]').length) {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
        })
    }

    /////////////////////////// 2. Post Grid /////////////////////////

    // Homepage news grid
    var $grid = $('.news-grid').imagesLoaded(function() {
        $grid.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            },
        })
    })

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
})

$(document).ready(function() {
    'use strict'

    /////////////////////////// 3. Sticky Menu /////////////////////////
    var header = $('.header-area'),
        $window = $(window)
    $window.on('scroll', function() {
        if ($window.scrollTop() > 200) {
            header.addClass('sticky-menu')
        } else {
            header.removeClass('sticky-menu')
        }
    })

    ////////////////////////// 4. Scroll Top ////////////////////////
    $('body').prepend(
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
    })

    ////////////////////////// 5. OWL Carousel Sliders ////////////////////////
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
        margin: 30,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
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
        nav: true,
        navText: [
            '<img src="assets/img/icon/long-arrow-right.png" class="fa fa-rotate-180" alt="Prev">',
            '<img src="assets/img/icon/long-arrow-right.png" alt="Next">',
        ],
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 5,
            },
        },
    })

    //FOOTER Tag Slider
    $('.footer-tag').owlCarousel({
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
    //FLIP JS
    $('.card').flip({
        trigger: 'hover',
    })
    // HERO PAGE SLIDE
    $('.post-page-slide').owlCarousel({
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

    ////////////////////////////////// 6. Top Author Hover ////////////////////////////////
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
    ////////////////////////////////// 7. Menu JS ////////////////////////////////

    $('.menubars').on('click', function(e) {
        e.preventDefault()
        $('.mainmenu-list').toggleClass('active hide-menu')
    })
    $('.close-menu').on('click', function() {
        $('.mainmenu-list')
            .removeClass('active')
            .addClass('hide-menu')
    })

    ////////////////////////////////// 8. Search form ////////////////////////////////
    $('.search-trigger').click(function() {
        $('.expanded-search')
            .addClass('active')
        $('body').addClass('overflow-hidden')
    })
    $('.search-close-trigger').click(function() {
        $(this)
            .parents('.expanded-search')
            .removeClass('active')
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