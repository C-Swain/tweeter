/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  // making a get request to see some data
  const fetchTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        console.log("data:", tweets);
        renderTweets(tweets);
      },
      error: (err) => {
        console.log(`there was an error: ${err}`);
      },
    });
  };

  fetchTweets();

  const renderTweets = function (tweetData) {
    const $tweetContainer = $(".tweet-container");
    $tweetContainer.empty();

    for (const tweet of tweetData) {
      const $tweet = createTweetElement(tweet);
      $tweetContainer.prepend($tweet);
    }
  };

  const createTweetElement = function (tweetData) {
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
    <p class="days-ago">${timeago.format(tweetData.created_at)}</p>
      <p class="small-icons">
        <i class="fa fa-flag"></i> 
        <i class="fa fa-retweet"></i>
        <i class="fa fa-heart"></i>
      </p>
    </div>
  </div>
</article>`;

    return $tweet;
  };

  const $newTweet = $(".form-inline");
  $newTweet.on("submit", function (event) {
    event.preventDefault();
    console.log("form was submitted");
    const tweetText = $("#tweet-text").val();
    if (tweetText === "" || tweetText === null) {
      return alert("This tweet is empty! please try again");
    }
    if (tweetText.length > 140 ) {
      return alert(" Please , respect our abitray 140 char limit! ")
    }
    const serializedData = $(this).serialize();
    $.post("/tweets", serializedData, (response) => {
      $("#tweet-text").val("");
      console.log(response);
      fetchTweets();
    });
  });
});
