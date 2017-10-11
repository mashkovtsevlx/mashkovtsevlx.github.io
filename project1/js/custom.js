/*jslint browser: true*/
/*global $, jQuery, alert*/
function fullpage_custom() {
    "use strict";
    var viewport_width = $(document).width(),
        three_main_height = viewport_width * 2.15;
    $('.three_main').css('height', three_main_height);
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '.service',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: false,
        sectionsColor: ['#ccc', '#272822', '#272822', '#e4f4f3'],
        paddingTop: '',
        paddingBottom: '',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {
            type: 'reveal',
            percentage: 62,
            property: 'translate'
        },

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,
        //events
        onLeave: function (index, nextIndex, direction) {},
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
        afterResize: function () {},
        afterResponsive: function (isResponsive) {},
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });
    if ((window.location.href.lastIndexOf("index.html") !== window.location.href.length - 10) && (window.location.href.lastIndexOf("index.html#firstPage") !== window.location.href.length - 20)) {
        $('#preloader').css('display', 'none');
    }
    $(".comments_back_button").bind('mouseenter', function () {
        $(".comments_back_button").attr('src', 'img/s4/back_h.png');
    });
    $(".comments_back_button").bind('mouseleave', function () {
        $(".comments_back_button").attr('src', 'img/s4/back.png');
    });
    $(".comments_forward_button").bind('mouseenter', function () {
        $(".comments_forward_button").attr('src', 'img/s4/forward_h.png');
    });
    $(".comments_forward_button").bind('mouseleave', function () {
        $(".comments_forward_button").attr('src', 'img/s4/forward.png');
    });
}
$(document).ready(function () {
    "use strict";
    fullpage_custom();
});

function preloadimage() {
    "use strict";
    var offset = $(".logo_hrep").offset(),
        width = $(".logo_hrep").width(),
        height = $(".logo_hrep").height();
    $("#preloader_img").animate({
        "position": "fixed",
        "left": offset.left,
        "top": offset.top,
        "width": width,
        "height": height
    }, 2000);
}

function show_dev() {
    "use strict";
    $(".service-dev").animate({
        width: 'toggle'
    }, 200);
}

function close_dev() {
    "use strict";
    $(".service-dev").animate({
        width: 'toggle'
    }, 200);
}

function preinite() {
    "use strict";
    setTimeout(preloadimage, 2000);
    setTimeout(function () {
        $("#preloader").fadeOut(1000);
        $(".logo_hrep").css('opacity', '1');
    }, 4000);
    setTimeout(function () {
        $("#preloader_background").fadeOut(2000);
    }, 2000);
}

function service_change(elem, sour, cont) {
    "use strict";
    $(elem).find('.row .col-xs-4 img').attr('src', cont);
    $(elem).find('.row .col-xs-12 img').attr('src', 'img/s2/more_h.png');
    $(elem).find('.main').css('color', 'white');
    $(elem).mouseleave(function () {
        $(this).find('.row .col-xs-4 img').attr('src', sour);
        $(elem).find('.main').css('color', '#bfe5e2');
        $(elem).find('.row .col-xs-12 img').attr('src', 'img/s2/more.png');
    });
}

