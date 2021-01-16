const express = require( 'express' );
const app = express();
const { exec } = require( 'child_process' );
let port = process.env.PORT || 80;


app.get( '/', ( req, res ) => {
    res.send( 'Express working on' + port );
} )

app.listen( port, () => {
    console.log( 'Express running' );
} )

console.log( port );
exec( 'npm run start --port ' + port, ( e, o, s ) => {
    console.log( e );
    console.log( o );
    console.log( s );
} );