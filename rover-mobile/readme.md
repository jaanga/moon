[Jaanga]( http://jaanga.github.io/ ) &raquo; [Terrain 2]( http://jaanga.github.io/terrain-r2/index.html ) &raquo; [Viewers]( http://jaanga.github.io/terrain-r2/viewers/index.html ) &raquo;

[Moon Rover Mobile Read Me]( ./index.html )
===

<span style=display:none; >[You are now in GitHub source code view - click here to view Read Me file as a web page]( http://jaanga.github.io/terrain-r2/viewers/moon-rover-mobile/index.html "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click here to view Read Me file as source code' onclick=window.location.href='https://github.com/jaanga/terrain-r2/tree/gh-pages/viewers/moon-rover-mobile/'; />


<iframe src="http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://jaanga.github.io/terrain-r2/viewers/moon-rover-mobile/moon-rover-mobile-r5-2.html" width=100% height=500px ></iframe>  
####_Moon Rover - Dev revision - Code Edit View_ /  [Fullscreen]( http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://jaanga.github.io/terrain-r2/viewers/moon-rover-mobile/moon-rover-mobile-r5-2.html )


[Moon Rover Mobile R5 Demo Full Screen - Dev]( http://jaanga.github.io/terrain-r2/viewers/moon-rover-mobile/dev/ )

<!--
[Moon Rover Mobile R5 Demo Full Screen - Build]( http://jaanga.github.io/terrain-r2/viewers/moon-rover-mobile/build/ )
-->

## Concept

### Issue

From earth, we 'see' the moon as a flat one-sided disk. Yet we know it is a 3D orb with a surface full of complexity.

## Mission

To provide a way of flying over the sphere of the moon in 3D and to see its craters and rills in detail
To show the usually hidden backside of the moon as easily as the fromt



## Things to Do

* Edit the delta variable to change the speed of cursor movements
* Edit heighPlacard to move the location signboards up or down
* Edit the default height scale



## Features

* Fast loading, works on many mobile devices
* 5760 x 2880 terrain data points with 255 heights
* 'Travel' over the moon in 3D faster than any satellite
	* Use cursor keys to move around
	* Cursor keys 'wrap' to adjacent side a 0 and 180 degrees latitude and stop at 90 and -90 degrees latitude 
* Gazetteer takes you to 97 locations
	* All locations available via a drop-down list
		* Clicking a location in the drop-down takes you to the location
* 'Zoom All' and 'Zoom In' buttons
* Slider to adjust vertical scale in real-time
* Camera position follows cursor keys
	* Latest camera position is used to control camera position when using cursor keys 
* Supports permalinks
	* [Copernicus]( http://jaanga.github.io/terrain-r2/viewers/moon-rover-mobile/dev/index.html#20 )
	* [Gassendi]( http://jaanga.github.io/terrain-r2/viewers/moon-rover-mobile/dev/index.html#30 )
	* [Tycho]( http://jaanga.github.io/terrain-r2/viewers/moon-rover-mobile/dev/index.html#93 )

## Road Map

* Add gazetteer notes and lat & lon
* Toggle between short and long gazetteers
* Links to Data sources such as WikiMoon for each location
* First person control moon flyover capability
* Add first person camera controls
* Click on a placard to go there
* Permalinks to set target and camera positions
* Sunlight and shadows
* Textures and materials to 3D terrain
* 3D models of lunar landers in their locations
* Locations of Apollo photographs - perhaps as geojson data

## Issues

* 'Mind the gap' at zero degrees longitude
* All links should be set to fixed URLs so you can save script edits locally and add

## Sources

Many thanks to:

Gazetteer data sources:

* [Gazetteer of Planetary Nomenclature]( http://planetarynames.wr.usgs.gov/Page/MOON/target )
* [Lunar 100]( http://the-moon.wikispaces.com/Lunar+100 )

Lunar height data source:

[Lunar Reconnaissance Orbiter Camera]( http://wms.lroc.asu.edu/lroc/view_rdr/WAC_GLD100 )


<hr>




