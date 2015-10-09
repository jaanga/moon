
	var fs = require( 'fs' );
// https://github.com/oliver-moran
	var Jimp = require( '../node_modules/jimp' );

	var startTime = Date.now();

//	var fileName = 'c:/temp/WAC_GLD100_E300N0450_256P.IMG'; // + 0-90
	var fileName = 'c:/temp/WAC_GLD100_E300N3150_256P.IMG'; //-90 to 0


//	var dirName = __dirname + dirName;
	var dirName = 'c:/temp/moon-heightmaps/256p/';
	var name = '256p';

	var widthSource = 23040; // 64p
	var heightSource = 15360;

	var widthDestination = 23040;
	var heightDestination = 15360;

	var widthDestination = 256;
	var heightDestination = 256;

	var byteArray;
	var bitmap;

			var signEW = '-';


// Need to split into three runs

	var tileX = 0;
//	var tileX = 30;
//	var tileX = 60;

	var tileY = 60;

//	var tilesX = 30; //widthSource / widthDestination;
//	var tilesX = 60; //widthSource / widthDestination;
//	var tilesX = widthSource / widthDestination;

	var tilesY = 60; // heightSource / heightDestination;

	init();

	function init() {

/* 
		for ( var i = 0; i < 180; i++ ) { // -181 for -

			name = dirName + '+' + i;
//			name = dirName + '-' + i;

			if ( !fs.existsSync( name ) ) {

				fs.mkdirSync( name );

console.log( 'dirname: ', name  );

			}

		}

*/

		fs.readFile( fileName, callbackReadFile );

	}

	function callbackReadFile( error, buffer ) {

		if ( error ) {

			throw console.log( error, buffer );

		}

// http://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer

		var arrayBuffer = new Uint8Array( buffer).buffer;
		byteArray = new Int16Array( arrayBuffer );

console.log( '\nfileName: ', fileName );
console.log( 'byteArray.length: ', byteArray.length );

		processTiles();

	}

	function processTiles() {

console.log( 'tx', tileX, 'ty', tileY, 's', tilesX, tilesY);

		if ( tileY > 0 && tileX < tilesX ) {

			tileY--;

			writePNG( tileX, tileY );


		} else if ( tileX < tilesX - 1 ) {

			tileX++;
			tileY = tilesY;

			processTiles();

		} else {

console.log(  'end of story' );

		}

	}

	function writePNG( tX, tY ) {

		var image = new Jimp( widthDestination, heightDestination, function( error, image ) {

			this.rgba( false ); // make smaller files

			var index = 0;

			var yStart = heightDestination * tY;
			var yFinish = yStart + heightDestination;
			var xStart = widthDestination * tX;
			var xFinish = xStart + widthDestination;

			min = 1000000;
			max = 0;

			for ( var y = yStart; y < yFinish; y++ ) {
				for ( var x = xStart; x < xFinish; x++ ) {

					elevation = byteArray[ y * widthSource + x ] + 10000;

					min = elevation < min ? elevation : min;
					max = elevation > max ? elevation : max;

					this.bitmap.data[ index++ ] = ( elevation & 0x0000ff );
					this.bitmap.data[ index++ ] = ( elevation & 0x00ff00 ) >> 8;
					this.bitmap.data[ index++ ] = ( elevation & 0xff0000 ) >> 16;
					this.bitmap.data[ index++ ] = 255;

				}
			}

			tname = name + signEW + tX + '+' + tY + '.png';

		}).write( dirName + '/' + signEW + tX + '/' + tname, callbackWrite( tname, min, max ) );

	}

	function callbackWrite( txt, min, max ) {

console.log(  'write: ', txt );
//console.log( 'min: ', min, 'max: ', max );
//console.log( 'time', Date.now() - startTime, tileX, tileY );

		processTiles();

	}

