const { exec } = require( 'child_process' );
let port = process.env.PORT || 80;

exec( 'npm run build --port ' + port, ( e, o, s ) => {
    console.log( e );
    console.log( o );
    console.log( s );
} );