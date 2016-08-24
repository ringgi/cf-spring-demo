$(document).foundation();

/*
 * Init
 */
$(document).ready(function(){
    loadSoundFile();
});

/*
 * Not yet implemented
 */
function notYetImplemented() {
    $("#soon").show();
}

/*
 * Load images and activate Slick
 */
function readyToPlay() {

    //$.getJSON("http://api.flickr.com/services/feeds/groups_pool.gne?id=998875@N22âŒ©=en-us&amp;format=json&amp;jsoncallback=?", displayImages);
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
        tags: "Swisscom",
        format: "json"
    },
    displayImages);
    playSound();
}

function displayImages(data) {

    $.each(data.items, function(i,item){
        $("<img/>").attr("src", item.media.m).prependTo($("<div/>").attr("class", "hide").prependTo("#loadedImages"));
        if ( i == 10 ) return false;
    });
    activateSlick();
}

function activateSlick() {
    $('.slick-container').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        fade: true//,
        //centerMode: true
    });
}


/*
 * Sound
 */
var soundfile;
function loadSoundFile() {
    soundfile = "http://cf-demo.beta.swisscloud.io/audio/wenn.mp3";
}

function playSound() {

    //soundfile = "http://cf-demo.beta.swisscloud.io/audio/wenn.mp3";
    el = $("#soundElement");
    if (el.mp3) {
        if(el.mp3.paused) el.mp3.play();
        else el.mp3.pause();
    } else {
        el.mp3 = new Audio(soundfile);
        el.mp3.play();
    }
}

/*!
 * jQuery Sticky Footer 1.1
 * Corey Snyder
 * http://tangerineindustries.com
 *
 * Released under the MIT license
 *
 * Copyright 2013 Corey Snyder.
 *
 * Date: Thu Jan 22 2013 13:34:00 GMT-0630 (Eastern Daylight Time)
 * Modification for jquery 1.9+ Tue May 7 2013
 * Modification for non-jquery, removed all, now classic JS Wed Jun 12 2013
 */

window.onload = function() {
    stickyFooter();

    //you can either uncomment and allow the setInterval to auto correct the footer
    //or call stickyFooter() if you have major DOM changes
    //setInterval(checkForDOMChange, 1000);
};

//check for changes to the DOM
function checkForDOMChange() {
    stickyFooter();
}

//check for resize event if not IE 9 or greater
window.onresize = function() {
    stickyFooter();
};

//lets get the marginTop for the <footer>
function getCSS(element, property) {

    var elem = document.getElementsByTagName(element)[0];
    var css = null;

    if (elem.currentStyle) {
        css = elem.currentStyle[property];

    } else if (window.getComputedStyle) {
        css = document.defaultView.getComputedStyle(elem, null).
            getPropertyValue(property);
    }

    return css;

}

function stickyFooter() {

    if (document.getElementsByTagName("footer")[0].getAttribute("style") !== null) {
        document.getElementsByTagName("footer")[0].removeAttribute("style");
    }

    if (window.innerHeight != document.body.offsetHeight) {
        var offset = window.innerHeight - document.body.offsetHeight;
        var current = getCSS("footer", "margin-top");

        if (isNaN(current) === true) {
            document.getElementsByTagName("footer")[0].setAttribute("style","margin-top:0px;");
            current = 0;
        } else {
            current = parseInt(current);
        }

        if (current+offset > parseInt(getCSS("footer", "margin-top"))) {
            document.getElementsByTagName("footer")[0].setAttribute("style","margin-top:"+(current+offset)+"px;");
        }
    }
}

/*
 ! end sticky footer
 */