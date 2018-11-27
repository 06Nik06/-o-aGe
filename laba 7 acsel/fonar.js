man = {
	x: 6,
	y: 5
}
var breakfeast
var leve;
var le;
var vnle;
var ve;
var vn;
var vepr;
var pr;
var prvn;
var temp
var sc = 0

var scet = 0
function rnd(){
     scet = 0
     map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,3,3,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
     for(var y = 1; y < 5; y++) {
	  var rndy = Math.round((Math.random() * 9)+2)
	  var rndx = Math.round((Math.random() * 12)+2)
	  map[rndx][rndy] = 2
}
        for(var y = 2; y < map.length -2 ; y++) {
		    for(var x = 2; x < map[y].length -2; x++) {
		        if(map[y][x] == 2){
		            for(var yi = -2; yi <2 ;yi++ ){
		                for(var xi = -2; xi <2; xi++){
		                    if(map[y-yi][x-xi] == 2 && xi != 0 && yi != 0){
                                map[y-yi][x-xi] = 3
                                scet++
		                    }

		            }

		        }

		    }
		}
    }
    if(scet > 0){
        rnd()
        }

}

rnd()
var el = document.getElementById('world');


function drawWorld(){
	el.innerHTML = '';
	for(var y = 0; y < map.length ; y++) {
		for(var x = 0; x < map[y].length ; x++) {
			if (map[y][x] == 2) {
				el.innerHTML += "<div class='ground'></div>";
			}
			else if (map[y][x] == 3) {
				el.innerHTML += "<div class='ground'></div>";
			}
			else if (map[y][x] == 4) {
				el.innerHTML += "<div class='light'></div>";
			}
			else if (map[y][x] == 5) {
				el.innerHTML += "<div class='man'></div>";
			}
			else if (map[y][x] == 6) {
				el.innerHTML += "<div class='manlight'></div>";
			}
			else if (map[y][x] == 1) {
				el.innerHTML += "<div class='fonar'></div>";
			}
			else if (map[y][x] == 7) {
				el.innerHTML += "<div class='grob'></div>";
			}
		}
		el.innerHTML += "<br>";
	}
    win()
}
function win(){
    	if (sc == 4){
	    map[man.y][man.x] = 7;
	    setInterval(function tt(){alert("LOL, U WIN to " + i + "сек" )
        location.reload()
        drawWorld()
        }, 100)
        clearInterval(tt)
	}
}

drawWorld();
temp = map[man.y][man.x];

