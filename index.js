$(function () {
    var clicks = 0, mSecs = 0, interval;

    $('.click-adidas').click(function () {
        if (mSecs < 1000) {
            clicks += 1;
            $('.share').hide();
        }

        var randomColorChange = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        $('.click-adidas').css('background-color', randomColorChange);
    });

    function clickChecker() {
        if (clicks != 0) {
            if (mSecs < 1000) {
                mSecs += 1;
            } else {
                mSecs = 1000;
                clearInterval(interval);
            }
        }

        updateHtml();
    }

    function updateHtml() {
        if (clicks != 0) {
            $('span.time').html((mSecs / 100).toFixed(1) + 'S');
            $('span.clicks').html(clicks + ' clicks');
        }

        if (mSecs == 1000) {
            $('.under').show();
            $('.click-adidas').addClass('red');
            $('.share').show();
        }
    }

    function tweet() {
        var tweetText = "I just tapped " + clicks + "x in " + (mSecs / 100) + "s on @yeezio Adidas Confirmed Simulator. Link: " + window.location.href;
        var twitterTweetUrl = "https://twitter.com/intent/tweet?text=";
        var url = twitterTweetUrl + encodeURI(tweetText);

        window.open(url);
    }

    $('span.share a ').click(function () {
        tweet();
    });

    interval = setInterval(clickChecker, 1);
});