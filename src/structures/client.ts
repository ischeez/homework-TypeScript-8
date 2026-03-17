import { ICommand } from "../typings";

export default class RemoteControl {
    private commands : Map <string, ICommand> = new Map();

    setCommand(buttonId: string,  command: ICommand): void{
        this.commands.set(buttonId, command )
    }

    pressButton(buttonId: string){
        const command = this.commands.get(buttonId);

        if (command) {
            command.execute();
        } else {
            console.log('Неизвестная ошибка');
        }
    } 
}