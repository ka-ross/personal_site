document.addEventListener("DOMContentLoaded", function () {
//document.body.scrollTop = document.documentElement.scrollTop = 0;
var tippyTop = document.getElementsByClassName('content')[0];
console.log(tippyTop);
window.scrollTo(0,0);

loadUp();
listenForClicks();
/*
$(document).on('click', 'a[href^="#"]', function(e){
        linkClick(e);
});*/
/*
document.getElementsByClassName('about')[0].addEventListener("click", () => {
     linkClick();
});
*/

 function loadUp(){
        //window.scrollTo(0,0);
        var tippyTop = document.getElementsByClassName('content')[0];
        tippyTop.scrollTop =0;
        // Animation for initial load of screen.
        $('.name').animate({'opacity':'1'},{duration: 2500, queue:false});
        $('.name').animate( {'top':'10%'},{duration: 500, queue:false});
        $('.name').animate( {'letter-spacing':'6px'},{duration: 1500, queue:false});
        //$('.name').animate({'margin-top':'0%'}, 1500);
        $('.Desc').animate({'opacity':'1'},{duration: 3000, queue:false});
        $('.Desc').animate({'margin-top':'0%'},{duration: 1800, queue:false});
        $('.about').animate({'margin-top':'3%'}, {duration: 1800, queue:false});
        $('.resume').animate({'margin-top':'3%'}, {duration: 2000, queue:false});
        $('.projects').animate({'margin-top':'3%'}, {duration: 2300, queue:false});
        $('ul').animate({'opacity':'1'}, {duration: 3000, queue:false});
        $('ul').animate({'margin-top':'3%'}, {duration: 2100, queue:false});
        
        //change color on hover.
        $('li').mouseover( function() {
                $(this).css("color", "#ACA39A");
        });
        $('li').mouseout( function() {
                $(this).css("color", "#EDEBEB");
        });
        //$('ul').animate({'letter-spacing':'4px'},{duration: 2500, queue:false});
        //$('#subdesc').animate({'opacity':'100'}, 5000); 
        /*
        $('.about').click( function () {
                $('html, body').animate({scrollTop: $("#myDiv").offset().top}, 2000);
        });*/

        

        //load About
        
}

 function listenForClicks() {     
        $(document).on('click', 'a[href^="#"]', function(e){
            // target element id
            var id = $(this).attr('href');

            // target element
            var $id = $(id);
            if ($id.length === 0) {
                return;
            }

            // prevent standard hash navigation (avoid blinking in IE)
            e.preventDefault();

            // top position relative to the document
            var pos = $id.offset().top;

            // animated top scrolling
            $('body, html').animate({scrollTop: pos});
            $('.content').offset().top;
            $('div.aboutContent').animate({'opacity':'1'},{duration: 2500, queue:false});
        });
 }

        	
});