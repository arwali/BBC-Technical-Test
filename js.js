
	function loadpg(loadurl)
	{
	 $.getJSON( loadurl, function( json ) {
		var content = '';
		$( json.body ).each(function( index ) {
			$(document).attr("title", 'BBC News: ' + json.title);
			if(json.body[index].type == "heading")
			{
				$("#heading").html(json.body[index].model['text']);
			}
			else if(json.body[index].type == "paragraph")
			{
				content = content + '<div class="paragraph">' + json.body[index].model["text"] +'</div>';
			}
			else if(json.body[index].type == "image")
			{
				content = content + '<div class="image"><img src="' + json.body[index].model["url"] + '" alt="' + json.body[index].model["altText"] + '"></div>';
			}
			else if(json.body[index].type == "list")
			{
				content = content + '<div class="paragraph"><ul>';
				$( json.body[index].model["items"] ).each(function( indexli ) {
					content = content + '<li>'+ json.body[index].model["items"][indexli] + '</li>';
				});
				content = content + '</ul></div>';
			}


			$("#content").html(content);

		});
	 }).fail(function() {
		console.log( "error" );
	  });	
	}
