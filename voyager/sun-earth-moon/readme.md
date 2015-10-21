[Jaanga]( http://jaanga.github.io/ ) &raquo; [Moon]( http://jaanga.github.io/moon/ ) &raquo; [Voyager]( http://jaanga.github.io/moon/voyager/ ) &raquo;

[Sun Earth Moon Read Me]( index.html )
===

<span style=display:none; >[You are now in GitHub source code view - click here to view Read Me file as a web page]( http://jaanga.github.io/moon/voyager/sun-earth-moon/index.html "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/jaanga/moon/tree/gh-pages/voyager/sun-earth-moon/'; value='You are now in GitHub web page view - Click here to view Read Me file as source code' />


<iframe src="http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://jaanga.github.io/moon/voyager/sun-earth-moon/moon-voyager-sun-earth-moon-r1.html" width=100% height=600px ></iframe>  
####_Moon Voyager Sun Earth Moon - Dev revision - Code Edit View_ /  [Fullscreen]( http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://jaanga.github.io/moon/voyager/sun-earth-moon/moon-voyager-sun-earth-moon-r1.html )


[Moon Voyager Sun Earth Moon Demo Full Screen - Dev]( http://jaanga.github.io/moon/voyager/sun-earth-moon/dev/ )

## Concept

### Issues

'Why does the Moon have different phases?' is not an easy question to answer

### Mission

To display in real-time 3D how the moon orbits around the Earth while the Earth orbits the sun and both recive light from the Sun.

### Vision


## Features

* First camera displays Moon orbiting around the Earth which in turn is orbiting the sun
	* Sunlight on the Moon and Earth is visible
* Second camera is placed midway between Earth and Moon
	* Displays the phases of the Moon
* Simple keyboard events UI
	* Press C or spacebar to switch cameras
	* Press P to pause
	* Press 1, 2 or 3 to change speed of the orbiting
* Simulated star field

## Things to Do / Road Map

* More realistic orbits
	* Currently Earth and Moon follow highly simplified circular orbits
	* Could be to scale and follow real trajectories see [jsOrrery]( http://mgvez.github.io/jsorrery/ )
* Improve Three.js materials 
	* Texture corresponding to the actual albedo
	* Better choice of colors and shininess
	* Add textures for Earth and Sun
* Improve Three.js frames per second rate
	* Currently under 20 fps - not good
* Add different camera controllers
* Replace star field with star sphere

## Credits

The simplified orbit concept came from Chris Strom's [The Earth and the Moon in Three.js]( http://japhr.blogspot.com/2013/01/the-earth-and-moon-in-threejs.html )

