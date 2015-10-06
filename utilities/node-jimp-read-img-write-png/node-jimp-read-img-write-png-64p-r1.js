
	var fs = require( 'fs' );
// https://github.com/oliver-moran
	var Jimp = require( '../node_modules/jimp' );

	var startTime = Date.now();

	var fileName = 'c:/temp/WAC_GLD100_E000N1800_064P.IMG';
//	var fileName = 'c:/temp/WAC_GLD100_E000N1800_016P.IMG';

//	var dirName = __dirname + dirName;
	var dirName = 'c:/temp/moon-heightmaps/64p/';
	var name = '64p-';

	var widthSource = 23040; // 64p
	var heightSource = 11520;

	var widthDestination = 23040;
	var heightDestination = 11520;

	var widthDestination = 256;
	var heightDestination = 256;

	var byteArray;
	var bitmap;

// Need to split into two runs
	var tilesX = widthSource / widthDestination; // 45
	var tilesY = heightSource / heightDestination;

	var tileX = 45;
	var tileY = 0;

	init();

	function init() {

/*

		if ( !fs.existsSync( dirName ) ) {

			fs.mkdirSync( dirName );

		}

console.log( 'dirname: ', dirName );

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

		for ( var x = 0; x < tilesX; x++ ) {

			if ( !fs.existsSync( dirName + '/' + x ) ) {

				fs.mkdirSync( dirName + '/' + x );

			}

		}

		processTiles();

	}

	function processTiles() {

//console.log( 'tx', tileX, 'ty', tileY, 's', tilesX, tilesY);

		if ( tileY < tilesY && tileX < tilesX ) {

			tileY++;

			writePNG( tileX, tileY - 1 );


		} else if ( tileX < tilesX - 1 ) {

			tileX++;
			tileY = 0;

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

			tname = name + tX + '-' + tY + '.png';

		}).write( dirName + '/' + tX + '/' + tname, callbackWrite( tname, min, max ) );

	}

	function callbackWrite( txt, min, max ) {

console.log(  'write: ', txt );
//console.log( 'min: ', min, 'max: ', max );
//console.log( 'time', Date.now() - startTime, tileX, tileY );

		processTiles();

	}

