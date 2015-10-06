

	var fs = require( 'fs' );
// https://github.com/oliver-moran
	var Jimp = require( '../node_modules/jimp' );

	var startTime = Date.now();

	var dirName = '/16p'

	var widthSource = 5760;
	var heightSource = 2880;

	var widthDestination = 180;
	var heightDestination = 180;

	var target = new Jimp( dirName + '/0/16p-0-0.png', function( err, img ) {

	var image = new Jimp( 500, 500, 0xff00ffff, function ( err, image ) {
    // this image is 256 x 256, every pixel is set to 0x00000000

		this.composite( target, 10, 10, 100, 100 );

	}).write(  'test.png', cb );


} );

	function cb() {

console.log( 'written' );

}