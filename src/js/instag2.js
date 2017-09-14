document.addEventListener("DOMContentLoaded", function () {

console.log("hello");
var token = '4153047403.dae6820.aef13009781a4dfbb87bfab01c484dcc', // learn how to obtain it below
    userid = 4153047403, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 4; // how much photos do you want to get
 
$.ajax({
	
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
		console.log("Success.");
			console.log(data);
			for( x in data.data ){
				$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); 
				// data.data[x].images.low_resolution.url - URL of image, 306х306
				// data.data[x].images.thumbnail.url - URL of image 150х150
				// data.data[x].images.standard_resolution.url - URL of image 612х612
				// data.data[x].link - Instagram post URL 
			}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});

});