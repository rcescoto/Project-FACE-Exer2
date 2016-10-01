$(document).ready(function(e) {
    let minutes = 1;
	$.ajax({
        type: 'GET',
        url: 'http://acssuplb.github.io/json/tweets.json',
        data: {'name': name},
        async: false,
        dataType: 'json',
        success: function (data) {
            $.each(data, function(index, tweet){
                minutes = minutes +parseInt(Math.floor(Math.random() * 5) + 0)
                let likes = parseInt(Math.floor(Math.random() * 1000) + 1);
                let retweets = parseInt(Math.floor(Math.random() * 1000) + 1)
                $('#feed-Timeline').append(
                    '<div class="feed-Entry"><img class="feed-Icon" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_'+parseInt(Math.floor(Math.random() * 6) + 0) + '_bigger.png"><div class="feed-Tweet"><div class="feed-Tweet-Info"><span class="feed-Name">'+ tweet.name +'</span><span class="feed-Handle">@'+tweet.handler+'</span><span class="bullet">·</span><span class="feed-Time">'+ minutes +'m</span></div><div class="feed-content"><span>'+tweet.message+'</span></div><div class="feed-Actions"><ul><li class="grey-text text-darken-1"><i class="fa fa-reply" aria-hidden="true"></i></li><li class="green-text text-accent-4"><i class="fa fa-retweet" aria-hidden="true"></i><span>'+retweets+ '</span></li><li class="red-text text-accent-4"><i class="fa fa-heart" aria-hidden="true"></i><span>'+likes+'</span></li><li class="grey-text text-accent-4"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></li></ul></div></div></div>'
                );
            });
        }
    });
})
