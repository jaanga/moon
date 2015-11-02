<span style=display:none; >[You are now in a GitHub source code view - click here to view this read me file as a web page]( http://jaanga.github.io/moon/voyager/image-map/index.html "View file as a web page." ) </span>
<input type=button value='You are now in a GitHub web page view - Click here to view this read me file as source code' onclick=window.location.href='https://github.com/jaanga/moon/tree/gh-pages/voyager/image-map/'; />

[Jaanga]( http://jaanga.github.io/ ) &raquo; [Outer Space]( http://jaanga.github.io/outer-space/ ) &raquo;  [Moon]( http://jaanga.github.io/moon/ ) &raquo; [Voyager]( http://jaanga.github.io/moon/voyager/ ) &raquo;

[Moon Voyager Image Map Read Me]( index.html )
===

[Moon Voyager Image Map Demo Full Screen - Dev]( http://jaanga.github.io/moon/voyager/image-map/dev/ )

## Web Page / Source Code

<iframe class=ifr src=http://jaanga.github.io/cookbook-html/templates/code-edit-view/code-edit-view-r2.html#http://jaanga.github.io/moon/voyager/image-map/moon-voyager-image-map-r1-2.html width=100% height=600px ></iframe>  
###### _Moon Voyager - Dev revision - Code Edit View_ / [Edit full screen]( http://jaanga.github.io/cookbook-html/templates/code-edit-view/code-edit-view-r2.html#http://jaanga.github.io/moon/voyager/image-map/moon-voyager-image-map-r1-2.html )


## Concept

### Issue

There are may existing, quite beautiful 2D Mercator projection maps of the Moon. 
Is it possible to drape or overlay these images over a 3D terrain and have attractive results?

## Mission



## Things to Do

* Ensure that the 2D images line up as closely as possible with the 3D landscape
* Locate cool overlays

Almost any Mercator projection map can be overlayed over a sphere and look good.
The Three.js texture option to materials makes this process very easy.

Image maps to look at:
* [images/TSE_1925_NYC_SL_TopographicMapLunarLimb-cropped.png]( http://jaanga.github.io/moon/voyager/image-map/dev/#http://jaanga.github.io/moon/images/TSE_1925_NYC_SL_TopographicMapLunarLimb-crop ) 18 MB 
* [moon 8k color brim16 4096x2048.jpg]( http://jaanga.github.io/moon/voyager/image-map/dev/#http://jaanga.github.io/moon/images/moon_8k_color_brim16_4096x2048.jpg ) 1.8 MB

Images need to be shifted 180 degrees:

* [PIA17037 hires.jpg]( http://jaanga.github.io/moon/voyager/image-map/dev/#http://jaanga.github.io/moon/images/PIA17037_hires.jpg ) 533 KB
* [LDEM 16.jpg]( http://jaanga.github.io/moon/voyager/image-map/dev/#http://jaanga.github.io/moon/images/LDEM_16.jpg ) 5MB


## Features

* 1440 x 720 terrain data points with 255 heights
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


## Contact

* jaanga@googlegroups.com

## Copyright and License

* [Copyright and License]( http://jaanga.github.io/#http://jaanga.github.io/jaanga-copyright-and-mit-license.md ) 

***

<center title="dingbat" >
# <a href=javascript:window.scrollTo(0,0); style=text-decoration:none; >❦</a>
</center>