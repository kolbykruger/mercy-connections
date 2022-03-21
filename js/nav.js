//Nav
//$( "ul.top .trigger" ).each(function(){$( this ).children('a:first').attr( "onclick", "return false" );});

// $('.nav .drop').each(function () {
//     if ($(this).find('li').length >= 8) {
//         $(this).addClass('column_nav')
//     }
// })

// var hoverTimeout
// $('.nav .trigger').hover(
//     function () {
//         clearTimeout(hoverTimeout)
//         $(this).addClass('open').find('.drop').attr('aria-hidden', 'true').attr('aria-expanded', 'false')
//         $('.trigger').not(this).removeClass('open')
//     },
//     function () {
//         var $self = $(this)
//         hoverTimeout = setTimeout(function () {
//             $self.removeClass('open').find('.drop').attr('aria-hidden', 'true').attr('aria-expanded', 'false')
//         }, 250)
//     }
// )

// $('.nav .trigger > a').focusin(function () {
//     var parent = $(this).parent()
//     parent.addClass('open').find('.drop').attr('aria-hidden', 'false').attr('aria-expanded', 'true')
//     $('.trigger').not(parent).removeClass('open')
// })

// $('.nav .drop a:last,.nav .drop input').focusout(function () {
//     var parent = $(this).parents().find('.trigger')
//     parent.removeClass('open').find('.drop').attr('aria-hidden', 'true').attr('aria-expanded', 'false')
// })

const menu = document.querySelector('.menu')
const menuPanelsNodeList = document.querySelectorAll('.menu .menu-panel')
const menuPanels = Array.from(menuPanelsNodeList)
const navTriggersNodeList = document.querySelectorAll('.nav .trigger a')
const navTriggers = Array.from(navTriggersNodeList)

// Menu panels
const menuPanelLinksNodeList = document.querySelectorAll('.menu .menu-panel a')
const menuPanelLinks = Array.from(menuPanelLinksNodeList)

// Menu exit
const menuExitButton = document.querySelector('.menu .menu-exit')

navTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const id = trigger.getAttribute('data-id')

        // check if it's already open
        // if it is, close it
        if (trigger.classList.contains('open')) {
            closeMenuPanels()
        } else {
            openMenuPanels({ trigger, id })
        }
    })
})

function closeMenuPanels() {
    navTriggers.forEach(trigger => {
        trigger.classList.remove('open')
    })
    menuPanels.forEach(panel => {
        panel.classList.remove('open')
    })
    menu.classList.remove('open')
    document.body.classList.remove('menu-open')
}
function openMenuPanels(props) {
    // remove open from all triggers
    navTriggers.forEach(trigger => {
        trigger.classList.remove('open')
    })
    // remove open from all menu panels
    menuPanels.forEach(panel => {
        panel.classList.remove('open')
    })

    // add props to appropriate elements
    props.trigger.classList.add('open')
    menuPanels[props.id].classList.add('open')
    menu.classList.add('open')
    document.body.classList.add('menu-open')
}

// Menu panel
menuPanelLinks.forEach(link => {
    const id = link.getAttribute('data-id')
    if (id) {
        link.addEventListener('mouseenter', () => {
            const menuPanelImagesNodeList = link.closest('.links').nextElementSibling.querySelectorAll('li')
            const menuPanelImages = Array.from(menuPanelImagesNodeList)

            if (menuPanelImages) {
                menuPanelImages.forEach(image => {
                    image.classList.remove('active')
                })

                const relatedImage = menuPanelImages[id]
                relatedImage.classList.add('active')
            }
        })
    }
})

// Menu exit
menuExitButton.addEventListener('click', () => {
    closeMenuPanels()
})
