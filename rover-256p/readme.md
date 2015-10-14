[Jaanga]( http://jaanga.github.io/ ) &raquo; [Moon]( http://jaanga.github.io/moon/ )  
[Moon Rover 256P Read Me]( ./index.html )
===
<span style=display:none; >[You are now in GitHub source code view - click this button to view Read Me file as a web page]( http://jaanga.github.io/moon/rover-256p/ "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click this button to view Read Me file as source code' onclick=window.location.href='https://github.com/jaanga/moon/tree/gh-pages/rover-256p/'; />

## Concept

### Mission

* To display the Moon in as much 3D detail as possible
* To enable you to explore craters and the dark side and more

### Vision


<iframe src="http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://jaanga.github.io/moon/rover-256p/moon-rover-256p-multi-tile-r1.html" width=100% height=500px ></iframe>  
####_Moon Rover - Dev revision - Code Edit View_ /  [Fullscreen]( http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://jaanga.github.io/moon/rover-256p/moon-rover-256p-multi-tile-r1.html )


[Moon Rover 256P Demo Full Screen - Dev]( http://jaanga.github.io/moon/rover-256p/dev/ )

[Moon Rover 256P Demo Full Screen - Build]( http://jaanga.github.io/moon/rover-256p/build/ )

## Accuracy
10917 km circumference of moon / ( 360 degrees * 256 pixels per degree ) = 0.11845703125 or each pixel represents 118 meters.

The next step up in accuracy will be to 300+ pixels per degree or, roughly, one pixel per hundred meters.
The effort appears to be fairly trivial but requires some hours of work.
This effort will be made as and when the time arises or whenever someone makes the request for this work to be done.

## Things to Do

Basic coding
* Change the default viewing angle
* Add sunlight, shade and shadow

Adding features
* Add the data between 60 and 90 degrees and -60 and -90 degrees
* Create a heads-up display that show altitude at the point hovered over
* Change the color of each pixel according to its elevation
* Add overlay images of maps
* Add gazetteer with all man-made objects on the moon with 3D models at their location
* Location map in the menu
* With 'click and go there' feature
* Create a slide show that zooms to different locations
* Add the Earth and Sun as spheres in the distance
* Create printable STL scale models
Exploring the Moon
* Look for signs of water or lave flow
* Look for signs of earthquakes
* One side of the Moon always faces the Earth. Can you tell which side this is just by looking? Why? 

## Issues

* Big issue: vertical artifacts at first line of every IMG file
	* Is it the data or is it me??  << it's the data
	* 2015-10-13 ~ half fixed
* Convoluted auto rotate code


## Sources

Many thanks to:

Gazetteer data sources:

* [Gazetteer of Planetary Nomenclature]( http://planetarynames.wr.usgs.gov/Page/MOON/target )
* [Lunar 100]( http://the-moon.wikispaces.com/Lunar+100 )

Lunar height data source:

[Lunar Reconnaissance Orbiter Camera]( http://wms.lroc.asu.edu/lroc/view_rdr/WAC_GLD100 )

