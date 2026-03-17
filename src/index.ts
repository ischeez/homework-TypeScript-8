import LightOnCommand from "./commands/1";
import LightOffCommand from "./commands/2";
import RemoteControl from "./structures/client";
import Light from "./structures/userService";
import MusicPlayer from "./structures/userService2";
import MusicPlayPlayer from "./commands/3";
import MusicStopPlayer from "./commands/4"; 

const light = new Light();

const music = new MusicPlayer();

const remote = new RemoteControl();

const lightOn = new LightOnCommand(light);

const lightOff = new LightOffCommand(light);

const musicOn = new MusicPlayPlayer(music);

const musicOff = new MusicStopPlayer(music);

remote.setCommand('1', lightOn);
remote.setCommand('2', lightOff);
remote.setCommand('3', musicOn);
remote.setCommand('4', musicOff)

remote.pressButton('1')