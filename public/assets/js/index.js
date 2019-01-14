var quotes = ["Start where you are. Use what you have. Do what you can.", "Never give up, for that is just the place and time that the tide will turn.", "Whatever the mind can conceive and believe, it can achieve.", "Don't limit your challenges. Challenge your limits.", "I will persist until I succeed.", "Work hard in silence, let your success be your noise.", "The struggle you're in today is developing the strength you need for tomorrow.", "Tough times never last, but tough people do."];

var quoteText = document.getElementById("quote");

function displayQuote() {

    for (var i = 0; i < quotes.length; i++) {
        var appendedQuote = quotes[Math.floor(Math.random() * (quotes.length - 1))];

        quoteText.textContent = appendedQuote;

    }
}

displayQuote();
