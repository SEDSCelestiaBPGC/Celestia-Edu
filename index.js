const { exec } = require( 'child_process' );
let port = process.env.PORT || 80;

console.log( port );
exec( 'npm run start --port ' + port, ( e, o, s ) => {
    console.log( e );
    console.log( o );
    console.log( s );
} );