function stages_width() {
    "use strict";
    preinite();
    var viewport_width = $(document).width(), three_main_height, three_main_text;
    if (viewport_width >= 1200) {
        three_main_height = viewport_width * 2.15;
        three_main_text = three_main_height / 1761;
        // Окно 1200
        $('.three_main').css('height', three_main_height);
        $('.three_main').css('padding-top', three_main_height / 90);
        // Этапы разработки 1200
        $('.three_main .three_main_title').css('margin-bottom', three_main_height / 70);
        $('.three_main .three_main_title').css('font-size', three_main_height / 700 + 'rem');
        // Основной текст 1200
        $('.three_main_item_text').css('font-size', three_main_text + 'rem');
        $('.three_main_item .three_main_item_text').css('width', three_main_height / 8);
        $('.three_main_item .three_main_item_text').css('padding-left', three_main_height / 273);
        // Номер 1200
        $('.three_main_item img').css('width', three_main_height / 60);
        // Этап 1200
        $('.three_main_item:eq(1)').css('margin-top', three_main_height / 46);
        $('.three_main_item:eq(2)').css('margin-left', three_main_height / 90);
        $('.three_main_item:eq(2)').css('margin-top', three_main_height / 30);
        $('.three_main_item:eq(3)').css('margin-top', three_main_height / 15);
        $('.three_main_item:eq(4)').css('margin-top', three_main_height / 27);
        $('.three_main_item:eq(5)').css('margin-top', three_main_height / 9);
        $('.three_main_item:eq(5)').css('margin-left', three_main_height / 15);
        $('.three_main_item_text:eq(5)').css('padding-right', three_main_height / 20);
        $('.three_main_item:eq(6)').css('margin-top', '0');
        $('.three_main_item:eq(7)').css('margin-top', '0');
        $('.three_main_item:eq(8)').css('margin-top', three_main_height / 80);
        $('.three_main_item:eq(9)').css('margin-top', three_main_height / 30);
        $('.three_main_item:eq(10)').css('margin-top', three_main_height / 30);
        $('.three_main_item_text:eq(10)').css('width', three_main_height / 6);
        $('.three_main_item:eq(11)').css('margin-top', three_main_height / 15);
        $('.three_main_item:eq(12)').css('margin-top', three_main_height / 15);
        $('.three_main_item_text:eq(12)').css('width', three_main_height / 10);
        $('.three_main_item:eq(13)').css('margin-top', three_main_height / 40);
        $('.three_main_item_text:eq(13)').css('padding-right', three_main_height / 90);
    } else if (viewport_width >= 992) {
        three_main_height = viewport_width * 6.5;
        three_main_text = three_main_height / 3000;
        // Окно 992
        $('.three_main').css('height', three_main_height);
        $('.three_main').css('padding-top', three_main_height / 120);
        // Этапы разработки 992
        $('.three_main .three_main_title').css('margin-bottom', three_main_height / 230);
        $('.three_main .three_main_title').css('font-size', three_main_height / 1000 + 'rem');
        // Основной текст 992
        $('.three_main_item_text').css('font-size', three_main_text + 'rem');
        $('.three_main_item .three_main_item_text').css('width', three_main_height / 15);
        $('.three_main_item .three_main_item_text').css('padding-left', three_main_height / 273);
        // Номер 992
        $('.three_main_item img').css('width', three_main_height / 120);
        // Этап 992
        $('.three_main_item:eq(0)').css('margin-top', three_main_height / 300);
        $('.three_main_item:eq(0)').css('padding-left', three_main_height / 150);
        $('.three_main_item:eq(1)').css('margin-top', three_main_height / 26);
        $('.three_main_item:eq(2)').css('margin-top', three_main_height / 23);
        $('.three_main_item:eq(3)').css('margin-top', three_main_height / 30);
        $('.three_main_item:eq(3)').css('margin-left', three_main_height / 80);
        $('.three_main_item:eq(4)').css('margin-top', three_main_height / 38);
        $('.three_main_item:eq(5)').css('margin-top', three_main_height / 40);
        $('.three_main_item:eq(6)').css('margin-top', three_main_height / 25);
        $('.three_main_item:eq(7)').css('margin-top', three_main_height / 25);
        $('.three_main_item:eq(8)').css('margin-top', three_main_height / 35);
        $('.three_main_item:eq(9)').css('margin-top', three_main_height / 25);
        $('.three_main_item:eq(10)').css('margin-top', three_main_height / 50);
        $('.three_main_item:eq(11)').css('margin-top', three_main_height / 30);
        $('.three_main_item:eq(12)').css('margin-top', three_main_height / 35);
        $('.three_main_item:eq(13)').css('margin-top', three_main_height / 40);
    } else {
        three_main_height = viewport_width * 12;
        three_main_text = three_main_height / 3000;
        // Окно 992
        $('.three_main').css('height', three_main_height);
        $('.three_main').css('padding-top', three_main_height / 120);
        // Этапы разработки 992
        $('.three_main .three_main_title').css('margin-bottom', three_main_height / 230);
        $('.three_main .three_main_title').css('font-size', three_main_height / 2000 + 'rem');
        // Основной текст 992
        $('.three_main_item_text').css('font-size', three_main_text + 'rem');
        $('.three_main_item .three_main_item_text').css('width', three_main_height / 16);
        $('.three_main_item .three_main_item_text').css('padding-left', three_main_height / 500);
        // Номер 992
        $('.three_main_item img').css('width', three_main_height / 120);
        $('.three_main_item_text:eq(0)').html('Определение целей сайта и его позиционирование');
        $('.three_main_item_text:eq(1)').html('Составление технического задания');
        $('.three_main_item_text:eq(2)').html('Разработка макета');
        $('.three_main_item_text:eq(3)').html('Написание контента');
        $('.three_main_item_text:eq(4)').html('Правки маркетолога');
        $('.three_main_item_text:eq(5)').html('Верстка');
        $('.three_main_item_text:eq(6)').html('Программирование веб-ресурса');
        $('.three_main_item_text:eq(7)').html('Тестирование');
        $('.three_main_item_text:eq(8)').html('Размещение сайта в интернете');
        $('.three_main_item_text:eq(9)').html('SEO-оптимизация');
        $('.three_main_item_text:eq(10)').html('Продвижение сайта');
        $('.three_main_item_text:eq(11)').html('Контекстная реклама');
        $('.three_main_item_text:eq(12)').html('CMM продвижение');
        $('.three_main_item_text:eq(13)').html('Поддержка сайта');
        // Этап 992
        $('.three_main_item').css('padding-left', three_main_height / 150);
        $('.three_main_item:eq(0)').css('margin-top', three_main_height / 80);
        $('.three_main_item:eq(1)').css('margin-top', three_main_height / 15);
        $('.three_main_item:eq(2)').css('margin-top', three_main_height / 12.5);
        $('.three_main_item:eq(3)').css('margin-top', three_main_height / 16);
        $('.three_main_item:eq(4)').css('margin-top', three_main_height / 15.5);
        $('.three_main_item:eq(5)').css('margin-top', three_main_height / 16);
        $('.three_main_item:eq(6)').css('margin-top', three_main_height / 16);
        $('.three_main_item:eq(7)').css('margin-top', three_main_height / 19);
        $('.three_main_item:eq(8)').css('margin-top', three_main_height / 16);
        $('.three_main_item:eq(9)').css('margin-top', three_main_height / 18);
        $('.three_main_item:eq(10)').css('margin-top', three_main_height / 17);
        $('.three_main_item:eq(11)').css('margin-top', three_main_height / 19);
        $('.three_main_item:eq(12)').css('margin-top', three_main_height / 20);
        $('.three_main_item:eq(13)').css('margin-top', three_main_height / 18);
        
    }
    if ($(document).width() >= 992) {
        $('.reviews_general').css('height', $('.reviews_img').height());
    }
    $('.fourth_hovered').css('width', $('.fourth_main_img').width());
    $('.fourth_hovered').css('height', $('.fourth_main_img').height());
    $('.fourth_hovered a').css('width', $('.fourth_main_img').width());
    $('.fourth_hovered a').css('height', $('.fourth_main_img').height());

}
$(window).on('load', stages_width);
$(window).on('resize', stages_width);
function toogle_client(turnon, turnoff) {
    "use strict";
    $(turnon).animate({width : 'toggle'}, 350);
    $(turnoff).fadeOut(50);
}