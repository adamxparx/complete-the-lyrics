import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import FirstSinger from "./FirstSinger";

export default function MainLayout() {
    const navigate = useNavigate();
    const [lyrics, setLyrics] = useState([]);

    const appendLyric = (lyric) => {
        setLyrics(prev => [...prev, lyric]);
    }

    return (
        <Grid container size={12} sx={{ display: "block", justifyItems: "center", padding: "20px"}}>
            <Grid>Complete The Lyrics</Grid>
            <Grid container spacing={2.2} sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px"}}>
                <NavLink to="first">
                    <Button variant="outlined">First Singer</Button>
                </NavLink>
                <NavLink to="second">
                    <Button variant="outlined">Second Singer</Button>
                </NavLink>
                <NavLink to="third">
                    <Button variant="outlined">Third Singer</Button>
                </NavLink>
                <NavLink to="fourth">
                    <Button variant="outlined">Fourth Singer</Button>
                </NavLink>
            </Grid>
            <Outlet 
                context={{
                    lyrics: lyrics,
                    appendLyric: appendLyric
                }}    
            />
        </Grid>
    );
}