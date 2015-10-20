[Jaanga]( http://jaanga.github.io/ ) &raquo;

&#127772; [Moon Read Me]( index.html )
===

<span style=display:none; >[You are now in GitHub source code view - click this link to view Read Me file as a web page]( http://jaanga.github.io/moon/ "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/jaanga/moon/'; value='You are now in GitHub web page view - Click this button to view Read Me file as source code' >

<iframe id=ifr src="iframe-carousel-r2.html" width=100% height=600px >_Sample Jaanga Moon scripts viewable in web page view only_</iframe>  


## Concept

### Issues / Problems
<!--

The general format is an adaptation of the ideas developed in Alexander's _et al_ [A Patttern Language]( https://books.google.com/books?id=hwAHmktpk5IC&pg=PR10#v=onepage&q&f=false ) - as sammarized on page 10.

Each pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice.

patterns are descriptions of common problems and proposal for the solutions that can be used repeatedly every time the problem is encountered and producing an different outcome.

-->

Seeing Astronomy in Many Ways

* From Earth, we 'see' the Moon as a flat static one-sided disk. Yet we know it is a 3D orb with a surface full of complexity and changes.

Access to STEM

* People do not always find it an easy thing trying to acquire skills in science, technology, engineering and math ( [STEM]( https://en.wikipedia.org/wiki/Science,_Technology,_Engineering,_and_Mathematics ) )
* Computers and the Internet have allowed scientists to gather, store and share huge amounts of data, yet that data is often in huge highly inaccessible files and to examine the data compl  

Access to Data

* The tools to explore and discover things were once literally rocket science. Yet we know that the data is accessible and and the development tools easier than ever. 


### Mission
<!-- a statement of a rationale, applicable now as well as in the future -->

* To provide simple code that flies over the Moon in 3D and to see its craters and rills in detail
* To show the usually hidden backside of the moon as easily as the front side
* To proved software examples that only require a basic knowledge of HTML, CSS and JavaScript in order to get going and 'make it your own'
* To demonstrate that all this is possible in an environment that allows you to fork, embellish, share and publish online that is free and open source

STEM

* To provide real-world SREM tools that useful, informative and simple that you may fork, edit and share

### Vision
<!--  a descriptive picture of a desired future state -->

* To help you write code that helps you - and others - to discover new things about the Moon


# Apps

_Descriptions and links to the scripts developed so far._

## Moon Voyager

* The Moon as a 3D sphere
	* You can rotate, zoom and move the sphere
* 1440 x 720 data points
* Displays placards with the names of 97 important Moon locations according to the-moon.wikispaces.com

[Moon Voyager Read Me - Web Page]( http://jaanga.github.io/moon/voyager/ )  
[Moon Voyager Read Me - Source Code]( https://github.com/jaanga/moon/tree/gh-pages/voyager/ )  


## Moon Rover Mobile

* The Moon as a flat map - but in 3D
* Intended to be the lightest, fastest loading version of the flat map
	* But with the least detail

[Moon Rover Mobile Read Me - Web Page]( http://jaanga.github.io/moon/rover-mobile/ )  
[Moon Rover Mobile Read Me - Source Code]( https://github.com/jaanga/moon/tree/gh-pages/rover-mobile/ )  


## Moon Rover 64P

* 64 pixels per degree
* Good for touring the entire moon quite quickly
* This version was an early version in the current project
	* Will be updated in due course
	* Moon Rover 256P is a better tool for the moment

[Moon Rover 64P Read Me - Web Page]( http://jaanga.github.io/moon/rover-64p/ )  
[Moon Rover 64P Read Me - Source Code]( https://github.com/jaanga/moon/tree/gh-pages/rover-64p/ )  

## Moon Rover 256P

* 256 pixels per degree ~4.25 billion points of data
* Great detail views of the moon


[Moon Rover 256P Read Me - Web Page]( http://jaanga.github.io/moon/rover-256p/ )  
[Moon Rover 256P Read Me - Source Code]( https://github.com/jaanga/moon/tree/gh-pages/rover-256p/ )  

## Moon Gazetteer

* Text files with lunar place names, location and other data
* Utilities for dealing with these files

[Moon Gazetteer Read Me - Web Page]( http://jaanga.github.io/moon/gazetteer/ )  
[Moon Gazetteer Read Me - Source Code]( https://github.com/jaanga/moon/tree/gh-pages/gazetteer/ )  

## Moon Utilities

* Node.js scripts for reading binary IMG heightmap files, creating PNG files and saving these to disk
* Scripts for viewing and testing the files

[Moon Utilities Read Me - Web Page]( http://jaanga.github.io/moon/utilities/ )  
[Moon Utilities Read Me - Source Code]( https://github.com/jaanga/moon/tree/gh-pages/utilities/ )  

## Moon Heightmaps

_Perhaps the ost important aspect of this project_

* Heightmaps for the Moon in a variety of sizes and formats
* All data simply and freely accessible via GitHub


<hr>

_The following sections are very much a work in progress_

## Coding Style Guidelines

The code should be as close as possible to readable English

* Descriptive, informative variable names
* Lots of white space
	* Follow the Mr.doob Coding Style
	* Good: x = 23 * y + 54 * z
	* Not so good: x=23*y+54*z
	* Remember: JavaScript is compiled on the fly: no longer need to worry about whitespace slowing things down
* Minimum notation or use of symbols
	* Good: y = Math.floor( x );
	Not so good: y = ~~x;
* Everything in one file
	* No need to have multiple files open 
	* No need to keep looking all over the place 
* Emphasis on the use of one tool: JavaScript
	* The Document Object Model(DOM) is your friend
	* Use the DOM to add HTML and CSS to the document on the fly
* Very limited usage of libraries
	* No need to know Three.js and jQuery and whatever before you begin
	* Knowing some JavaScript and something about a single library should be good enough in most instances
* Lots of small apps
	* Not one big app
* Emphasis on astronomy, physics, math but not coding
	We seek great visualizations not great code
* Sharing is of the essence
	* Fork, improve, share is the mantra
	* GitHub is the platform

### Various Quirks

* CSS tags are in alphabetical order

* Latitude and longitude are always specified in this order
	* lat = 2 * x
	* lon = 3 * y
* X and y are always specified in this order
	* x = lon - 10;
	* y = lat + 5;
* Width and height are always specified in this order 
	* width = lon / 2
	* height = lat / 3

## User Experience Overview

_This first draft is in response to a message from Abe. It was a message to me, but I am using it a spur for thought as to what we should be asking of students._

### Colors, Textures and Shading

> Abe: >> I don't know if it's possible to get RGB or albedo maps for the surface but if not, it would seem more natural to represent the surface as a flat grey than to display the height map as the color.   For computer graphics people who are used to looking at height maps, it's not so weird but for the average person, I think the coloring might be a bit strange.  If you go with a grey surface coloring, then the background should probably be either a neutral gradient or be something spacey like a star field. 

* You have an array of tools including
	* Lambert and Phong materials
	* Textures
	* lights, shade and shadows 
	* Bump maps and shaders

* You have a bunch of needs
	* 'Realistic' or green cheese
	* Gravity, magnetism and other fields
	* Geology, current and historical
	* Human activities. current and historical

You want many simple cookbook examples that demonstrate the use and effectives of all of the above.

### Gamification / Exaggeration

> Abe: >> It would be nice to know what the height exaggeration factor is and perhaps control it to yield a more realistic representation.

* Height indicator / control
	* Every script that exaggerates height should have a slider bar or similar mechanism that enables you to play with and control the exaggeration.
	* It is important to remember that when viewing the Moon as a whole object - an object with a radius of 1728 km and 'bumps' of two or three km at most - that the exaggeration scale should be set to zero to be 'real'
		* Repeat: the most realistic representation of height when looking at representation of the Earth or moon that is a few centimeters across is zero.
		* Any differences are less than 0.01 mm.


### Camera Motion

> Abe: >> Is it possible to have the roving motion smoothly animate rather than jumping discretely?  The jumps are a little bit jarring and sometimes a bit hard to follow.

A recent release of the JavaScript library we use for 3D - Three.js - very much improved the number of vertices that can be manipulated on screen in real-time.
R71 could comfortably handle a mesh with 65,536 vertices - or a dimension of 256 x 256.
R72 pushed the number to over a million or 1024 x 1024 that render at 60 fps or close to that (depends very much on how good a GPU your computer has).
This good number of vertices makes for some very satisfying renderings that zoom pan and rotate quite delightfully.

There are are still issues. It would be nice to have many millions of pixels, and in a few years we will likely have this. 
But first we have to deal with what we have at hand. And an important consideration becomes the way we come the camera over the terrain.

As of this writing the NASA data is gathered from image files with 256 x 256 pixels. 
Every time the camera moves to a new location, Moon Rover loads a 4 x 4 grid or 16 images.
Any time the camera target moves outside that current grid a fresh row or column of 1 x 4 images has to be loaded and one of the existing columns for rows has to be discarded.
This load, in essence, dictates that the camera moves in 256 pixels jumps or one quarter of the mesh area 
The issue is that this is too is a jump for the eyes. The eye cannot track the movement of a particular crater or rill when the displacement is that great.

Forthcoming revisions will load a 4 x 5 grid of images and crop down to 4 x 4. in this way, the camera can even move a row or column of a single pixels per iteration.
The interesting thing then is that the movement ends up being so precise that is takes forever and a day to traverse a large swath of the Moon.

The ideal would that if you are going click, click, click that the movements would be quite small perhaps 4 to 8 pixels at time.
But if you are holding down the the movement might bump up to 32 or 64 pixels per iteration.

Good camera movement takes good coding, tools that have excellent user experience and excellent camera peeps. Let's make this happen!



## Pedagogy

Every script should have a 'things to do' sections relating to the issues addressed in the concept/mission/vision statement

* Coding
* User Experience
* Physics, math, geology, astronomy and more 


## Links

[Wikipedia: Moon]( https://en.wikipedia.org/wiki/Moon )

[The Moon Wiki]( http://the-moon.wikispaces.com/Introduction )

[Multiple studies address riddles of the Moon's origin]( http://www.bbc.com/news/science-environment-32219494 )


## Copyright and License

Copyright © 2015 Jaanga authors

Jaanga software is available under the [MIT License]( http://en.wikipedia.org/wiki/MIT_License) which states:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The software is provided 'as is', without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement.
In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.


<center title="Waxing Gibbous Moon" >
# &#127764;
</center>
