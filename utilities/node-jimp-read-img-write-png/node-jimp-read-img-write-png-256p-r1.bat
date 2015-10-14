@echo off
rem tileXStart tileXFinish tileYStart tileYFinish << y decrements

rem The format of %TIME% is HH:MM:SS,CS for example 23:59:59,99
set STARTTIME=%TIME%

rem NORTH East
rem lat min 0 to max 59, lon 0 to 90
node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N0450_256P.IMG zz-moon-heightmaps-256p-ne 0 30 59 0

node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N0450_256P.IMG zz-moon-heightmaps-256p-ne 30 60 59 0

node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N0450_256P.IMG zz-moon-heightmaps-256p-ne 60 90 59 0

rem lat min 0 to max 59, lon 90 to 179 
node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N1350_256P.IMG zz-moon-heightmaps-256p-ne 90 120 59 0

node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N1350_256P.IMG zz-moon-heightmaps-256p-ne 120 150 59 0

node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N1350_256P.IMG zz-moon-heightmaps-256p-ne 150 180 69 0

rem



rem NORTH West
rem lat min 0 to max 60 , lon -90 to 0 
rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N3150_256P.IMG zz-moon-heightmaps-256p-nw -90 -60 59 0

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N3150_256P.IMG zz-moon-heightmaps-256p-nw -60 -30 59 0

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N3150_256P.IMG zz-moon-heightmaps-256p-nw -30 0 59 0


rem lat min 0 to max 60 , lon -180 to -90 
rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N2250_256P.IMG zz-moon-heightmaps-256p-nw -180 -150 59 0

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N2250_256P.IMG zz-moon-heightmaps-256p-nw -150 -120 59 0

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300N2250_256P.IMG zz-moon-heightmaps-256p-nw -120 -90 59 0

rem



rem SOUTH East

rem lat min -60 to max -1 , lon 0 to 90
rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S0450_256P.IMG zz-moon-heightmaps-256p-se 0 30 -1 -60

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S0450_256P.IMG zz-moon-heightmaps-256p-se 30 60 -1 -60

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S0450_256P.IMG zz-moon-heightmaps-256p-se 60 90 -1 -60


rem lat min 0 to max 60 , lon 90 to 179 
rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S1350_256P.IMG zz-moon-heightmaps-256p-se 90 120 -1 -60

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S1350_256P.IMG zz-moon-heightmaps-256p-se 120 150 -1 -60

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S1350_256P.IMG zz-moon-heightmaps-256p-se 150 180 -1 -60

rem



rem SOUTH West

rem lat min 0 to max 60 , lon -90 to 0 
rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S3150_256P.IMG zz-moon-heightmaps-256p-sw -90 -60 -1 -60

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S3150_256P.IMG zz-moon-heightmaps-256p-sw -60 -30 -1 -60

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S3150_256P.IMG zz-moon-heightmaps-256p-sw -30 0 -1 -60


rem lat min 0 to max 60 , lon -180 to -90 
rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S2250_256P.IMG zz-moon-heightmaps-256p-sw -180 -150 -1 -60

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S2250_256P.IMG zz-moon-heightmaps-256p-sw -150 -120 -1 -60

rem node node-jimp-read-img-write-png-256p-r1.js WAC_GLD100_E300S2250_256P.IMG zz-moon-heightmaps-256p-sw -120 -90 -1 -60

rem


set endtime=%TIME%

echo Start    : %STARTTIME%
echo Finish   : %ENDTIME%
