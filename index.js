let quotes = [
  "Elon Musk.",
  "Mark Zuckerberg.",
  "Santa Claus.",
  "A jar.",
  "A policeman.",
  "Buzz Lightyear.",
  "An apple.",
  "A banana.",
  "Kenny from South Park.",
  "A wizard.",
  "Where's Wally.",
  "A scarecrow.",
  "Winnie the Pooh.",
  "Dobby from Harry Potter.",
  "Spiderman.",
  "A ghost.",
  "A spider.",
  "A nun.",
  "A shark.",
  "Jesus.",
  "A snowman.",
  "A potato.",
  "A snake.",
  "A camel.",
  "A duck.",
  "Voldemort.",
  "A teletubby.",
  "Gollum from Lord of the Rings.",
  "A dog.",
  "Yoda.",
  "A mouse.",
  "A gangster.",
  "A spider.",
  "A bear.",
  "The Hulk.",
  "Snoopy.",
  "A spoon.",
  "A pineapple.",
  "A unicorn.",
  "A pretzel.",
  "A meerkat.",
  "An avocado.",
  "Homer Simpson.",
  "A mushroom.",
  "An emoji.",
  "Simon Cowell.",
  "An alien.",
  "A tomato.",
  "A zombie.",
  "A squirrel.",
  "Dwight from The Office.",
  "Spongebob Squarepants.",
  "Eric Cartman.",
  "Mickey Mouse.",
  "Shrek.",
  "A pizza.",
  "Bart Simpson.",
  "Pikachu.",
  "A robot.",
  "A dildo.",
  "A clown.",
  "Borat.",
  "Pacman.",
  "A skeleton.",
  "Harry Potter.",
  "A sock.",
  "A condom.", 
  "A bee.", 
  "A Teddy bear.", 
  "A human-sized ladybug.", 
  "Nemo the fish.", 
  "Hitler.",
  "A man on rollerskates.",
  "Grandma."
];

document.getElementById("quoteContainer").addEventListener("click", function() {
  // Get the quotes from local storage or use the original quotes array if it's not in local storage yet
  let quotesArray = JSON.parse(localStorage.getItem("quotes")) || quotes;

  // Select a random quote from the array
  let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

  // Save the quote to local storage
  localStorage.setItem("lastSelected", JSON.stringify(randomQuote));

  // Remove the quote from the array
  quotesArray = quotesArray.filter((quote) => quote !== randomQuote);

  // Save the updated array to local storage
  localStorage.setItem("quotes", JSON.stringify(quotesArray));

  // Display the quote
  document.getElementById("quote").innerHTML = randomQuote;
});

