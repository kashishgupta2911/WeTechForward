var quoteText = document.getElementById("quote-text");
var artistText = document.getElementById("artist-text");
var currentQuote = quoteText.textContent; 
var currentArtist = artistText.textCotent;

var quoteObject = {
'"If you haven’t failed yet, you haven’t tried anything.”' : 'Reshma Saujani, Founder of Girls Who Code.',
  
'"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."' : 'Marie Cure, Two time Nobel Prize Winner and pioneer in the field of radioactivity.',

'“Do not let anyone rob you of your imagination, creativity, or curiosity. It is your place in the world; it is your life. Go on and do all you can with it, and make it the life you want to live.”' : 'Mae Jemison, former NASA astronaut and the first African-American woman space.',

'Science has no passport, no gender, no race and no political party. Science is universal and unifying."' : 'Fabiola Gianotti, Director General of CERN.',

'"If it is a good idea, go ahead and do it. It is much easier to apologise than it is to get permission."' : 'Grace Hopper, computer programming pioneer and United States Navy.',

'"Women are both talented and innovative thinkers and are driven to use computer science as a tool to solve larger problems."' : 'Kimberly Bryant, founder of Black Girls Code.',

'"Code is going to continue to play a major role in defining our future. It is crucial that young women learn to code as early as possible to ensure that we as young women have a voice and a stake in what the world looks like."' : 'Karlie Kloss, founder of Kode with Klossy.',

'“Women shouldn’t be afraid to put themselves forward.”' : 'Sarah Wood, co-founder of video advertising platform Unruly.',

'“The word ‘female’, when inserted in front of something, is always with a note of surprise. Female COO, female pilot, female surgeon — as if the gender implies surprise … One day there won’t be female leaders. There will just be leaders.”' : 'Sheryl Sandberg, former COO of Facebook and Meta.',

'“Every girl deserves to be part of creating the technology that will change our world, and change who runs it."' : 'Malala Yousafzai, Nobel Peace Prize Winner and education rights activist.',
}

var quoteList = []
for (var key in quoteObject) {
  quoteList.push(key)
}

var artistList = []
for (var prop in quoteObject){
  artistList.push(quoteObject[prop])
}

var numberOfQuotes = quoteList.length;
var randomNumberHolder = -1;
var newNumber = -1

function newFunction() {
    var quoteText = document.getElementById("quote-text");
    var artistText = document.getElementById("artist-text");
    var currentQuote = quoteText.textContent;
    var currentArtist = artistText.textCotent;
    return { currentQuote, quoteText, currentArtist, artistText };
}

function randomNumberFromZeroInclusive(max) {
  return Math.floor(Math.random() * (max+1)) 
}

function pickRandomSentence() {
  while(newNumber===randomNumberHolder){
    newNumber = randomNumberFromZeroInclusive(numberOfQuotes-1)
  }
  randomNumberHolder = newNumber
  return quoteList[randomNumberHolder]
}

function getCorrespondiningName() {
  return artistList[randomNumberHolder];
}

function newQuote() {
  currentQuote = pickRandomSentence()
  quoteText.textContent = currentQuote;
  currentArtist = '- ' + getCorrespondiningName()
  artistText.textContent = currentArtist;
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400');
}