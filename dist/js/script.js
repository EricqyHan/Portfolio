console.log("hello world");

let quotes = [
  "If you don't program in life, life will program you.",
  "Learning is hard work, but everything you learn is yours and will make subsequent learning easier",
  "When actions grow unprofitable, gather information; when information grows unprofitable, sleep.",
  "You can never understand everything. But, you should push yourself to understand the system.",
  "Fall down seven times, get up eight.",
  "Experience is the name everyone gives to their mistakes."
];

//six quotes

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

//let randomNumber = Math.floor(Math.random() * 20);
