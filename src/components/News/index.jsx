import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";


import { Button, Paper } from "@material-ui/core";

class TextFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            data: [],

            savedata: {

                name: '',
                content: '',
                createdAt: new Date().getTime(),
            },
            submitted: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const { name, value } = event.target;
        const { savedata } = this.state;
        this.setState({
            savedata: {
                ...savedata,
                [name]: value
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });

        const { savedata } = this.state;
        var raw = JSON.stringify({
            "title": savedata.name,
            "content": savedata.content,
            "createdAt": savedata.createdAt
        });
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: raw
        };
        console.log(requestOptions);
        fetch("https://hashtags-n-mentions.herokuapp.com/api/post", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                //return this.props.history.push('/');
                //return this.props.history.push({  pathname: '/', state: savedata});
                window.location.replace('/');
            })
            .catch(error => console.log('error', error));
    }
    render() {


        return (
            <section className="py10">
                <Container>
                    <Typography align="center" gutterBottom variant="h5" component="h1">
                        New POST
                    </Typography>
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={3} >

                        </Grid>
                        <Grid item xs={6} >
                            <form onSubmit={this.handleSubmit}>

                                <TextField
                                    fullWidth
                                    label={"Text Title"}
                                    name="name"
                                    variant="outlined"
                                    onChange={this.handleInputChange}
                                    style={{ marginBottom: '27px' }}
                                    required
                                />
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={5}
                                    variant="outlined"
                                    name="content"
                                    onChange={this.handleInputChange}
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
}


export default TextFields;
