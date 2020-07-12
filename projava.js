const levels={
  eas: 5,
  mediu: 3,
  har: 2
};

var timeDisplay=document.getElementById("secon");
var curword;
var woinput;
const timeleft=document.getElementById("time");
const score=document.getElementById("score");
const mess=document.getElementById("message");
let bteasy=document.getElementById("easy");
let btmedium=document.getElementById("medium");
let bthard=document.getElementById("hard");
var speed=150;
var i=0;
var txt="Welcome to Word Test!!!";
var txt1="Welcome to Paragraph Test!!!";

let currentlevel;

let scor=0;
let time;
let isplaying;
var words;
var timesetint;
var statsetint;

var wordarr = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

var paraarr=[
  'Although these ideas may look true in many instances, they don’t really define what the idea behind a paragraph is. This is one of those subtle things in English writing that never really gets explained on priority making it one of those commonly used things that are barely understood. Which is why this read is going to be great.',
  'Winter is coming.',
  'You know nothing Jon Snow.',
  'The Lord of Light wants his enemies burned. The Drowned God wants them drowned. Why are all the gods such vicious cunts? Where is the god of tits and wine?',
  'The more people you love, the weaker you are.',
  'We don’t get to choose whom we love',
  'Explain to me why it is more noble to kill 10,000 men in battle than a dozen at dinner.',
  'Smile, because it confuses people. Smile, because it\'s easier than explaining what is killing you inside.',
  'As you know, madness is like gravity...all it takes is a little push.',
  'Nobody panics when things go “according to plan”. Even if the plan is horrifying!',
  'What doesn\'t kill you, simply makes you stranger!',
  'They Laugh At me Because I\'m Different. I laugh At Then Because The\'re all the same',
  'Their morals, their code; it\'s a bad joke. Dropped at the first sign of trouble. They\'re only as good as the world allows them to be. You\'ll see- I\'ll show you. When the chips are down these, uh, civilized people? They\'ll eat each other. See I\'m not a monster, I\'m just ahead of the curve.',
  'This world is rotten, and those who are making it rot deserve to die. Someone has to do it, so why not me?',
  'The real evil is the power to kill people. Someone who finds himself with that power is cursed. No matter how you use it, anything obtained by killing people can never bring true happiness.',
  'Kira is childish and he hates losing... I am also childish and I hate to lose. That\'s how I know.',
  'If you can\'t win the game, if you can\'t solve the puzzle, then you\'re nothing but a loser.',
  'You\'re just a murderer, Light Yagami. And this notebook is the deadliest weapon of mass murder in the history of mankind.',
  'As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).',
  'JavaScript engines were originally used only in web browsers, but they are now embedded in some servers, usually via Node.js. They are also embedded in a variety of applications created with frameworks such as Electron and Cordova.',
  'During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the burgeoning web development scene to remove this limitation, so in 1995, Netscape decided to add a scripting language to Navigator.'
];

function easclick(){
  currentlevel=levels.eas;
  time=currentlevel;
  bteasy.disabled=true;
  btmedium.disabled=true;
  bthard.disabled=true;
  woinput.value="";
  woinput.focus();
  init();
}

function medclick(){
  currentlevel=levels.mediu;
  time=currentlevel;
  bteasy.disabled=true;
  btmedium.disabled=true;
  bthard.disabled=true;
  woinput.value="";
  woinput.focus();
  init();
}

function harclick(){
  currentlevel=levels.har;
  time=currentlevel;
  bteasy.disabled=true;
  btmedium.disabled=true;
  bthard.disabled=true;
  woinput.value="";
  woinput.focus();
  init();
}

function init(){
  timeDisplay.innerHTML=currentlevel;
  showwords(words);
  woinput.addEventListener('input',startMatch);
  timesetint=setInterval(timeupdate,1000);
  statsetint=setInterval(checkst,50);
}

function startMatch(){
  if(matchword()){
     isplaying=true;
     time=currentlevel;
     showwords(words);
     woinput.value="";
     scor++;
  }
  if(scor==0){
    score.innerHTML=0;
  }
  else{
    score.innerHTML=scor;
  }
}

