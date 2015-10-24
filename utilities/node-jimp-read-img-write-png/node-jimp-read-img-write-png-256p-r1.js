// source http://wms.lroc.asu.edu/lroc/view_rdr/WAC_GLD100

	var fs = require( 'fs' );

// https://github.com/oliver-moran
	var Jimp = require( '../node_modules/jimp' );

// lat and lon from lower left

	var widthSource = 23040; // 256p ~ 90 degrees * 256 pixels
	var heightSource = 15360;

	var widthDestination = 256;
	var heightDestination = 256;

	var byteArray;
	var bitmap;

	var signEW;
	var signNS;

	var path = 'c:/temp/moon-heightmaps/';
	var namePrefix = '256p';
	var fileName = process.argv[ 2 ];

	var tileXStart = parseFloat( process.argv[ 4 ] );
	var tileXFinish = parseFloat( process.argv[ 5 ] );
	var tileX = tileXStart;

	var tileYStart = parseFloat( process.argv[ 6 ] );
	var tileYFinish = parseFloat( process.argv[ 7 ] );
	var tileY = tileYStart;

	var destinationDirName = path + process.argv[ 3 ];

	init();

	function init() {

		for ( var i = tileXStart; i < tileXFinish; i++ ) {

			dname = tileX >= 0 ? destinationDirName + '/+' + i : destinationDirName + '/' + i;

			if ( !fs.existsSync( dname ) ) {

				fs.mkdirSync( dname );

console.log( 'new dir: ', dname );

			}

		}

		fs.readFile( path + fileName, callbackReadFile );

	}

	function callbackReadFile( error, buffer ) {

		if ( error ) {

			throw console.log( error, buffer );

		}

// http://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer

		var arrayBuffer = new Uint8Array( buffer ).buffer;
		byteArray = new Int16Array( arrayBuffer );

console.log( '\nfileName: ', fileName );
console.log( 'byteArray.length: ', byteArray.length );

		processTiles();

	}

	function processTiles() {

//console.log( 'tx', tileX, '<', tileXFinish, 'ty', tileY, '>', tileYFinish, tileY > tileYFinish );

		if ( tileY >= tileYFinish && tileX < tileXFinish ) {

			writePNG( tileX, tileY-- );

		} else if ( tileX < tileXFinish - 1 ) {

			tileX++;
			tileY = tileYStart;

			processTiles();

		} else {

console.log(  'reading data complete - now processing the save' );

		}

	}

	function writePNG( tX, tY ) {

		var image = new Jimp( widthDestination, heightDestination, function( error, image ) {

			this.rgba( false ); // makes smaller file

			var index = 0;

			yTmp = tY < 0 ? tY + 1 : tY;

//console.log( 'yTmp', yTmp );

			var yStart = heightDestination * Math.abs( yTmp ) + 2; // decide manually if needs to be 1 or 2
			var yFinish = yStart + heightDestination;
			var xStart = widthDestination * tX;
			var xFinish = xStart + widthDestination;

			min = 1000000;
			max = 0;

			for ( var y = yStart; y < yFinish; y++ ) {
				for ( var x = xStart; x < xFinish; x++ ) {

					elevation = byteArray[ y * widthSource + x ] + 10000;

//					min = elevation < min ? elevation : min;
//					max = elevation > max ? elevation : max;

					this.bitmap.data[ index++ ] = ( elevation & 0x0000ff );
					this.bitmap.data[ index++ ] = ( elevation & 0x00ff00 ) >> 8; // * 256
					this.bitmap.data[ index++ ] = ( elevation & 0xff0000 ) >> 16; // * 65536
					this.bitmap.data[ index++ ] = 255;

				}
			}

			signEW = tX < 0 ? '' : '+';

			if ( tY > -1  ) {

				yy = tileYStart - tY ;

			} else {

				yy = yTmp - 1;

			}

			signNS = yy < 0 ? '' : '+';

			tname = namePrefix + signEW + tX + signNS + yy + '.png';

		}).write( destinationDirName + '/' + signEW + tX + '/' + tname, callbackWrite( tname, tX, tY, yy ) );

	}

	function callbackWrite( txt, tX, tY, yy ) {

//console.log(  'write: ', txt, tX, tY, yy );
//console.log( 'min: ', min, 'max: ', max );

		processTiles();

	}