document.onkeydown = function(event){
	if (event.keyCode === 37){ //LEFT
		if ( map[man.y][man.x-1] !== 0){
		    map[man.y][man.x] = temp;
		    temp = map[man.y][man.x-1];
			man.x--;
			map[man.y][man.x] = 5;
			drawWorld();
		}
	}
	else if (event.keyCode === 38){ //UP
		if ( map[man.y-1][man.x] !== 0){
		    map[man.y][man.x] = temp;
		    temp = map[man.y-1][man.x];
			man.y--;
			map[man.y][man.x] = 5;
			drawWorld();
		}
	}
	else if (event.keyCode === 39){ //RIGHT
		if ( map[man.y][man.x+1] !== 0){
		    map[man.y][man.x] = temp;
		    temp = map[man.y][man.x+1];
			man.x++;
			map[man.y][man.x] = 5;
			drawWorld();
		}
	}
	else if (event.keyCode === 40){ //DOWN
		if ( map[man.y+1][man.x] !== 0){
		    map[man.y][man.x] = temp;
		    temp = map[man.y+1][man.x];
 			man.y++;
			map[man.y][man.x] = 5;
			drawWorld();
		}
	}
	else if (event.keyCode === 32){ //CHECK

	    if ( temp == 2){
	         map[man.y][man.x] = 4;
	         map[man.y-1][man.x-1] = 4;
	         map[man.y][man.x-1] = 4;
	         map[man.y+1][man.x-1] = 4;
	         map[man.y-1][man.x] = 4;
	         map[man.y+1][man.x] = 4;
	         map[man.y-1][man.x+1] = 4;
	         map[man.y][man.x+1] = 4;
	         map[man.y+1][man.x+1] = 4;
	         map[man.y][man.x] = temp;
	         map[man.y][man.x] = 1;
	         temp = map[man.y][man.x];
	         sc++
	         i+=10
	         drawWorld();
	         }
	    if( temp == 3 || temp == 4){
	        map[man.y][man.x] = temp;
		    temp = map[man.y][man.x];


		    leve = map[man.y-1][man.x-1]
	        le = map[man.y][man.x-1]
	        vnle = map[man.y+1][man.x-1] ;
	        ve = map[man.y-1][man.x];
	        vn = map[man.y+1][man.x];
	        vepr = map[man.y-1][man.x+1];
	        pr = map[man.y][man.x+1];
	        prvn = map[man.y+1][man.x+1];

            if (map[man.y-1][man.x-1] == 2){
                    map[man.y-1][man.x-1] = 1;
                    drawWorld()
            }
            if (map[man.y][man.x-1] == 2){
                    map[man.y][man.x-1] = 1;
                    drawWorld()
            }
            if (map[man.y+1][man.x-1] == 2){
                    map[man.y+1][man.x-1] = 1;
                    drawWorld()
            }
            if (map[man.y-1][man.x] == 2){
                    map[man.y-1][man.x] = 1;
                    drawWorld()
            }
            if (map[man.y+1][man.x] == 2){
                    map[man.y+1][man.x] = 1;
                    drawWorld()
            }
            if (map[man.y-1][man.x+1] == 2){
                    map[man.y-1][man.x+1] = 1;
                    drawWorld()
            }
            if (map[man.y][man.x+1] == 2){
                    map[man.y][man.x+1] = 1;
                    drawWorld()
            }
            if (map[man.y+1][man.x+1] == 2){
                    map[man.y+1][man.x+1] = 1;
                    drawWorld()
            }


            map[man.y][man.x] = 6;////////




            drawWorld();
		    map[man.y-1][man.x-1] = leve;
	        map[man.y][man.x-1] = le;
	        map[man.y+1][man.x-1] = vnle;
	        map[man.y-1][man.x] = ve;
	        map[man.y+1][man.x] = vn;
	        map[man.y-1][man.x+1] = vepr;
	        map[man.y][man.x+1] = pr;
	        map[man.y+1][man.x+1] = prvn;///////
	        i -= 5


	    }
	}
	console.log(map)
};
function doIt() {
    i = 100;
    var idInt = setInterval(function() {
        if (i <= 20) {
            document.getElementById("siteTime").style.color = "red";
        }
        document.getElementById("siteTime").innerHTML = i;
        if (i == 0 || i < 0) {
            clearInterval(idInt);
            map[man.y][man.x] = 7;
            drawWorld()
            setInterval(function t(){ alert("LOL, U DIE(")
            location.reload()
            }, 100)
            clearInterval(t)
           }
        i = i - 1;
    }, 1000);
}


if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", Acsell, false);
}
else{
console.log("DeviceMotionEvent is not supported");
}

function Acsell(event){
if (Math.round(event.gamma) > 15){ // up
    breakfeast = 'up'
}
if (Math.round(event.gamma) < -15){ // down
    breakfeast = 'down'
}
if (Math.round(event.beta) > 15){// right
    breakfeast = 'right'
}
if (Math.round(event.beta) < -15){//left
    breakfeast = 'left'
}
}

