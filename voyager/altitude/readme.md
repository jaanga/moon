[Jaanga]( http://jaanga.github.io/ ) &raquo; [Moon]( http://jaanga.github.io/moon/ ) &raquo; [Voyager]( http://jaanga.github.io/moon/voyager/ ) &raquo;

[Moon Voyager Altitude Read Me]( index.html )
===

<span style=display:none; >[You are now in GitHub source code view - click here to view Read Me file as a web page]( http://jaanga.github.io/moon/voyager/altitude/index.html "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click here to view Read Me file as source code' onclick=window.location.href='https://github.com/jaanga/moon/tree/gh-pages/voyager/altitude'; />


<iframe src="http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://jaanga.github.io/moon/voyager/altitude/moon-voyager-altitude-r1-1.html" width=100% height=600px ></iframe>  
####_Moon Voyager - Dev revision - Code Edit View_ /  [Fullscreen]( http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://jaanga.github.io/moon/voyager/altitude/moon-voyager-altitude-r1-1.html )


[Moon Voyager Alitude Demo Full Screen - Dev]( http://jaanga.github.io/moon/voyager/altitude/dev/ )


## Concept

### Issue
It is not easy to ascertain that one geographic area is higher or lower than another region some distance away

### Mission

To display the landscape so that different elevations have different colors

### Notes

This revision uses the older THREE.SphereGeometry and is slow and shows onl 720  360 data points. 
As and when we figure out how to do vertex colors in THREE.SphereBufferGeometry then the scripts will be faster and have higher resolution



## Things to Do

* Edit the auto rotation variable to change the speed of the spin of the moon
* Edit heighPlacard to move the location signboards up or down
* Edit the default height scale



## Features

* 720 x 360 terrain data points with 255 heights
* 'Travel' over the moon in 3D faster than any satellite
	* Use one finger to rotate
	* Pinch with two fingers to zoom in and out
	* use three fingers to pan
* Gazetteer takes you to 97 locations
	* All locations available via a drop-down list
	* Clicking a location in the drop-down takes you to the location

* Slider to adjust vertical scale in real-time
* Camera position follows cursor keys
	* Latest camera position is used to control camera position when using cursor keys 

<!--
* Supports permalinks
	* [Copernicus]( http://jaanga.github.io/moon-voyager/moon-rover-mobile/dev/index.html#20 )
	* [Gassendi]( http://jaanga.github.io/terrain-r2/viewers/moon-rover-mobile/dev/index.html#30 )
	* [Tycho]( http://jaanga.github.io/terrain-r2/viewers/moon-rover-mobile/dev/index.html#93 )
-->

## Road Map

* 'Zoom All' and 'Zoom In' buttons
* Toggle between short and long gazetteers
* Links to Data sources such as WikiMoon for each location
* First person control moon flyover capability
* Supports permalinks
* Click on a placard to go there
* Permalinks to set target and camera positions
* Sunlight and shadows
* Textures and materials to 3D terrain
* 3D models of lunar landers in their locations
* Locations of Apollo photographs - perhaps as geojson data

## Issues

* Text flashes annoyingly as it moves
 
## Sources

Many thanks to:

Gazetteer data sources:

* [Gazetteer of Planetary Nomenclature]( http://planetarynames.wr.usgs.gov/Page/MOON/target )
* [Lunar 100]( http://the-moon.wikispaces.com/Lunar+100 )

Lunar height data source:

[Lunar Reconnaissance Orbiter Camera]( http://wms.lroc.asu.edu/lroc/view_rdr/WAC_GLD100 )


<hr>