function matchword(){
  if(curword.innerHTML===woinput.value){
      mess.innerHTML="Correct!!!";
      return true;
  }
  else{
      mess.innerHTML="";
      return false;
  }
}

function showwords(wor){
   const randind=Math.floor(Math.random()*wor.length);
   curword.innerHTML=wor[randind];
}

function timeupdate(){
  if(time>0){
     time--;
  }
  else if(time===0){
     isplaying=false;
  }
  timeleft.innerHTML=time;
}

function checkst(){
   if(!isplaying && time===0){
       mess.innerHTML="GAME OVER!!!";
       woinput.disabled=true;
       scor=0;
   }
}

function wordfunc(){
   document.getElementById("mainhead").style.display="block";
   document.getElementById("dv1").style.display="none";
   document.getElementById("dv2").style.display="none";
   document.getElementById("mainhead0").style.display="none";
   document.getElementById("dv0").style.display="none";
   words=wordarr;
   curword=document.getElementById("current-word");
   document.getElementById("current-para").style.display="none";
   document.getElementById("forwordonly").style.display="inline";
   document.getElementById("pastrtbtn").style.display="none";
   document.getElementById("welcword").style.display="block";
   document.getElementById("word-input").style.display="block";
   document.getElementById("para-input").style.display="none";
   woinput=document.getElementById("word-input");
   woinput.disabled=false;
   document.getElementById("aud").play();
   typewriterword();
}

function parafunc(){
   document.getElementById("mainhead").style.display="block";
   document.getElementById("dv2").style.display="none";
   document.getElementById("mainhead0").style.display="none";
   document.getElementById("dv0").style.display="none";
   document.getElementById("dv1").style.display="none";
   words=paraarr;
   currentlevel=60;
   time=currentlevel;
   curword=document.getElementById("current-para");
   document.getElementById("current-para").style.display="block";
   document.getElementById("current-word").style.display="none";
   document.getElementById("forwordonly").style.display="none";
   document.getElementById("pastrtbtn").style.display="inline-block";
   document.getElementById("welcpara").style.display="block";
   document.getElementById("word-input").style.display="none";
   document.getElementById("para-input").style.display="block";
   woinput=document.getElementById("para-input");
   document.getElementById("aud").play();
   typewriterpara();
}

function playfunc(){
   document.getElementById("mainhead").style.display="none";
   document.getElementById("dv1").style.display="none";
   document.getElementById("dv2").style.display="none";
   document.getElementById("mainhead0").style.display="block";
   document.getElementById("dv0").style.display="block";
   bteasy.disabled=false;
   btmedium.disabled=false;
   bthard.disabled=false;
   document.getElementById("pastrtbtn").disabled=false;
   timeleft.innerHTML=0;
   score.innerHTML=0;
   mess.innerHTML="";
   clearInterval(timesetint);
   clearInterval(statsetint);
   timeDisplay.innerHTML="";
   document.getElementById("current-word").style.display="block";
   document.getElementById("current-para").style.display="block";
   document.getElementById("welcword").style.display="none";
   document.getElementById("welcpara").style.display="none";
   woinput.disabled=false;
   words=[];
   document.getElementById("welcword").innerHTML="";
   document.getElementById("welcpara").innerHTML="";
   i=0;
}

function parastartbt(){
   woinput.value="";
   woinput.focus();
   document.getElementById("pastrtbtn").disabled=true;
   init();
}

function typewriterword(){
   if(i<txt.length){
      document.getElementById("welcword").innerHTML+=txt.charAt(i);
      i++;
      setTimeout(typewriterword, speed);
   }
   else{
      document.getElementById("aud").pause();
      document.getElementById("dv1").style.display="block";
      document.getElementById("mainhead").style.display="block";
      document.getElementById("dv2").style.display="block";
   }
}

function typewriterpara(){
   if(i<txt1.length){
      document.getElementById("welcpara").innerHTML+=txt1.charAt(i);
      i++;
      setTimeout(typewriterpara, speed);
   }
   else{
      document.getElementById("aud").pause();
      document.getElementById("dv2").style.display="block";
   }
}
