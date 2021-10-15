// express server
const express = require('express')
const app = express()
const port = 3111

app.use(express.static('www'));

// web socket
const socket = require('socket.io');
const io = socket(3133, {
  transports: ['websocket']
});

// Load storage
const {firebase, database, db} = require('./db');


function setPixel(x,y,fill,id) {
  let ref = database.ref(db, `pixels/${x}-${y}`);
  database.set(ref, {fill,id});
}



io.sockets.on('connection', socket => {

  if( socket.connected )
  {
    socket.on('paint', function(data) {
      setPixel(data.x,data.y,data.fill, socket.id);
    });

    let pixels = database.ref(db, 'pixels');
    database.onChildChanged(pixels, function( snapshot, prevChildName ) {
      console.log( snapshot.val(), prevChildName );
    }); 


    socket.on('disconnect', function (reason) {
      console.log(`closing connection ${reason}`);
    })
  }
});





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})