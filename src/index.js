document.addEventListener("DOMContentLoaded", function () {
//document.body.scrollTop = document.documentElement.scrollTop = 0;
var tippyTop = document.getElementsByClassName('content')[0];
console.log(tippyTop);
window.scrollTo(0,0);
var aboutShow=0,
    resShow=0,
    projShow=0;

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
        $('ul#homeList ').animate({'opacity':'1'}, {duration: 3000, queue:false});
        $('ul#homeList ').animate({'margin-top':'3%'}, {duration: 2100, queue:false});
        $('div#jobeven.row-a').hide("slide", { direction: "left" }, 1);
        //change color on hover.
        $('a#subdesc li').mouseover( function() {
                $(this).css("color", "#ACA39A");
        });
        $('a#subdesc li').mouseout( function() {
                $(this).css("color", "#EDEBEB");
        });
        
        //$("div#resume-row.row-a div#jobdate div#job-current").click( function(){
        //    $('div#jobeven.row-a').hide("slide", { direction: "left" }, 1800);
        //});
        $(window).scroll(function() {
            //variables for location of 'About'
           var about_hT = $('#startAbout').offset().top,
               about_hH = $('#startAbout').outerHeight(),
               about_wH = $(window).height(),
               about_wS = $(this).scrollTop();
            var res_hT = $('#startResume').offset().top,
               res_hH = $('#startResume').outerHeight(),
               res_wH = $(window).height(),
               res_wS = $(this).scrollTop();
               
           if (about_wS > (about_hT+about_hH-about_wH)){
                //alert('ABOUT in view!');
                if (aboutShow == 0){
                    $('div.aboutContent').fadeIn(2500);
                }
                aboutShow = 1;
             }
            if (res_wS > (res_hT+res_hH-res_wH)){                
                
                if (resShow == 0){
                    $('div#resumeContent').fadeIn(2500);
                }
                resShow = 1;
               

           }
        });

        //load About
        
}

 function showContent(content) {
    $(content).animate({'opacity':'1'},{duration: 2000, queue:false});
 }

 function listenForClicks() {     
        $(document).on('click', 'a[href^="#"]', function(e){
            // target element id
            var id = $(this).attr('href');
            console.log(id);
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
            
        });
 }

        	
});