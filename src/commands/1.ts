import { ICommand } from "../typings";
import Light from "../structures/userService";

export default class LightOnCommand implements ICommand{
    constructor (private light: Light){};

    execute():void{
        this.light.turnOn();
    }    
}