let quotes2 = [
    "On someone’s head.",
    "Handcuffed to the bed.",
    "Riding an elephant.",
    "With tentacles.",
    "Talking dirty.",
    "Reading erotica.",
    "With a micropig.",
    "Masturbating.",
    "Stroking a cat.",
    "Surrounded by frogs.",
    "Dancing.",
    "Playing board games.",
    "On a skateboard.",
    "In a pram.",
    "On a broom.",
    "At the gym.",
    "Pregnant.",
    "Driving a bus.",
    "On the toilet.",
    "Playing football.",
    "Under a chicken’s wing.",
    "In high heels.",
    "On a catwalk.",
    "In a kangaroo pouch.",
    "In space.",
    "Surfing.",
    "In a bikini.",
    "On a rocket.",
    "Taking magic mushrooms.",
    "On the moon.",
    "On a date.",
    "Riding a horse.",
    "Doing yoga.",
    "In the shower.",
    "Getting married.",
    "Doing cocaine.",
    "With a hedgehog.",
    "At McDonald's.",
    "Sending a dick pic.",
    "With a pig’s snout.",
    "Having a baby.",
    "Screaming.",
    "In therapy.",
    "Licking someone’s arm.",
    "On Tinder.",
    "Being stung by a bee.",
    "Being chased by bats.",
    "Being hit with an egg.",
    "With a prostitute.",
    "Being chased by a seagull.",
    "Having a threesome.",
    "Sniffing glue.",
    "Being bitten by a turtle.",
    "In hell.",
    "Selling drugs to kids.",
    "Doing a cartwheel.",
    "Shooting some hoops.",
    "Doing a magic trick.",
    "Getting hit by a cat.",
    "Being eaten by a bear.",
    "Painting a bee.",
    "Playing Twister.",
    "On OnlyFans.",
    "Playing Scrabble.",
    "Taking a selfie.",
    "In a bin.",
    "With butt implants.",
    "Being scared of a spider.",
    "Winking at themselves in the mirror.",
    "Pole dancing.",
    "Graduating from University.",
    "Wearing dangly earrings.",
    "Doing a facepalm.",
    "Falling down the stairs.", 
    "Drunk.",
    "At Specsavers.",
    "Getting struck by lightning.",
    "Spitting.",
    "With a mohawk.", 
    "With a giant caterpillar.",
    "Sipping a glass of wine.", 
    "Playing with a cat.",
    "Having an English breakfast.",
    "Buying sex toys.",
    "In sexy lingerie.",
    "At a rave.",
    "Smoking shisha.",
    "Drinking beer.",
    "Eating a bowl of spaghetti.",
    "Attacking someone.",
    "Doing the splits.",
    "Holding a rabbit.",
    "Playing the guitar.",
    "Playing frisbee.",
    "Eating a lemon.",
    "On a zebra.",
    "Doing karaoke.",
    "At the hairdressers.",
    "In a little black dress.",
    "Watching Netflix.",
    "Walking a dog.",
    "At a sex party.",
    "Having a heart attack.",
    "Playing poker.",
    "Hoovering up.",
    "At a nightclub.",
    "Getting cummed on.",
    "Ejaculating.",
    "With a huge dick.",
    "With boobs.",
    "Relaxing at the beach.",
    "Walking a dog.",
    "Having a panic attack.",
    "Falling down a waterfall.",
    "Smoking weed.",
    "Getting their nails done.",
    "On a rollercoaster.",
    "As a mermaid.",
    "Getting attacked by a pigeon.",
    "Having a shower.",
    "Going swimming.",
    "In a beehive.",
    "In a bubble.",
    "Being hit by a snowball.",
    "In an igloo.",
    "Getting a facial.",
    "Riding a dolphin.",
    "Taking a bubble bath.",
    "Doing LSD.",
    "Taking heroin.",
    "With huge biceps.",
    "With a micropenis.",
    "Laying an egg.",
    "In someone’s mouth.",
    "Getting a haircut.",
    "Taking a pregnancy test.",
    "Surrounded by dicks.",
    "In a fish tank.",
    "Being thrown into a volcano.",
    "Watching cat videos.",
    "In a wheelchair.",
    "On crutches.",
    "Having a nightmare.",
    "With spades for legs.",
    "Pissing their pants.",
    "Dressed up as a cat.",
    "Dressed as a pirate.",
    "At a house party.",
    "Iceskating.",
    "Watching porn.",
    "Playing videogames.",
    "Being poked."
];

document.getElementById("quoteContainer2").addEventListener("click", function() {
  // Get the quotes from local storage or use the original quotes2 array if it's not in local storage yet
  let quotes2Array = JSON.parse(localStorage.getItem("quotes2")) || quotes2;

  // Select a random quote from the array
  let randomQuote2 = quotes2Array[Math.floor(Math.random() * quotes2Array.length)];

  // Save the quote to local storage
  localStorage.setItem("lastSelected", JSON.stringify(randomQuote2));

  // Remove the quote from the array
  quotes2Array = quotes2Array.filter((quote) => quote !== randomQuote2);

  // Save the updated array to local storage
  localStorage.setItem("quotes2", JSON.stringify(quotes2Array));

  // Display the quote
  document.getElementById("quote2").innerHTML = randomQuote2;
});

  let easy = [
  "Close your eyes for the first 10 seconds.",
  "You must hide your drawing for the first 10 seconds.",
  "Your team has to also say the word 'crown'",
  "Your team has to also say the word 'donut'",
  "Your team has to also say the words 'with really long legs'",
  "Your team has to also say the words 'with huge nostrils'",
  "Your team has to also say the words 'with a huge neck'",
  "Your team has to also say the word 'sad'",
  "Your team has to also say the word 'happy'",
  "Your team has to also say the word 'angry'",
  "Your team has to also say the words 'cup of tea'",
  "Your team has to also say the words 'rubber duck'",
  "Your team has to also say the word 'fork'",
  "Your team has to also say the word 'toothbrush'",
  "Your team has to also say the word 'plant'",
  "Your team has to also say the word 'strawberry'",
  "Your team has to also say the word 'fireworks'",
  "Your team has to also say the word 'rain'",
  "Your team has to also say the word 'bomb'",
  "Your team has to also say the word 'small'",
  "Your team has to also say the word 'sunglasses'",
  "Your team has to also say the word 'bread'",
  "Your team has to also say the word 'lamp'",
  "Your team has to also say the words 'huge ears'",
  "Your team has to also say the word 'wings'",
  "Your team has to also say the word 'phone'",
  "Your team has to also say the word 'box'",
  "Your team has to also say the word 'umbrella'",
  "Your team has to also say the word 'handbag'",
  "Your team has to also say the word 'crying'",
  "Your team has to also say the word 'carrot'",
  "Your team has to also say the word 'sun'",
  "Your team has to also say the word 'cheese'",
  "Your team has to also say the word 'glasses'",
  "Your team has to also say the word 'makeup'",
  "Your team has to also say the word 'lipstick'",
  "Your team has to also say the word 'music'",
  "Your team has to also say the word 'moustache'",
  "Your team has to also say the word 'sheep'",
  "Your team has to also say the word 'owl'",
  "Your team has to also say the word 'beard'",
  "Your team has to also say the word 'monobrow'",
  "Your team has to also say the words 'massive hands'",
  "Your team has to also say the word 'plane'",
  "Your team has to also say the words 'huge teeth'",
  "Use the bottom of a glass to draw a circle. You can only draw inside this circle."
];

