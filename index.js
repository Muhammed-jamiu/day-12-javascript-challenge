console.log("Hello! Welcome to 30days-javascript-challenge-day-12");

// console.log(names.age);

// const output = JSON.stringify(names);
// console.log(output.length);
// console.log(typeof output);

const user = "Musa";
const regEx = new RegExp(user, "gi");
// regEx.console.log(regEx);

const user2 = "Muhammed-Jamiu";
const newRegEx = /user2/gi;
// console.log(newRegEx);

//
// const str = "I love JavaScript";
const str = "love";
const pattern = /Love/gi;
const result = pattern.test(str);
// console.log(result);

//
const user3 = "Learning Javascript is Curial";
const pattern3 = /learning/gi;
const result2 = user3.match(pattern3);
console.log(result2);

//
const str4 = "I love JavaScript";
const pattern4 = /love/;
const result4 = str4.match(pattern4);
console.log(result4);
//
const str5 = "I love JavaScript";
const pattern5 = /Love/gi;
const result5 = str5.match(pattern5);
console.log(result5);

let val =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";
matchReplaced = val.replace(/python|python/gi, "JavaScript");
console.log(matchReplaced);

const text =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";
// matches = text.replace(/%/g, "");
// console.log(matches);

const patterner = /[Aa]pple|[Bb]anana/g; // this square bracket means either A or a
const text2 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana aday keeps the doctor far far away.";
const matches = text2.match(patterner);
console.log(matches);

const patterna = /\d+/g; // d is a special character which means digits
const text3 = "This regular expression example was made in January 12, 2020.";
const matches1 = text3.match(patterna);
console.log(matches1);

//
const pattern6 = /[a,p]./gi; // this square bracket means a and . means any character except new line
const text5 = "Apple and banana are fruits";
const matches3 = text5.match(pattern6);
console.log(matches3);

const pattern7 = /[a].+/g; // . any character, + any character one or more times
const text6 = "Apple and banana are fruits";
const matches4 = text6.match(pattern7);
console.log(matches4);

///
const txt = "This regular expression example was made in December 6, 2019.";
const pat = /\\b\w{4}\b/g; // exactly four character words
const matcheis = txt.match(pat);
// console.log(matcheis); //['This', 'made', '2019']

///
const tx = "This regular expression example was made in December 6, 2019.";
const patter = /^This/g; // ^ means starts with
const matche = txt.match(patter);
console.log(matche); // ['This']

//1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
// 2. Write a function which nd the most frequent words. After cleaning, count three most frequent words in the string.
// 🎉 CONGRATULATIONS ! 🎉
// {word:'which', count:1}
// ]

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting
&and& @emp%o@wering peo@ple.I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u
to be a tea@cher!?`;

// console.log(clearCharaters);

function cleanText(clearCharaters) {
  let patterW = /[@,#,%,$,&]/g;
  let value = sentence.replace(patterW, "");

  console.log(value);
}
cleanText(sentence);
