var quotes = [
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream it. Believe it. Build it.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Life is 10% what happens to you and 90% how you react to it."
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length); // without number (quotes.length) it will always revert back to 0
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber]; // With JQuery: "$('#quoteDisplay').html(quotes[randomNumber]);"
}

$(".font-div").click(function() {
  $(".collapse").collapse("hide");
});
