import { ICommand } from "../typings";
import MusicPlayer from "../structures/userService2";

export default class MusicPlayPlayer implements ICommand{
    constructor (private musicPlayer: MusicPlayer){};

    execute():void{
        this.musicPlayer.play();
    }    
}