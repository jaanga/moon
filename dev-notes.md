Moon Dev Notes
===


2015-10-17 ~ Theo

The various modules all seem to be operational.
While they all should have much further development, they are all at a stage good enough t start showing.
Yay!


2015-10-14 ~ Theo

Fixed:

* Big issue: vertical artifacts at first line of every IMG file
	* Is it the data or is it me??  << it's the data
	* 2015-10-13 ~ half fixed


2015-10-14 ~ Theo

It looks like some of the WAC_GLD100 files have TWO lines of headers.

I don't yet know how to check for this. Other than inspecting PNG files for a black line at the top. ;-(
 

2015-10-12 ~ Theo

Working on utilities/img-data-parser/img-data-parser-r1.html

Looks like the first line of each IMG file is a header line

This agrees with the file size reported by Windows Explorer

23040 bytes * 2 per number * 15360 lines  + 1 header line = 707834880 bytes

Ugh! This means that every fele I produced has an off by one error. Thus they all need redoing - which is not too time consuming. 
All will need re-uploading to GitHub which is time-consuming!


***

How about the polar files?

Windows says file size = 494,331,124

360 * 256 * 2 * 30 * 257 = 1,421,107,200

Numbers do not agree

http://wms.lroc.asu.edu/lroc/view_rdr_product/WAC_GLD100_P900N0000_256P shows a round image

What is the data format on the IMG of the round image? This is going to take some work.

Wrote utility that reads first line of IMG files img-read-first-line.html

MAP_PROJECTION_TYPE = "POLAR STEREOGRAPHIC"

>> http://hirise-pds.lpl.arizona.edu/PDS/CATALOG/DSMAP.CAT



Perhaps could use 64P images in the mean time.


2015-10-11 ~ Theo
Moon height data repository names

moon-heightmaps-256p-ne
moon-heightmaps-256p-nw
moon-heightmaps-256p-se
moon-heightmaps-256p-sw
