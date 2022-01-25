import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import CardActionsExample from "../common/CardActions"
import Container from '@material-ui/core/Container';

import Grid from "@material-ui/core/Grid";
import { dataService } from '../services/data.service';

export default class Homeslider extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        this.getAllPostList();
    }
    getAllPostList() {
        dataService.getAllPostList()
            .then(
                res => {
                    console.log(res.posts);
                    this.setState({ data: res.posts });

                },
                error => {
                    error("Something went wrong !!", "Post Store");
                }
            )
    }




    render() {
        const { data } = this.state;


        return (
            <section className="py10">
                <Container>
                    <Typography align="center" gutterBottom variant="h5" component="h1">
                        All POSTS
                    </Typography>
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        {data.sort((a, b) => b.createdAt - a.createdAt).map((post, index) => {

                            return <CardActionsExample key={index} title={post.title} content={post.content} id={post._id} />
                        }
                        )}




                    </Grid>
                </Container>
            </section>


        );
    }
}
