console.log("hello world")
console.log(Math.floor(Math.random()*6) + 1);

var player_score, player_score;
init();
function init(){
	
	document.getElementById('player_1').classList.add('active');
	document.getElementById('player-1-score').innerText =0;
	document.getElementById('player-2-score').innerText =0;
	document.getElementById("imagename").classList.add('hide');
	active_player=1;
	document.getElementById('rollA').classList.remove('button-disable');
	document.getElementById('rollB').classList.add('button-disable');
	document.getElementById('player_1').classList.remove('winner');
	document.getElementById('player_2').classList.remove('winner');
}

document.getElementById('rollA').addEventListener('click', function(){
	genrateRandom('A')
});

document.getElementById('rollB').addEventListener('click', function(){
	genrateRandom('B')
});

function genrateRandom(player){
	document.getElementById("imagename").classList.remove('hide');
	var randomNumber=Math.floor(Math.random()*6) + 1;
	document.getElementById("imagename").src="dice-"+randomNumber+".png";
	if(randomNumber!=1){
		playgame(active_player,randomNumber,player);
	}else{
		if(player ==='A'){
			document.getElementById('rollA').classList.add('button-disable');
			document.getElementById('rollB').classList.remove('button-disable');
		}else{
			document.getElementById('rollA').classList.remove('button-disable');
			document.getElementById('rollB').classList.add('button-disable');
		}
	active_player = active_player===1? 2 :1;
	document.getElementById('player_1').classList.toggle('active');
	document.getElementById('player_2').classList.toggle('active');
	playgame(active_player,randomNumber,player);	
	}
}

function playgame(active_player,randomNumber, player){
	var currentscore = document.getElementById('player-'+active_player+'-score').innerText;
		var sum=parseInt(currentscore) + randomNumber;
		document.getElementById('player-'+active_player+'-score').innerText =sum;
		console.log(sum)
		if(parseInt(sum)>=100){
			document.getElementById('player_'+active_player+'_lable').innerText = 'WINNER';
			document.getElementById('rollA').disabled=true;
			document.getElementById('rollB').disabled=true;
			document.getElementById('rollA').classList.add('button-disable');
			document.getElementById('rollB').classList.add('button-disable');
			document.getElementById('player_'+active_player).classList.add('winner');

		}
}



