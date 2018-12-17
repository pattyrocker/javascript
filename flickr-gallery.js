
function flickr(user){
	$.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id='+user+'&format=json&jsoncallback=?', function(data){
		for(i=0; i<12; i++){
			var image = data.items[i].media.m.replace(/(_m.jpg)/g, '_z.jpg');
			$("<img />").attr("src", data.items[i].media.m).appendTo("#flickr").wrap("<a href='" + image + "' title='" + data.items[i].title + "' rel='shadowbox[gallery]' class='item'><\/a>");
		}
		Shadowbox.init();
	});
}

$(document).ready(function(){
	flickr('95607642@N04');
});
