//By Jan Riedel
//Adafruit Feather Huzzah 8266 and RGBW LED strip

#include <ESP8266WiFi.h> // Include WiFi library
#include <ESP8266WebServer.h> // Include WebServer library
#include <FS.h>   // Include the SPIFFS library

// SSID of WiFi network and password of WiFi network
const char* ssid = "Wifi-Name";
const char* password = "WiFi-Password"; 
     
ESP8266WebServer server(80); // Starts the webserver at port 80

String getContentType(String filename); // convert the file extension to the MIME type
bool handleFileRead(String path);       // send the right file to the client (if it exists)

//Assigning variables for LED pins
uint8_t WHITEpin = 15;
uint8_t BLUEpin = 13;
uint8_t REDpin = 14;
uint8_t GREENpin = 12;

int red = 0;
int blue = 0;
int green = 0;

void setup()
{ 
  //Set LED pins to OUTPUT
  pinMode(WHITEpin, OUTPUT);
  pinMode(BLUEpin, OUTPUT);
  pinMode(REDpin, OUTPUT);
  pinMode(GREENpin, OUTPUT);

  //Initiate Serial monitor 
  Serial.begin(115200);
  Serial.println();
  
  //Initiate WiFi in Station Mode
  Serial.printf("Connecting to %s ", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" connected");

  SPIFFS.begin();                           // Start the SPI Flash Files System

  server.onNotFound([]() {                              // If the client requests any URI
    if (!handleFileRead(server.uri()))                  // send it if it exists
      server.send(404, "text/plain", "404: Not Found"); // otherwise, respond with a 404 (Not Found) error
  });

  server.begin(); // Start webserver
  Serial.printf("Web server started, open %s in a web browser\n", WiFi.localIP().toString().c_str());

  Serial.println("Light Status: OFF | Blue Status: OFF | RED Status: OFF | GREEN Status: OFF");
}

//Check status of buttons and control LEDS
void loop() 
{
  server.handleClient();
  if (server.hasArg("red")) {
    red = server.arg("red").toInt() * 4;
  }

  if (server.hasArg("blue")) {
    blue = server.arg("blue").toInt() * 4;
  }

  if (server.hasArg("green")) {
    green = server.arg("green").toInt() * 4;
  }

  Serial.print("Red is: ");
  Serial.println(red);
  Serial.print("Blue is: ");
  Serial.println(blue);
  Serial.print("Green is: ");
  Serial.println(green);
  
  analogWrite(REDpin, red); 
  analogWrite(BLUEpin, blue); 
  analogWrite(GREENpin, green); 
  
}

//Definition of custom functions for calling certain URLs and turning the alarm light on
//Alarm light function that slow turns on LEDs, mimicking sunrise;

String getContentType(String filename) { // convert the file extension to the MIME type
  if (filename.endsWith(".html")) return "text/html";
  else if (filename.endsWith(".css")) return "text/css";
  else if (filename.endsWith(".js")) return "application/javascript";
  else if (filename.endsWith(".ico")) return "image/x-icon";
  return "text/plain";
}

bool handleFileRead(String path) { // send the right file to the client (if it exists)
  Serial.println("handleFileRead: " + path);
  if (path.endsWith("/")) path += "index.html";         // If a folder is requested, send the index file
  String contentType = getContentType(path);            // Get the MIME type
  if (SPIFFS.exists(path)) {                            // If the file exists
    File file = SPIFFS.open(path, "r");                 // Open it
    size_t sent = server.streamFile(file, contentType); // And send it to the client
    file.close();                                       // Then close the file again
    return true;
  }
  Serial.println("\tFile Not Found");
  return false;                                         // If the file doesn't exist, return false
}
