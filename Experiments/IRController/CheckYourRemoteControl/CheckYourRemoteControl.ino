#include <IRremote.h>

int RECV_PIN = 9;

// 
IRrecv irrecv(RECV_PIN);
decode_results results;

void setup()
{
  Serial.begin(9600);
  irrecv.enableIRIn(); // Initiate the IR Receiver

  Serial.println("Ready to receive...");
}

void loop()
{
  // Check the IR. Does it have something?  
  if (irrecv.decode(&results))
    { // If so.. 
     Serial.println("Take note. It is the code for this action: ");
     Serial.print(results.value);
     irrecv.resume(); // Ready to receive the next value
    }
}
