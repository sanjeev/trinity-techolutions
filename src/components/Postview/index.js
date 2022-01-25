import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Global from '../helpers/global';
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Grid from "@material-ui/core/Grid";
export default function BlogPost() {
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
                    View Post
                </Typography>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={3} >

                    </Grid>
                    <Grid item xs={6} >
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {single.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {single.content}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <ThumbUpIcon />
                                </IconButton>

                                <MenuItem component={Link} to={`/edit/${single._id}`}>
                                    Edit
                                </MenuItem >

                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3} >

                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

