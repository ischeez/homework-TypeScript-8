import { ICommand } from "../typings";
import MusicPlayer from "../structures/userService2";

export default class MusicStopPlayer implements ICommand{
    constructor (private musicPlayer: MusicPlayer){};

    execute():void{
        this.musicPlayer.stop();
    }    
}