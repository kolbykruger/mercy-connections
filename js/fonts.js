;(function () {
    WebFontConfig = {
        active: function () {
            sessionStorage.fonts = true
        },
        google: {
            families: ['Arimo:400,600,400i,600i', 'Vollkorn:400,500,600,400i,500i,600i', 'Permanent+Marker:400'],
        },
        timeout: 2000,
    }

    ;(function (d) {
        var wf = d.createElement('script'),
            s = d.scripts[0]
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
        wf.async = true
        s.parentNode.insertBefore(wf, s)
    })(document)
})()
