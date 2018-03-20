$(document).ready(function(){
    var character;
    var characterChose=false;
    var enemyChose = false;
    var defender;
    var defeated = false;
    
var characters =[
    Obi={
        name: "Obi-Wan Kenobi",
        baseAttack: 35,
        attack:10,
        healthPoint:120
    },
    Luke = {
        name:'Luke SkyWalker',
        baseAttack: 25,
        attack:15,
        healthPoint:100
    },
    Sidous={
        name:'Darth Sidious',
        baseAttack:40,
        attack:5,
        healthPoint:150
    },
    Maul={
        name:'Darth Maul',
        baseAttack: 20,
        attack:20,
        healthPoint:180
    }
];

var enemyCount = (characters.length-1);



})