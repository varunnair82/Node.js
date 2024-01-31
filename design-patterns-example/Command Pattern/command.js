// Command interface
class Command {
    execute() {
      // To be implemented by concrete commands
    }
}
  
// Concrete Command 1
class LightOnCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOn();
    }
}
  
// Concrete Command 2
class LightOffCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOff();
    }
}
  
// Receiver
class Light {
    turnOn() {
      console.log('Light is ON');
    }
  
    turnOff() {
      console.log('Light is OFF');
    }
}
  
// Invoker
class RemoteControl {
    constructor() {
    }
  
    // setCommand(command) {
    //   this.command = command;
    // }
  
    pressButton(command) {
      command.execute();
    }
}


module.exports = {
    Command,
    LightOnCommand,
    LightOffCommand,
    Light,
    RemoteControl
}

  