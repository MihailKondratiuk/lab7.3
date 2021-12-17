$(document).ready(SvoyRandom);
myr = []
myinput = []
function SvoyRandom(){
  myr.push(Math.round(Math.random()*3)+1);
  for(var i=0;i<myr.length;i++)
      setTimeout(glow,(i+1)*3000,myr[i]);
}
function glow(n){
  console.log(n);
  switch(n){
    case 1:
      $('#game1').css('background','#4169E1');
      break;
     case 2:
      $('#game2').css('background','#B22222');
      break;
     case 3:
      $('#game3').css('background','#FFD700');
      break;
     case 4:
      $('#game4').css('background','#32CD32');
      break;
  }
  setTimeout(function(){
    $('#game1').css('background','#0000FF');
    $('#game2').css('background','#FF0000');
    $('#game3').css('background','#FFFF00');
    $('#game4').css('background','#00FF00');
  },1200);
}
function compare(){
  var k =0;
  for(var i=0;i<myinput.length;i++)
    if(myr[i]===myinput[i])
      k++;
  if(k==myinput.length)
    return true;
  return false;
}
$('#game1').click(function(){
  myinput.push(1);
  if(compare()){
    if(myinput.length==myr.length){
      myinput = [];
      SvoyRandom();
      var right = new Audio('pobeda.mp3');
      right.play();
    }
  }else{
    var losesound = new Audio('lose.mp3');
    losesound.play();
    alert("You Lose");
}
  $('#game1').css('background','#4169E1');
  setTimeout(function(){
    $('#game1').css('background','#0000FF');
  },2000);
});
$('#game2').click(function(){
  myinput.push(2);
  if(compare()){
    if(myinput.length==myr.length){
      myinput = [];
      SvoyRandom();
      var right = new Audio('pobeda.mp3');
      right.play();
    }
  }else {
      var losesound = new Audio('lose.mp3');
      losesound.play();
      alert("You Lose");
  }
  $('#game2').css('background','#B22222');
  setTimeout(function(){
    $('#game2').css('background','#FF0000');
  },2000);
});
$('#game3').click(function(){
  myinput.push(3);
  if(compare()){
    if(myinput.length==myr.length){
      myinput = [];
      SvoyRandom();
      var right = new Audio('pobeda.mp3');
      right.play();
    }
  }else{
    var losesound = new Audio('lose.mp3');
    losesound.play();
    alert("You Lose");
}
  $('#game3').css('background','#FFD700');
  setTimeout(function(){
    $('#game3').css('background','#FFFF00');
  },2000);
});
$('#game4').click(function(){
  myinput.push(4);
  if(compare()){
    if(myinput.length==myr.length){
      myinput = [];
      SvoyRandom();
      var right = new Audio('pobeda.mp3');
      right.play();
    }
  }else{
    var losesound = new Audio('lose.mp3');
    losesound.play();
    alert("You Lose");
}
  $('#game4').css('background','#32CD32');
  setTimeout(function(){
    $('#game4').css('background','#00FF00');
  },2000);
});
