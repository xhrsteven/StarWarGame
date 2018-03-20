$(document).ready(function(){
    var currCharacter;
    var characterChosen;
    var currDefender;
    var defeated;
    var combatants = [];
    
var characters =[
    Obi={
        name: "Obi-Wan Kenobi",
        baseAttack: 35,
        attack:10,
        healthPoint:120,
        imgUrl:"assets/images/char1.jpg",
    },
    Luke = {
        name:'Luke SkyWalker',
        baseAttack: 25,
        attack:15,
        healthPoint:100,
        imgUrl:"assets/images/char2.png",
    },
    Sidous={
        name:'Darth Sidious',
        baseAttack:40,
        attack:5,
        healthPoint:150,
        imgUrl:"assets/images/char3.jpg",
    },
    Maul={
        name:'Darth Maul',
        baseAttack: 20,
        attack:20,
        healthPoint:180,
        imgUrl:"assets/images/char4.jpeg",
    }
];

var enemyCount = (characters.length-1);







