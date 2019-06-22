var player_state_active = 'active';
var player_state_inactive = 'inactive';
var button_state_enabled = 'enabled';
var button_state_disabled = 'disabled';

var playerA = {
	name :'A',
	player_id :'player_1',
	button_id :'rollA',
	display_score_id :'player-1-score',
	score : 0,
	label_id : 'player_1_lable'
};

var playerB = {
	name : 'B',
	player_id :'player_2',
	button_id :'rollB',
	display_score_id :'player-2-score',
	score :0,
	label_id :'player_2_lable'
};

init();
document.getElementById('rollA').addEventListener('click', function(){
	playGame(playerA);
});

document.getElementById('rollB').addEventListener('click', function(){
	console.log("rollb event")
	playGame(playerB);
});


function playGame(player){
	console.log(player.name)
	document.getElementById(player.button_id).disabled=false;
	var diceValue = rollDice();
	console.log(diceValue)
	if(diceValue===1){
		console.log("need to switch");
		switchPlayer(player);
	}else{
		var score = calculateScore(player, diceValue);
		if(score >=100){
			makeWinner(player);
		}
	}
}

function rollDice(){
	var randomNumber=Math.floor(Math.random()*6) + 1;
	document.getElementById("image_id").src="dice-"+randomNumber+".png";
	return randomNumber;
}

function switchPlayer(player){
	console.log("switch")
	document.getElementById(playerA.button_id).classList.toggle('button-disable');
	document.getElementById(playerB.button_id).classList.toggle('button-disable');
	document.getElementById(playerA.player_id).classList.toggle('active');
	document.getElementById(playerB.player_id).classList.toggle('active');
	//document.getElementById(player.button_id).disabled=true;
	}
	

function calculateScore(player, diceValue){
	player.score = player.score + diceValue;
	displayScore(player.display_score_id, player.score);	
	return player.score;
}

function makeWinner(player){
	document.getElementById(player.label_id).innerText = 'WINNER';
	//document.getElementById(playerA.button_id).disabled=true;
	//document.getElementById(playerB.button_id).disabled=true;
	addCssClass(playerA.button_id,'button-disable')
	addCssClass(playerB.button_id,'button-disable')
	addCssClass(player.player_id, 'winner')
}

function init(){
	console.log("init")
	addCssClass(playerA.player_id,player_state_active);
	displayScore(playerA.display_score_id, 0);
	displayScore(playerB.display_score_id, 0);
	removeCssClass(playerA.player_id, 'winner')
	removeCssClass(playerB.player_id, 'winner')
	playerA.state = player_state_active;
	removeCssClass(playerA.button_id, 'button-disable')
	addCssClass(playerB.button_id, 'button-disable')
	active_player='A';
}

function addCssClass(id_name, class_name){
	document.getElementById(id_name).classList.add(class_name);
}

function removeCssClass(id_name, class_name){
	document.getElementById(id_name).classList.remove(class_name);
}

function displayScore(id_name, score){
	document.getElementById(id_name).innerText =score;
}
