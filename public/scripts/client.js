/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
    {
        "user": {
            "name": "Newton",
            "avatars": "https://i.imgur.com/73hZDYK.png"
            ,
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
    },
    {
        "user": {
            "name": "Descartes",
            "avatars": "https://i.imgur.com/nlhLi3I.png",
            "handle": "@rd"
        },
        "content": {
            "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
    }
]

const renderTweets = function (tweets) {
    for (let tweet of tweets) {
        let $tweet = createTweetElement(tweet);
        $('.tweets-container').prepend($tweet);
    }
}

const createTweetElement = function (tweet) {
    let $tweet = (
        `<article class="">

  <div class="article-header">
    <p>
      <img class="avatar" src="${tweet.user.avatars}">
      <span>${tweet.user.name}
        </span>
        </p>
      <p class="username">${tweet.user.handle}</p>
  </div>

  <p class="container-tweet">${tweet.content.text}</p>
  <footer class="time">${tweet.created_at}</footer>
  <div class="icons">
  <i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
</div>
  </article>`);

    return $tweet;
}

const loadtweets = () => {
    $.ajax("/tweets/", { method: "GET" })
        .then(function (data) {
            renderTweets(data)
        }
        )
}

renderTweets(data);