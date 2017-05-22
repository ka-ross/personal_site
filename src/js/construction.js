document.addEventListener("DOMContentLoaded", function () {
loadUp();

function loadUp(){
        //window.scrollTo(0,0);
        var tippyTop = document.getElementsByClassName('content')[0];
        tippyTop.scrollTop =0;
        // Animation for initial load of screen.
        $('#who').animate({'opacity':'1'},{duration: 2500, queue:false});
        $('#who').animate( {'top':'10%'},{duration: 500, queue:false});
        $('#who').animate( {'letter-spacing':'4px'},{duration: 1500, queue:false});
        //$('.who').animate({'margin-top':'0%'}, 1500);
        $('#sass').animate({'opacity':'1'},{duration: 3000, queue:false});
        $('#sass').animate({'margin-top':'0%'},{duration: 1800, queue:false});
        $('#info').animate({'opacity':'1'},{duration: 3000, queue:false});
        $('#info').animate({'margin-top':'1%'}, {duration: 1800, queue:false});
    }
});