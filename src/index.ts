interface ICommand {
    execute():void
}

class Light {
    turnOn():void{
        console.log('Включение света')
    };
    turnOff():void{
        console.log('Выключени света')
    };    
}

class MusicPlayer {
    play():void{
        console.log('Остановка музыки')
    };
    stop():void{
         console.log('Включение музыки')
    };
}

class LightOnCommand implements ICommand{
    constructor (private light: Light){};

    execute():void{
        this.light.turnOn();
    }    
}
class LightOffCommand implements ICommand{
    constructor (private light: Light){};

    execute():void{
        this.light.turnOff();
    }    
}

class MusicStopPlayer implements ICommand{
    constructor (private musicPlayer: MusicPlayer){};

    execute():void{
        this.musicPlayer.play();
    }    
}

class MusicPlayPlayer implements ICommand{
    constructor (private musicPlayer: MusicPlayer){};

    execute():void{
        this.musicPlayer.stop();
    }    
}

class RemoteControl {
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

const light = new Light();

const music = new MusicPlayer();

const remote = new RemoteControl();

const lightOn = new LightOnCommand(light);

const lightOff = new LightOffCommand(light);

const musicOn = new MusicPlayPlayer(music)

remote.setCommand('1', lightOn);
remote.setCommand('2', lightOff);
remote.setCommand('3', musicOn);

remote.pressButton('1')