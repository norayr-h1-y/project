
 var express = require('express');
 var app = express();
 var server = require('http').Server(app);
 var io = require('socket.io')(server);
 
 app.use(express.static("."));
 app.get('/', function (req, res) {
     res.redirect('index.html');
 });
 server.listen(3000);
 
 var Grass = require("./grass.js");
 var Xotaker = require("./xotaker.js");
 var Gishatich = require("./gishatich.js");
 var Aryuc = require("./aryuc.js");
 var Pat = require("./pat.js");
  grassArr = [];
 var c = 0;
 
 
  matrix = [
     // [1, 0, 1, 0, 1],
     // [1, 0, 0, 0, 0],
     // [0, 1, 0, 1, 0],
     // [0, 0, 1, 0, 0],
     // [1, 1, 0, 0, 0],
     // [1, 1, 0, 0, 0],
     // [1, 1, 0, 0, 2]
 ];
  gishatichner = []
  xotakerner = []
  aryucner = []
  pater = []
  g = 20

for (var y = 0; y < g; y++) {
    matrix.push([]);
    for (var x = 0; x < g; x++) {
        matrix[y].push(0);
    }
}


for (var i = 0; i < 250; i++) {
    var a = Math.floor(Math.random() * g);
    var b = Math.floor(Math.random() * g);
    matrix[a][b] = 1;
}

for (var i = 0; i < 50; i++) {
    var a = Math.floor(Math.random() * g);
    var b = Math.floor(Math.random() * g);
    matrix[a][b] = 2;
}
for (var i = 0; i < 15; i++) {
    var a = Math.floor(Math.random() * g);
    var b = Math.floor(Math.random() * g);
    matrix[a][b] = 3;
}
for (var i = 0; i < 4; i++) {
    var a = Math.floor(Math.random() * g);
    var b = Math.floor(Math.random() * g);
    matrix[a][b] = 4;
}
for (var i = 0; i < 8; i++) {

    var c = [5, 6, 7, 8, 9, 10, 11, 12];
    var a = c[i];//c[i] //Math.floor(Math.random()*g)
    var b = 5;//c[i] //Math.floor(Math.random()*g)
    console.log(i, a, b);
    matrix[a][b] = 5;
    matrix[b][a] = 5;
    var b = 12;
    matrix[a][b] = 5;
    matrix[b][a] = 5;
}


/*var matrix = [];
for(var y = 0; y < g; y++){
    matrix.push([]);
    for(var x = 0; x < g; x++){
        matrix[y].push(
            Math.round(Math.random() * 5)
        );
    }
}*/






    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                xotakerner.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gishatichner.push(new Gishatich(x, y))
            }
            else if (matrix[y][x] == 4) {
                aryucner.push(new Aryuc(x, y))

            } else if (matrix[y][x] == 5) {
                pater.push(new Pat(x, y))

            }
        }
    }



function drawServerayin() {
    for (var i in grassArr) {
        grassArr[i].bazmanal();
        io.sockets.emit("stats", {type:"xot", count: grassArr.length})
    }
    // for(var i in xotakerner){
    //   xotakerner[i].sharjvel();
    // }
    for (var i in gishatichner) {
        gishatichner[i].eat();
    }
    for (var i in aryucner) {
        aryucner[i].eat();
    }
    for (var i in aryucner) {
        if (aryucner[i].energy >= 15) {
            aryucner[i].bazmanal();
        }
        else if (aryucner[i].energy <= 0) {
            aryucner[i].mahanal(i);
        }
    }
    for (var i in gishatichner) {
        if (gishatichner[i].energy >= 20) {
            gishatichner[i].bazmanal();
            io.sockets.emit("stats", {type:"gishatic", count: gishatichner.length})
        }
        else if (gishatichner[i].energy <= 0) {
            gishatichner[i].mahanal(i);
        }
    }
    for (var i in xotakerner) {
        xotakerner[i].eat();

    }
    for (var i in xotakerner) {
        if (xotakerner[i].energy >= 10) {
            xotakerner[i].bazmanal();
            io.sockets.emit("stats", {type:"xotaker", count: xotakerner.length})
        }
        else if (xotakerner[i].energy <= 0) {

            xotakerner[i].mahanal(i);
        }
    }
    
    for(var i in pater){
        pater[i].kill();
    }
    io.sockets.emit("matrix", matrix)
}


setInterval(drawServerayin, 250);

io.sockets.on("connection", function (socket) {
    socket.on("send", function(data) {
        console.log(data)
    })
}); 

weather = "Garun"

function Exanak() {
    if (weather == "Garun"){
        weather = "Amar"
    }
    else if (weather == "Amar") {
        weather = "Ashun"
    }
    else if (weather == "Ashun") {
        weather = "Dzmer"
    }
    else if (weather == "Dzmer") {
        weather = "Garun"
    }
    io.sockets.emit("weather", weather)
}

 setInterval(Exanak, 900)