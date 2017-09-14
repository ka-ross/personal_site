document.addEventListener("DOMContentLoaded", function () {
//$('ul').slideUp(1);
console.log("hello");
var token = '4153047403.dae6820.aef13009781a4dfbb87bfab01c484dcc', // learn how to obtain it below
    userid = 4153047403, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 4, // how much photos do you want to get
    pic_likes = 0, //;
    pic_urls = [] , 
    pic_links = [],
    pic_captions = [];
 
$.ajax({
	
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
		console.log("Success.");
			console.log(data);
			for( x in data.data ){
				pic_urls.push(data.data[x].images.standard_resolution.url);
				pic_links.push(data.data[x].link);
				pic_captions.push(data.data[x].caption.text);
				/*if(data.data[x].likes.count > pic_likes){
					pic_likes = data.data[x].likes.count;
					pic_url = data.data[x].images.low_resolution.url;
				}*/
				//$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); 
				
				//$('ul').append('<p>' + data.data[x].likes.count + '</p>');
				// data.data[x].images.low_resolution.url - URL of image, 306х306
				// data.data[x].images.thumbnail.url - URL of image 150х150
				// data.data[x].images.standard_resolution.url - URL of image 612х612
				// data.data[x].link - Instagram post URL 
			}
			for(y in pic_urls){

				$('ul').append('<li><a href="'+pic_links[y]+'"><img src="'+pic_urls[y]+'"><span class="text-content"><span>'+pic_captions[y]+'</span></span></a></li>');
				//var pic_to_show = "li#"+pic_ids[y];
				//console.log(pic_to_show);
				$( 'ul' ).animate({'opacity':'1'},{duration: 2500, queue:false});
			}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}

});
//$('ul').slideDown("slow");
//$('ul').animate({'opacity':'1'},{duration: 2500, queue:false});

});