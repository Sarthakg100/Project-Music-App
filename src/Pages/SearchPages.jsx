import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";

export const SearchPages = () => {
    const [allSongs , setSongs] = useState([]);

    const [flag,setFlag] = useState(false);
    const [song,setPlayerSong] = useState(null)
    
    const loadSongs = async () =>{
        setSongs( await getSongs('Latest Song'));
    }
    useEffect(()=>{
        loadSongs();

    },[])
    const togglePlayer = (flag, songarg) =>{
        console.log('Flag',flag,'song Object',songarg);
        setPlayerSong(songarg)
        setFlag(flag);

    }
    const getArtistName = async (artistName)=>{
        console.log('Rec Artist Name',artistName);
      //  const allSongs = await getSongs(artistName);
        setSongs( await getSongs(artistName));
    }
    const jsx = <><Search fn = {getArtistName}/>
    <Songs fn = {togglePlayer} allsongs = {allSongs}  /></>;
    return(
    <div className="container">
        
       <center> <h6 className="form-control alert alert-info">MUSIC APP</h6> </center>

    
        {flag?<Player fn={togglePlayer} song={song}/>:jsx}
        

        </div>);
}