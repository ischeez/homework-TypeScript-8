"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Light {
    turnOn() {
        console.log('Включение света');
    }
    ;
    turnOff() {
        console.log('Выключени света');
    }
    ;
}
class MusicPlayer {
    play() {
        console.log('Остановка музыки');
    }
    ;
    stop() {
        console.log('Включение музыки');
    }
    ;
}
class LightOnCommand {
    light;
    constructor(light) {
        this.light = light;
    }
    ;
    execute() {
        this.light.turnOn();
    }
}
class LightOffCommand {
    light;
    constructor(light) {
        this.light = light;
    }
    ;
    execute() {
        this.light.turnOff();
    }
}
class MusicStopPlayer {
    musicPlayer;
    constructor(musicPlayer) {
        this.musicPlayer = musicPlayer;
    }
    ;
    execute() {
        this.musicPlayer.play();
    }
}
class MusicPlayPlayer {
    musicPlayer;
    constructor(musicPlayer) {
        this.musicPlayer = musicPlayer;
    }
    ;
    execute() {
        this.musicPlayer.stop();
    }
}
class RemoteControl {
    commands = new Map();
    setCommand(buttonId, command) {
        this.commands.set(buttonId, command);
    }
    pressButton(buttonId) {
        const command = this.commands.get(buttonId);
        if (command) {
            command.execute();
        }
        else {
            console.log('Неизвестная ошибка');
        }
    }
}
const light = new Light();
const music = new MusicPlayer();
const remote = new RemoteControl();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const musicOn = new MusicPlayPlayer(music);
remote.setCommand('1', lightOn);
remote.setCommand('2', lightOff);
remote.setCommand('3', musicOn);
remote.pressButton('1');
