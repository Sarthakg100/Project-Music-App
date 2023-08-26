export const Player = ({fn,song}) =>{
    return (
    <div>
        <center>
        
        <button onClick={()=>{
            fn(false,null);
        }} className="btn btn-success ">Back to song </button>
        <p>
        <p>
        <p>
        <img src = {song.artworkUrl100}/>
        <br/>
        {song?.artistName} {song?.trackName}
        </p>
        </p>

        </p>
        <br/>
        <br/>
    <audio controls>
        <source src={song?.previewUrl} type="audio/mp4"/>
       Your browser does not support this audio element.

    </audio>
    </center>
    </div>)
}