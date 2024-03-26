interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
        
}

/*DESESTRUCTURACION*/ 

const {song: anotherSong, songDuration:duration, details}= audioPlayer;
const{author} = details;
/************ */
const song =' New Song';
console.log('Song: ', audioPlayer.song);
console.log('Song: ',song);
console.log('Song: ',anotherSong);
console.log('Song: ',duration);
console.log('Duration : ', audioPlayer.songDuration);
console.log('Author: ', audioPlayer.details.author);
console.log('Author: ', author);

export{

}