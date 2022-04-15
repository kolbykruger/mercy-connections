//Impression
document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller()

    var tween1 = gsap.to('.impression-images-layer-vector', {
        rotate: 90,
        yPercent: -8,
    })
    // var tween2 = gsap.to('.impression-images-layer-2', {
    //     yPercent: 16,
    // })

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#impression',
        duration: '200%',
        triggerHook: '1',
    })
        .setTween(tween1)
        .addTo(controller)
    // var scene2 = new ScrollMagic.Scene({
    //     triggerElement: '#impression',
    //     duration: '200%',
    // })
    //     .setTween(tween2)
    //     .addTo(controller)
})

//Annual Event
document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller()

    var tween1 = gsap.to('.annual-event-images-layer-vector', {
        rotate: -45,
        scale: 1.1,
    })
    // var tween2 = gsap.to('.impression-images-layer-2', {
    //     yPercent: 16,
    // })

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#annual-event',
        duration: '200%',
        triggerHook: '1',
    })
        .setTween(tween1)
        .addTo(controller)
    // var scene2 = new ScrollMagic.Scene({
    //     triggerElement: '#impression',
    //     duration: '200%',
    // })
    //     .setTween(tween2)
    //     .addTo(controller)
})

//Section Scroll Animations (requires scrollmagic)
document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller()
    var elems = document.querySelectorAll('section, footer')

    for (var i = 0; i < elems.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: elems[i],
            triggerHook: 0.85,
            reverse: true,
        })
            .setClassToggle(elems[i], 'section-active')
            .addTo(controller)
    }
})

//Blog Categories (if a selectbox)
let blogCategories = {
    elem: document.querySelector('select#blog_categories'),
    init: function () {
        if (this.elem) {
            this.elem.addEventListener('change', function (e) {
                window.location.href = window.location.href.split('?')[0] + '?category=' + e.target.value
            })
        }
    },
}.init()

//Populate Blog Category select
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=')

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1])
        }
    }
    return false
}
var blogCat = getUrlParameter('category')
if (blogCat) {
    $('#blog_categories').val(blogCat)
} else {
    $('#blog_categories').val($('#blog_categories option:first').val())
}

//Responsive iFrame
$('iframe[src*="youtube"],iframe[src*="vimeo"]').wrap('<div class="responsive-iframe"/>')

//Accordion
document.addEventListener('DOMContentLoaded', function () {
    let accordion = document.querySelectorAll('.accordion-title')

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            let panel = this.nextElementSibling

            if (panel.style.maxHeight) {
                this.classList.remove('open')
                panel.style.maxHeight = null
                panel.setAttribute('aria-hidden', true)
                panel.setAttribute('aria-expanded', false)
            } else {
                this.classList.add('open')
                panel.style.maxHeight = panel.scrollHeight + 'px'
                panel.setAttribute('aria-hidden', false)
                panel.setAttribute('aria-expanded', true)
            }
        })
    }
})

$('.carousel .group').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    selectedAttraction: 0.01,
    friction: 0.2,
})

$('.slideshow .container').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 5000,
})

$('.stories .container').flickity({
    cellSelector: '.group',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: true,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: false,
    selectedAttraction: 0.01,
    friction: 0.2,
})

let groupCells = 1
statisticsResponsiveChecks()
window.addEventListener('resize', function () {
    statisticsResponsiveChecks()
})

function statisticsResponsiveChecks() {
    if (window.matchMedia('(max-width: 1600px)').matches) {
        groupCells = 2
    }
}

$('.statistics .group').flickity({
    cellSelector: '.statistics-item',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    groupCells: groupCells,
    prevNextButtons: true,
    pageDots: false,
    imagesLoaded: false,
    // autoPlay: 5000,
    selectedAttraction: 0.01,
    friction: 0.2,
})

//Universal Tables
$('table').wrap("<div class='universal-table'></div>")

//PDO Page loader
document.addEventListener('DOMContentLoaded', function () {
    let pdoElement = document.getElementById('pdopage')
    if (pdoElement) {
        let loadState = document.createElement('div')
        loadState.classList.add('pdo-loader')
        loadState.setAttribute('aria-hidden', true)
        //loadState.textContent = 'Loading';

        pdoElement.appendChild(loadState)

        if (pdoPage) {
            pdoPage.callbacks['before'] = function (config) {
                document.querySelector('.pdo-loader').classList.add('pdo-loading')
            }
            pdoPage.callbacks['after'] = function (config) {
                document.querySelector('.pdo-loader').classList.remove('pdo-loading')
            }
        }
    }
})
