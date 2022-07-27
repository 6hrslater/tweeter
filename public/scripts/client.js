/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(".error").hide();

//Loops through tweets
const renderTweets = function (tweets) {
  $(".tweets-container").html("");
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $(".tweets-container").prepend($tweet);
  }
};

//Dynamic tweets
const createTweetElement = function (tweet) {
  let $date = Math.floor((Date.now() - tweet.created_at) / 86400000);
  let $tweet = `<article class="">

  <div class="article-header">
    <p>
      <img class="avatar" src="${tweet.user.avatars}">
      <span>${tweet.user.name}
        </span>
        </p>
      <p class="username">${tweet.user.handle}</p>
  </div>

  <p class="container-tweet">${tweet.content.text}</p>
  <footer class="time">${$date} days ago</footer>
  <div class="icons">
  <i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
</div>
  </article>`;

  return $tweet;
};

//Fetches tweets and renders them
const loadtweets = () => {
  $.ajax("/tweets/", { method: "GET" }).then(function (data) {
    renderTweets(data);
  });
};

//Posts tweets to a form, after validating through 3 requirements
$(".submit-tweet").submit(function (event) {
  event.preventDefault();
  $(".error").slideUp();
  if ($("#tweet-text").val() === "" || $("#tweet-text").val() === null) {
    $(".error").text("Please enter a valid tweet");
    $(".error").slideDown("slow");
  } else if ($("#tweet-text").val().length > 140) {
    $(".error").text("Tweet is too long");
    $(".error").slideDown("slow");
  } else {
    $.ajax("/tweets/", {
      method: "POST",
      data: $(".submit-tweet").serialize(),
    }).then(() => {
      $("#tweet-text").val("");
      $(".counter").val(140);
      loadtweets();
    });
  }
});

loadtweets();

renderTweets(data);
