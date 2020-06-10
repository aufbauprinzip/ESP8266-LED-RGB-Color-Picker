# ESP8266-LED-RGB-Slider

This package of html, css and javascript lets you control your RGB-LED lights dynamically by just dialing-in the colors from your phone
or any other device that can run a browser. One benefit is that you don't need any third party service or a constant internet connection
like in the case with some IoT solutions! 

## Idea

Dialing-in the desired color from sliders for RGB via a web-based platform by running hmtl and javascript on a ESP8266.

## Setup & Functions

In this project I used an Adafruit Feather Huzzah ESP8266 which controls a RGBW LED strip through N-channel MOSFET's. The microcontroller is connected to the home WiFi network and can be controlled from any device that can run a browser. The html, css and javascript files will run from the SPI Flash File System (SPIFFS).

You can find more details on this project on https://www.aufbauprinzip.com/blog/

### Functions

<img src="images/demos.gif" width="200">

* web based interface (no internet connection needed) 
* background color of web interface changes according to colour setting
* Picked color name is being displayed on the web interface thanks to Chirag Metha's "Name that color" script

## Getting Started

Replace "WiFi-Name" and "WiFi-Password" in the arduino sketch with you credentials. Then just upload the sketch to your ESP8266 through the arduino IDE and then upload the html, css and javascript files through this tool

https://github.com/esp8266/arduino-esp8266fs-plugin/releases

## Disclaimer

This project uses "Name that color" (ntc.js) from Chirag Mehta (http://chir.ag/projects/ntc/) which is released under Creative Commons license. A few lines of code in ntc.js have been changed for this project. 