document.getElementById("easy").addEventListener("click", function() {
  // Get the array from local storage
  let easyArray = JSON.parse(localStorage.getItem("easy")) || easy;

  // Get a random quote from the array
  let randomQuote = easyArray[Math.floor(Math.random() * easyArray.length)];

  // Save the quote to local storage
  localStorage.setItem("lastSelected", JSON.stringify(randomQuote));

  // Remove the quote from the array
  easyArray = easyArray.filter((quote) => quote !== randomQuote);

  // Save the updated array to local storage
  localStorage.setItem("easy", JSON.stringify(easyArray));

  // Display the quote
  document.getElementById("easy1").innerHTML = randomQuote;
});

 let advancedList = [
  "You must draw with your non-dominant hand.",
  "You must hide your drawing for the first 30 seconds.'",
  "The opposing team gets to choose an additional word to include.",
  "Your team has to also say the word 'thin'",
  "Your team has to also say the word 'fat'",
  "Your team has to also say the words 'gold tooth'",
  "Draw with your eyes closed for double points! You must attempt this.",
  "Your team has to also say the word 'hairy'",
  "Your team has to also say the word 'fringe'",
  "Your team has to also say the word 'dead'",
  "Your team has to also say the word 'bathroom'",
  "Your team has to also say the words 'sticking their tongue out'",
  "Your team has to also say the words 'cat ears'",
  "Your team has to also say the word 'aroused'",
  "Your team has to also say the word 'boat'",
  "Your team has to also say the word 'sausage'",
  "Your team has to also say the words 'small nose'",
  "Your team has to also say the word 'murder'",
  "Your team has to also say the word 'surprised'",
  "Your team has to also say the word 'earmuffs'",
  "Your team has to also say the word 'dragon'",
  "Your team has to also say the word 'rich'",
  "Your team has to also say the word 'milkshake'",
  "Your team has to also say the word 'confused'",
  "Your team has to also say the words 'in pain'",
  "Your team has to also say the word 'in prison'",
  "Your team has to also say the word 'underwater'",
  "Your team has to also say the word 'naked'",
  "Your team has to also say the word 'laughing'",
  "Your team has to also say the word 'hiding'",
  "Your team has to also say the words 'huge eyes'",
  "Your team has to also say the words 'with no feet'",
  "Your team has to also say the words 'with no arms'",
  "Your team has to also say the words 'with no eyes'",
  "Your team has to also say the words 'with no mouth'",
  "Your team has to also say the words 'on fire'",
  "Your team has to also say the word 'whiskers'",
  "Your team has to also say the word 'tail'",
  "Your team has to also say the words 'with six fingers'",
  "Take a risk! Double your points if your team correctly guesses in one go when your time is up.",
  "Your team has to also say the word 'dinosaur'",
  "Your team has to also say the word 'wig'"
];

document.getElementById("advancedList").addEventListener("click", function() {
  // Get the quotes from local storage or use the original quotes array if it's not in local storage yet
  let advancedListArray = JSON.parse(localStorage.getItem("advancedList")) || advancedList;

  // Select a random quote from the array
  let randomQuote = advancedListArray[Math.floor(Math.random() * advancedListArray.length)];

  // Save the quote to local storage
  localStorage.setItem("lastSelected", JSON.stringify(randomQuote));

  // Remove the quote from the array
  advancedListListArray = advancedListArray.filter((quote) => quote !== randomQuote);

  // Save the updated array to local storage
  localStorage.setItem("advancedList", JSON.stringify(advancedListArray));

  // Display the quote
  document.getElementById("advanced1").innerHTML = randomQuote;
});

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let audio = new Audio('meow.wav'); 

let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        }

        let minString = minute;
        let secString = second;
        let countString = count;

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }
        
        if (second === 45) { audio.play(); }
        
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        setTimeout(stopWatch, 10);
    }
    
    function reload(){
        location.reload();
    }






