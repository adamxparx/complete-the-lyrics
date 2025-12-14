import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ArrayGrid, LyricGrid } from "../components/CustomGrid";

export default function ThirdSinger() { 
    const [lyric, setLyric] = useState("");
    const { lyrics, appendLyric } = useOutletContext();

    const handleEnter = (event) => {
        if (event.key == "Enter" && lyric != "") {
            appendLyric("Third Singer: " + lyric);
            setLyric("");
        }
    };

    return (
        <>
            <Grid container sx={{ width: "630px" }}>
                <TextField 
                    sx={{ width: "100%" }} 
                    variant="outlined" 
                    placeholder="Third singer..." 
                    value={lyric}
                    onChange={(e) => setLyric(e.target.value)}
                    onKeyDown={handleEnter} />
            </Grid>
            
            <ArrayGrid container>
                {lyrics.map((lyric) => {
                    return <LyricGrid size={12}>{lyric}</LyricGrid>
                })}
                {(lyric != "") ? 
                    <LyricGrid size={12}>Third Singer: {lyric}</LyricGrid> :
                    <></>
                }
            </ArrayGrid>
        </>
    )
}