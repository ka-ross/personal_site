document.addEventListener("DOMContentLoaded", function () {
//document.body.scrollTop = document.documentElement.scrollTop = 0;
var tippyTop = document.getElementsByClassName('content')[0];
var resBot = document.getElementsByClassName('endResume')[0];
console.log(tippyTop);
window.scrollTo(0,0);
var aboutShow=0,
    resShow=0,
    projShow=0,
    serveitShow=0;

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
        console.log("works");
        $('div.aboutContent').fadeOut(1);
        $('div#ResumeContent').fadeOut(1);
        $('div#expandEarlierPos').fadeOut(1);
        $('div#expandEarlierPos').css("color", "#FFFFFF");
        $(".buttonUnfold").slideUp(1);
        $('.datebutton').animate({'margin-left':'40%'}, {duration: 10, queue:false});
        //$('a#expandlink').fadeOut(1);
        //$('a#expandlink').css("color", "#000000");
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
        $('div#earlierPos').slideUp("fast", function(){
                //animation complete
            });
        //$('ul#homeList ').animate({'margin-top':'3%'}, {duration: 2100, queue:false});
        //$('div#jobeven.row-a').hide("slide", { direction: "left" }, 1);
        //change color on hover.
        $('a#subdesc li').mouseover( function() {
                $(this).css("color", "#ACA39A");
                //$(this).show("slide", { direction: "left" }, 1000);
        });
        $('a#subdesc li').mouseout( function() {
                $(this).css("color", "#EDEBEB");
        });
        $('div#expandEarlierPos').hover( function(){
            $(this).css("color:", "#23527c");
        });
        $('div#expandEarlierPos').click( function(){
    
            $(this).slideUp("fast", function(){
                //animation complete
                $('div#earlierPos').slideDown(2000, function() {
                    $('.endResume').offset().top;
                });
            });

            $('.tline_three').animate({'opacity':'1'},{duration: 2500, queue:false});
            $('.tline_four').animate({'opacity':'1'},{duration: 2500, queue:false});
            
            //alert("read you loud and clear");
        });
        //$("div#resume-row.row-a div#jobdate div#job-current").click( function(){
        //    $('div#jobeven.row-a').hide("slide", { direction: "left" }, 1800);
        //});
        $(window).scroll(function() {
            //variables for location of 'About'
           var about_hT = $('i#startAbout').offset().top,
               about_hH = $('i#startAbout').outerHeight(),
               about_wH = $(window).height(),
               about_wS = $(this).scrollTop();
            var res_hT = $('i#startResume').offset().top,
               res_hH = $('i#startResume').outerHeight(),
               res_wH = $(window).height(),
               res_wS = $(this).scrollTop();
            /* Check if the Top of the screen has passed
             the calculated location of the top of the 
             selected HTML object, minus the height of
             the window.   */
           if (about_wS > (about_hT+about_hH-about_wH-200)){
                //alert('ABOUT in view!');
                if (aboutShow == 0){
                    $('div.aboutContent').fadeIn(2500);
                }
                aboutShow = 1;
             }
            if (res_wS > (res_hT+res_hH-res_wH-150)){                
                if (resShow == 0){
                    $('div#ResumeContent').fadeIn(3000);
                    $('div#expandEarlierPos').fadeIn(3200);
                    //$('a#expandlink').fadeIn(2700);
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

        $(".datebutton").click(function() {
            if(serveitShow === 0) {
                $(".buttonUnfold").slideDown(2000);
                $(this).animate({'margin-left':'0%'}, {duration: 2000, queue:true});
                
                serveitShow = 1;
            } else {
                $(this).animate({'margin-left':'40%'}, {duration: 2000, queue:true});
                $(".buttonUnfold").slideUp(2000);
                
                //$(this).css("padding-left", "30%");
                serveitShow = 0;
            }
        });

 }

        	
});