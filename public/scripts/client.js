/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => { 

//   // making a get request to see some data
//   const fetchTweets = () => {
//     $.ajax({
//       url: "/api/tweets",
//       method: "GET",
//       dataType: "json",
//       success: (tweets) => {
//         console.log("data:", tweets)
//         createBlogs(tweets);
  
//       },
//       error: (err) => {
//         console.log(`there was an error: ${err}`)
//       }
//     })
//   }


// fetchTweets();

const tweetData = [{
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}]

const renderTweets = function(tweetData) {
  const $tweetContainer = $(".tweet-container");
  $tweetContainer.empty();

  for (const tweet of tweetData) {
    const $tweet = createTweetElement(tweet);
    $tweetContainer.prepend($tweet)
  }

}

const createTweetElement = function(tweetData)  {
  const $tweet = `<article class="tweets-container">
  <div class="tweet">
    <div class="tweet-header">
      <img src="${tweetData.user.avatars}" class="tweeter-icon" />
      <p class="tweeter-name">${tweetData.user.name}</p>
      <p class="handle">${tweetData.user.handle}</p>
    </div>
    <h2 class="tweet1">
      ${tweetData.content.text}
    </h2>
    <div class="tweet-footer">
      <p class="days-ago">${tweetData.created_at}</p>
      <p class="small-icons">
        <i class="fa fa-flag"></i> 
        <i class="fa fa-retweet"></i>
        <i class="fa fa-heart"></i>
      </p>
    </div>
  </div>
</article>`


  return $tweet
};  

renderTweets(tweetData);

})


