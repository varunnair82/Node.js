  const {Command, LightOnCommand, LightOffCommand, Light, RemoteControl} = require("./command");
  
  // Client code
  const light = new Light();
  const lightOnCommand = new LightOnCommand(light);
  const lightOffCommand = new LightOffCommand(light);
  
  const remote = new RemoteControl();
  
  // Turning the light on
  //remote.setCommand(lightOnCommand);
  remote.pressButton(lightOnCommand); // Output: Light is ON
  
  // Turning the light off
  //remote.setCommand(lightOffCommand);
  remote.pressButton(lightOffCommand); // Output: Light is OFF