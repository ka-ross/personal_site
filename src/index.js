document.addEventListener("DOMContentLoaded", function () {
 loadUp();

 function loadUp(){
        $('.name').animate({'opacity':'1'},{duration: 2500, queue:false});
        $('.name').animate( {'margin-top':'10%'},{duration: 500, queue:false});
        //$('.name').animate({'margin-top':'0%'}, 1500);
        $('.Desc').animate({'opacity':'1'},{duration: 3000, queue:false});
        $('.Desc').animate({'margin-top':'0%'},{duration: 1000, queue:false});
        $('.about').animate({'margin-top':'3%'}, {duration: 1800, queue:false});
        $('.resume').animate({'margin-top':'3%'}, {duration: 2000, queue:false});
        $('.projects').animate({'margin-top':'3%'}, {duration: 2300, queue:false});
        $('ul').animate({'opacity':'1'}, {duration: 3000, queue:false});
        $('ul').animate({'margin-top':'3%'}, {duration: 2100, queue:false});
        //$('#subdesc').animate({'opacity':'100'}, 5000); 
}
        	
});