function l(){
    if ( map[man.y][man.x-1] !== 0){
	    map[man.y][man.x] = temp;
	    temp = map[man.y][man.x-1];
	    man.x--;
	    map[man.y][man.x] = 5;
	    drawWorld();
	}
}
function r(){
	if ( map[man.y][man.x+1] !== 0){
	    map[man.y][man.x] = temp;
	    temp = map[man.y][man.x+1];
		man.x++;
		map[man.y][man.x] = 5;
		drawWorld();
	}
}
function u(){
	if ( map[man.y-1][man.x] !== 0){
	    map[man.y][man.x] = temp;
	    temp = map[man.y-1][man.x];
		man.y--;
		map[man.y][man.x] = 5;
		drawWorld();
	}
}
function d(){
	if ( map[man.y+1][man.x] !== 0){
	    map[man.y][man.x] = temp;
	    temp = map[man.y+1][man.x];
 		man.y++;
		map[man.y][man.x] = 5;
		drawWorld();
	}
}

setInterval(function(){
    switch(breakfeast){
        case 'left':{
            l()
            breakfeast = ''}
            break
        case 'up':{
            u()
            breakfeast = ''}
            break
        case 'right':{
            r()
            breakfeast = ''}
            break
        case 'down':{
            d()
            breakfeast = ''}
            break
        }
}, 500);

document.querySelector('#world').addEventListener('touchstart', function check(){

	    if ( temp == 2){
	         map[man.y][man.x] = 4;
	         map[man.y-1][man.x-1] = 4;
	         map[man.y][man.x-1] = 4;
	         map[man.y+1][man.x-1] = 4;
	         map[man.y-1][man.x] = 4;
	         map[man.y+1][man.x] = 4;
	         map[man.y-1][man.x+1] = 4;
	         map[man.y][man.x+1] = 4;
	         map[man.y+1][man.x+1] = 4;
	         map[man.y][man.x] = temp;
	         map[man.y][man.x] = 1;
	         temp = map[man.y][man.x];
	         sc++
	         i+=10
	         drawWorld();
	         }
	    if( temp == 3 || temp == 4){
	        map[man.y][man.x] = temp;
		    temp = map[man.y][man.x];


		    leve = map[man.y-1][man.x-1]
	        le = map[man.y][man.x-1]
	        vnle = map[man.y+1][man.x-1] ;
	        ve = map[man.y-1][man.x];
	        vn = map[man.y+1][man.x];
	        vepr = map[man.y-1][man.x+1];
	        pr = map[man.y][man.x+1];
	        prvn = map[man.y+1][man.x+1];

            if (map[man.y-1][man.x-1] == 2){
                    map[man.y-1][man.x-1] = 1;
                    drawWorld()
            }
            if (map[man.y][man.x-1] == 2){
                    map[man.y][man.x-1] = 1;
                    drawWorld()
            }
            if (map[man.y+1][man.x-1] == 2){
                    map[man.y+1][man.x-1] = 1;
                    drawWorld()
            }
            if (map[man.y-1][man.x] == 2){
                    map[man.y-1][man.x] = 1;
                    drawWorld()
            }
            if (map[man.y+1][man.x] == 2){
                    map[man.y+1][man.x] = 1;
                    drawWorld()
            }
            if (map[man.y-1][man.x+1] == 2){
                    map[man.y-1][man.x+1] = 1;
                    drawWorld()
            }
            if (map[man.y][man.x+1] == 2){
                    map[man.y][man.x+1] = 1;
                    drawWorld()
            }
            if (map[man.y+1][man.x+1] == 2){
                    map[man.y+1][man.x+1] = 1;
                    drawWorld()
            }


            map[man.y][man.x] = 6;////////


            drawWorld();
		    map[man.y-1][man.x-1] = leve;
	        map[man.y][man.x-1] = le;
	        map[man.y+1][man.x-1] = vnle;
	        map[man.y-1][man.x] = ve;
	        map[man.y+1][man.x] = vn;
	        map[man.y-1][man.x+1] = vepr;
	        map[man.y][man.x+1] = pr;
	        map[man.y+1][man.x+1] = prvn;///////
	        i -= 5
            }

	    }
	)

