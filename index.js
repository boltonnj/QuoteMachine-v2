var post = [];

$(document).ready(function() {
 
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        
        post = data.shift(); // The data is an array of posts. Grab the first one.
       console.log(post); $('#newAuthor').text('~'+post.title);
        $('#newQuote').html(post.content);

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#source').text('');
        }
      },
      cache: false
    });
  
});

$('#getQuote').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        
        var post = data.shift(); // The data is an array of posts. Grab the first one.
       console.log(post);
        $('#newAuthor').text('~'+post.title);
        $('#newQuote').html(post.content);
    
        $('#quotation').toggleClass('animated tada',function(){
          $(this).toggleClass('animated');
        });
       

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#source').text('');
        }
      },
      cache: false
    });
  });
  
//tweet quote
$('#twitter').on("click",function(){
  $.getScript('https://platform.twitter.com/widgets.js');
   tweetText = encodeURIComponent(post.content);
    
    tweetUrl = 'https://twitter.com/intent/tweet?text=' + tweetText+'&via=njbolt91';
  console.log(tweetUrl);
    $('#tweetLink').attr('href', tweetUrl);
  });