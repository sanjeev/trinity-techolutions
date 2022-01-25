import React, { useState, useEffect,useRef } from 'react';
import Global from '../helpers/global';
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";


import { Button } from "@material-ui/core";

export default function TextFields() {
    const { id } = useParams();
    
    const [single, setSingle] = useState([]);
    useEffect(() => {

        const url = Global.BASE_API_PATH + `post/${id}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setSingle(json.post);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <section className="py10">
            <Container>
                <Typography align="center" gutterBottom variant="h5" component="h1">
                    Edit Post
                </Typography>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={3} >

                    </Grid>
                    <Grid item xs={6} >
                        <form >

                            <TextField
                                fullWidth
                                label={"Text Title"}
                                name="name"
                                variant="outlined"
                                
                               
                                style={{ marginBottom: '27px' }}
                                required
                            />
                            <TextField
                                fullWidth
                                multiline
                                rows={5}
                                variant="outlined"
                                name="content"
                                
                                label={"Text Content"} //optional
                                required
                            />
                            <Button style={{ margin: '0px auto', display: "flex" }} className="butotop" variant="outlined" type="submit" >Save</Button>


                        </form>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );

}    

