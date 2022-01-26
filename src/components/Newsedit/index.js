import React, {useEffect } from 'react';
import Global from '../helpers/global';
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";


import { Button } from "@material-ui/core";

export default function TextFields() {
    const { id } = useParams();
    const [state, setState] = React.useState({
        title: "",
        content: "",
        createdAt: new Date().getTime(),
      })
    
    useEffect(() => {

        const url = Global.BASE_API_PATH + `post/${id}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.post.title);
                console.log(json.post.content);
                setState({ title: json.post.title, content: json.post.content });
              

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    function handleCheckboxClick(event) {
        const { name, value } = event.target;
        
        setState({
            ...state,
            [name]: value
          });
    }
    function handleSubmit(event){
        event.preventDefault();
       
        var raw = JSON.stringify({
            "title": state.title,
            "content": state.content,
            "createdAt": state.createdAt
        });
        const requestOptions = {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: raw
        };
        console.log(state);
       console.log(requestOptions);
        const url = Global.BASE_API_PATH + `post/${id}`;
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                //return this.props.history.push('/');
                //return this.props.history.push({  pathname: '/', state: savedata});
                window.location.replace(`/view/${id}`);
            })
            .catch(error => console.log('error', error));
    }
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
                        <form  onSubmit={handleSubmit}>

                            <TextField
                                fullWidth
                                multiline
                                variant="outlined"
                                name="title"
                                InputLabelProps={{ shrink: true }}
                                defaultValue={state.title}
                                label={"Text Title"} //optional
                                required
                                onChange={ handleCheckboxClick }
                            />
                            <TextField
                                fullWidth
                                multiline
                                rows={5}
                                variant="outlined"
                                name="content"
                                InputLabelProps={{ shrink: true }}
                                onChange={ handleCheckboxClick }
                                defaultValue={state.content}
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

